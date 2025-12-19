const COLOR_REGEX = /#(?:[0-9a-fA-F]{3,8})\b|rgba?\(|hsla?\(/;
const ALLOWED_COLOR_VALUES = new Set(['transparent', 'currentColor', 'inherit', 'none']);
const COLOR_PROPERTIES = new Set([
  'color',
  'background',
  'backgroundColor',
  'borderColor',
  'outlineColor',
  'boxShadow',
  'textShadow',
  'fill',
  'stroke',
  'border',
]);

const SPACING_PROPERTIES = new Set([
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'gap',
  'rowGap',
  'columnGap',
  'fontSize',
  'lineHeight',
  'letterSpacing',
  'borderRadius',
  'top',
  'right',
  'bottom',
  'left',
  'width',
  'height',
]);

const getLiteralString = (node) => {
  if (!node) return null;
  if (node.type === 'Literal' && typeof node.value === 'string') {
    return node.value;
  }
  if (node.type === 'TemplateLiteral' && node.expressions.length === 0) {
    return node.quasis[0]?.value?.cooked ?? null;
  }
  return null;
};

const getStyleObjectExpression = (node) => {
  if (!node || node.type !== 'JSXAttribute') return null;
  if (node.name?.name !== 'style') return null;
  if (!node.value || node.value.type !== 'JSXExpressionContainer') return null;
  const expression = node.value.expression;
  return expression?.type === 'ObjectExpression' ? expression : null;
};

const getPropertyName = (property) => {
  if (!property || property.type !== 'Property') return null;
  if (property.key.type === 'Identifier') return property.key.name;
  if (property.key.type === 'Literal') return property.key.value;
  return null;
};

const createStyleVisitor = (context, callback) => ({
  JSXAttribute(node) {
    const styleObject = getStyleObjectExpression(node);
    if (!styleObject) return;
    styleObject.properties.forEach((property) => {
      if (property.type !== 'Property') return;
      callback(property, node);
    });
  },
});

const reportStyleIssue = (context, node, message) => {
  context.report({
    node,
    message,
  });
};

export default {
  rules: {
    'no-raw-colors': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Disallow raw color literals in inline styles.',
        },
        schema: [],
      },
      create(context) {
        return createStyleVisitor(context, (property) => {
          const propertyName = getPropertyName(property);
          if (!COLOR_PROPERTIES.has(propertyName)) return;
          const value = getLiteralString(property.value);
          if (!value) return;
          if (value.includes('var(')) return;
          if (ALLOWED_COLOR_VALUES.has(value)) return;
          if (!COLOR_REGEX.test(value)) return;
          reportStyleIssue(
            context,
            property,
            'Use design tokens (CSS variables) instead of raw color values in inline styles.',
          );
        });
      },
    },
    'no-px-values': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Disallow px-based spacing and typography in inline styles.',
        },
        schema: [],
      },
      create(context) {
        return createStyleVisitor(context, (property) => {
          const propertyName = getPropertyName(property);
          if (!SPACING_PROPERTIES.has(propertyName)) return;
          if (property.value.type === 'Literal' && typeof property.value.value === 'number') {
            reportStyleIssue(
              context,
              property,
              'Avoid numeric pixel values for spacing/typography; use tokens or clamp().',
            );
            return;
          }
          const value = getLiteralString(property.value);
          if (!value) return;
          if (value.includes('px')) {
            reportStyleIssue(
              context,
              property,
              'Avoid px values for spacing/typography; use tokens or clamp().',
            );
          }
        });
      },
    },
    'no-absolute-positioning': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Disallow absolute positioning in slides without waivers.',
        },
        schema: [],
      },
      create(context) {
        return createStyleVisitor(context, (property) => {
          const filename = context.getFilename();
          if (!filename.includes('/src/slides/')) return;
          const propertyName = getPropertyName(property);
          if (propertyName !== 'position') return;
          const value = getLiteralString(property.value);
          if (value !== 'absolute') return;
          reportStyleIssue(
            context,
            property,
            'Avoid absolute positioning in slides. Add a waiver if required.',
          );
        });
      },
    },
  },
};
