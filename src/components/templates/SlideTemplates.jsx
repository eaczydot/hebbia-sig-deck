import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { SlideHeader } from '../SlideHeader';

export const SlideTemplateHero = ({ kicker, title, subtitle, footer, children }) => (
  <SlideContainer className="template-hero">
    <div className="template-hero__body">
      {kicker && <div className="text-matrix-header">{kicker}</div>}
      {title && <h1 className="text-hero">{title}</h1>}
      {subtitle && <p className="text-subhero">{subtitle}</p>}
      {children}
    </div>
    {footer && <div className="template-hero__footer">{footer}</div>}
  </SlideContainer>
);

export const SlideTemplateTwoColumn = ({
  title,
  subtitle,
  aside,
  main,
  headerLabel = 'Overview',
}) => (
  <SlideContainer>
    <SlideHeader label={headerLabel} title={title} subtitle={subtitle} />
    <div className="template-two-column">
      <aside className="template-two-column__aside">{aside}</aside>
      <section className="template-two-column__main">{main}</section>
    </div>
  </SlideContainer>
);

export const SlideTemplateDataStory = ({ title, subtitle, callouts, chart, headerLabel = 'Data' }) => (
  <SlideContainer>
    <SlideHeader label={headerLabel} title={title} subtitle={subtitle} />
    <div className="template-data-story">
      <div className="template-data-story__callouts">{callouts}</div>
      <div className="template-data-story__chart">{chart}</div>
    </div>
  </SlideContainer>
);

export const SlideTemplateComparison = ({ title, subtitle, left, right, headerLabel = 'Comparison' }) => (
  <SlideContainer>
    <SlideHeader label={headerLabel} title={title} subtitle={subtitle} />
    <div className="template-comparison">
      <div className="template-comparison__column">{left}</div>
      <div className="template-comparison__column">{right}</div>
    </div>
  </SlideContainer>
);

export const SlideTemplateTimeline = ({ title, subtitle, milestones, headerLabel = 'Timeline' }) => (
  <SlideContainer className="template-timeline">
    <SlideHeader label={headerLabel} title={title} subtitle={subtitle} />
    <div className="template-timeline__track">{milestones}</div>
  </SlideContainer>
);

export const SlideTemplateSummary = ({ title, subtitle, points, highlight, headerLabel = 'Summary' }) => (
  <SlideContainer>
    <SlideHeader label={headerLabel} title={title} subtitle={subtitle} />
    <div className="template-summary">
      <div className="template-summary__points">{points}</div>
      <div>{highlight}</div>
    </div>
  </SlideContainer>
);

export const SlideTemplateSection = ({ label, title, subtitle, children }) => (
  <SlideContainer className="template-section">
    <SlideHeader label={label} title={title} subtitle={subtitle} />
    {children}
  </SlideContainer>
);
