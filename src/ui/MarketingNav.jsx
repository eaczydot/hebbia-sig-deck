import React from 'react';
import { Link } from 'react-router-dom';

export function MarketingNav({ right }) {
  return (
    <div className="site-header">
      <div className="site-header__left">
        <Link to="/" className="site-nav-link">
          Case Studies Library
        </Link>
        <span className="u-font-mono" style={{ color: 'var(--txt-dim)' }}>
          //
        </span>
        <Link to="/solutions" className="site-nav-link">
          Solutions
        </Link>
        <Link to="/components" className="site-nav-link">
          Components
        </Link>
        <Link to="/assets" className="site-nav-link">
          Assets
        </Link>
      </div>
      <div className="site-header__right">{right}</div>
    </div>
  );
}

