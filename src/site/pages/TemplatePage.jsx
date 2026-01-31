import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { ViewportShell } from '../../templates/ViewportShell';
import { SlideContainer } from '../../components/SlideContainer';
import { templates } from '../registry';
import NotFoundPage from './NotFoundPage';

const TEMPLATE_COMPONENTS = new Map(templates.map((t) => [t.id, React.lazy(t.loader)]));

export default function TemplatePage() {
  const { id } = useParams();
  const entry = templates.find((t) => t.id === id);
  const LazyTemplate = TEMPLATE_COMPONENTS.get(id);

  if (!entry || !LazyTemplate) {
    return (
      <NotFoundPage
        title="Template not found"
        description="This template ID isn’t registered yet."
      />
    );
  }

  return (
    <Suspense
      fallback={
        <ViewportShell>
          <div className="site-header">
            <div className="site-header__left">LOADING</div>
            <div className="site-header__right">{entry.id}</div>
          </div>
          <SlideContainer>
            <div className="text-hero" style={{ fontSize: 56 }}>
              Loading…
            </div>
          </SlideContainer>
        </ViewportShell>
      }
    >
      <LazyTemplate />
    </Suspense>
  );
}

