import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './site/pages/HomePage';
import CaseStudyPage from './site/pages/CaseStudyPage';
import TemplatePage from './site/pages/TemplatePage';
import AssetsPage from './site/pages/AssetsPage';
import NotFoundPage from './site/pages/NotFoundPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="/case-studies/:id" element={<CaseStudyPage />} />
        <Route path="/templates/:id" element={<TemplatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}
