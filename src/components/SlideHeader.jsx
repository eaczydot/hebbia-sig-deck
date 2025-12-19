import React from 'react';
import { motion } from 'framer-motion';

export const SlideHeader = ({
    kicker,
    title,
    subtitle,
    align = 'left',
    kickerColor,
    titleSize = 48,
    subtitleMaxWidth = 800,
    subtitleSize,
    marginBottom = 40,
}) => {
    const textAlign = align;

    const resolvedTitleFontSize = typeof titleSize === 'number'
        ? `clamp(${Math.max(32, Math.round(titleSize * 0.72))}px, 6vw, ${titleSize}px)`
        : titleSize;

    const resolvedMarginBottom = typeof marginBottom === 'number'
        ? `clamp(${Math.max(18, Math.round(marginBottom * 0.65))}px, 3.2vw, ${marginBottom}px)`
        : marginBottom;

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
                marginBottom: resolvedMarginBottom,
                textAlign,
            }}
        >
            {kicker ? (
                <div
                    className="text-matrix-header"
                    style={{
                        justifyContent: align === 'center' ? 'center' : undefined,
                        color: kickerColor || undefined,
                    }}
                >
                    {kicker}
                </div>
            ) : null}

            {title ? (
                <h2 className="text-hero" style={resolvedTitleFontSize ? { fontSize: resolvedTitleFontSize } : undefined}>
                    {title}
                </h2>
            ) : null}

            {subtitle ? (
                <p
                    className="text-subhero"
                    style={{
                        maxWidth: subtitleMaxWidth,
                        fontSize: subtitleSize,
                        marginLeft: align === 'center' ? 'auto' : undefined,
                        marginRight: align === 'center' ? 'auto' : undefined,
                    }}
                >
                    {subtitle}
                </p>
            ) : null}
        </motion.div>
    );
};
