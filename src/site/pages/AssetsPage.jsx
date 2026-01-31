import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ViewportShell } from '../../templates/ViewportShell';
import { SlideContainer } from '../../components/SlideContainer';
import { GlassPanel } from '../../components/GlassPanel';
import { approvedAssets } from '../assets/approvedAssets';

function AssetTile({ asset }) {
  const media = (() => {
    if (asset.type === 'video') {
      return (
        <video
          src={asset.src}
          controls
          playsInline
          preload="metadata"
          style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 4 }}
        />
      );
    }

    return (
      <img
        src={asset.src}
        alt={asset.title}
        loading="lazy"
        style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 4 }}
      />
    );
  })();

  return (
    <GlassPanel className="site-card" style={{ gap: 10 }}>
      {media}
      <div className="text-matrix-header">{asset.type.toUpperCase()}</div>
      <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em' }}>{asset.title}</div>
      <div className="text-cell-data" style={{ color: 'var(--txt-sec)' }}>
        <span className="u-font-mono">{asset.src}</span>
      </div>
      {asset.tags?.length ? (
        <div className="site-tags">
          {asset.tags.map((t) => (
            <span key={t} className="site-tag">
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </GlassPanel>
  );
}

export default function AssetsPage() {
  const [filter, setFilter] = useState('all');

  const types = useMemo(() => {
    const set = new Set(approvedAssets.map((a) => a.type));
    return ['all', ...Array.from(set)];
  }, []);

  const visible = useMemo(() => {
    if (filter === 'all') return approvedAssets;
    return approvedAssets.filter((a) => a.type === filter);
  }, [filter]);

  return (
    <ViewportShell>
      <div className="site-header">
        <div className="site-header__left">
          <Link to="/" className="site-nav-link">
            Case Studies Library
          </Link>
          <span className="u-font-mono" style={{ color: 'var(--txt-dim)' }}>
            //
          </span>
          <span>ASSETS</span>
        </div>
        <div className="site-header__right">APPROVED ONLY</div>
      </div>

      <SlideContainer className="site-scroll">
        <div style={{ marginBottom: 28 }}>
          <div className="text-matrix-header">LIBRARY</div>
          <div className="text-hero" style={{ fontSize: 56 }}>
            Assets
          </div>
          <div className="text-subhero" style={{ marginBottom: 0 }}>
            This page intentionally does <strong>not</strong> scrape third-party sites. Add only assets you have explicit
            rights to use and that contain <strong>no people</strong> and <strong>no other-company branding</strong>.
          </div>
        </div>

        <div className="site-toolbar">
          <div className="text-matrix-header" style={{ marginBottom: 0 }}>
            FILTER
          </div>
          <div className="site-filter">
            {types.map((t) => (
              <button
                key={t}
                type="button"
                className={`site-filter-pill${filter === t ? ' is-active' : ''}`}
                onClick={() => setFilter(t)}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {approvedAssets.length === 0 ? (
          <GlassPanel className="site-card" style={{ gap: 12, maxWidth: 980 }}>
            <div className="text-matrix-header">NO ASSETS YET</div>
            <div className="text-cell-data">
              Add files under <span className="u-font-mono">public/assets/</span> and then register them in{' '}
              <span className="u-font-mono">src/site/assets/approvedAssets.js</span>.
            </div>
            <div className="text-cell-data" style={{ color: 'var(--txt-sec)' }}>
              Tip: keep filenames descriptive and avoid anything that could include people or other-company logos.
            </div>
          </GlassPanel>
        ) : (
          <div className="site-asset-grid">
            {visible.map((a) => (
              <AssetTile key={a.id} asset={a} />
            ))}
          </div>
        )}
      </SlideContainer>
    </ViewportShell>
  );
}

