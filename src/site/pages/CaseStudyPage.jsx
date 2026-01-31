import React, { Suspense, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ViewportShell } from '../../templates/ViewportShell';
import { SlideContainer } from '../../components/SlideContainer';
import { caseStudies } from '../registry';
import NotFoundPage from './NotFoundPage';

export default function CaseStudyPage() {
  const { id } = useParams();
  const entry = caseStudies.find((c) => c.id === id);

  const LazyCaseStudy = useMemo(() => {
    if (!entry) return null;
    return React.lazy(entry.loader);
  }, [entry]);

  if (!entry) {
    return (
      <NotFoundPage
        title="Case study not found"
        description="This case study ID isn’t registered yet."
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
      <LazyCaseStudy />
    </Suspense>
  );
}

