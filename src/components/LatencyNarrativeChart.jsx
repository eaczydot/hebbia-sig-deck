import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const pathFromPoints = (pts) => {
    if (!pts.length) return '';
    const [p0, ...rest] = pts;
    let d = `M ${p0.x} ${p0.y}`;
    for (let i = 0; i < rest.length; i++) {
        const p = rest[i];
        d += ` L ${p.x} ${p.y}`;
    }
    return d;
};

export const LatencyNarrativeChart = ({
    height = 360,
    accent = 'rgba(59, 130, 246, 1)',
    danger = 'rgba(239, 68, 68, 1)',
    grid = 'rgba(255,255,255,0.12)',
    text = 'rgba(240,240,240,0.85)',
    subtext = 'rgba(163,163,163,0.9)',
}) => {
    const { w, h, pad, dataCurve, capCurve, areaPath } = useMemo(() => {
        const w = 760;
        const h = 360;
        const pad = { l: 40, r: 18, t: 18, b: 34 };

        const x = (t) => pad.l + t * (w - pad.l - pad.r);
        const y = (v) => pad.t + (1 - v) * (h - pad.t - pad.b);

        const data = Array.from({ length: 24 }).map((_, i) => {
            const t = i / 23;
            const v = clamp(0.10 + 0.9 * (t * t * 0.92 + 0.08 * t), 0, 1);
            return { x: x(t), y: y(v), t, v };
        });

        const cap = Array.from({ length: 24 }).map((_, i) => {
            const t = i / 23;
            const v = clamp(0.22 + 0.12 * Math.log2(1 + 4 * t), 0, 1);
            return { x: x(t), y: y(v), t, v };
        });

        const area = `${pathFromPoints(cap)} L ${data[data.length - 1].x} ${data[data.length - 1].y} ${pathFromPoints(data.slice().reverse()).slice(1)} Z`;

        return {
            w,
            h,
            pad,
            dataCurve: data,
            capCurve: cap,
            areaPath: area,
        };
    }, []);

    const lastData = dataCurve[dataCurve.length - 1];
    const lastCap = capCurve[capCurve.length - 1];

    return (
        <div style={{ width: '100%', height }}>
            <svg
                viewBox={`0 0 ${w} ${h}`}
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                style={{ display: 'block' }}
            >
                <defs>
                    <linearGradient id="latencyArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={danger} stopOpacity={0.28} />
                        <stop offset="100%" stopColor={danger} stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="dataLine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={danger} stopOpacity={0.6} />
                        <stop offset="100%" stopColor={danger} stopOpacity={1} />
                    </linearGradient>
                    <linearGradient id="capLine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={accent} stopOpacity={0.35} />
                        <stop offset="100%" stopColor={accent} stopOpacity={1} />
                    </linearGradient>
                    <filter id="softGlow">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {Array.from({ length: 7 }).map((_, i) => {
                    const y = pad.t + i * ((h - pad.t - pad.b) / 6);
                    return (
                        <line
                            key={`h-${i}`}
                            x1={pad.l}
                            y1={y}
                            x2={w - pad.r}
                            y2={y}
                            stroke={grid}
                            strokeWidth={1}
                        />
                    );
                })}

                {Array.from({ length: 9 }).map((_, i) => {
                    const x = pad.l + i * ((w - pad.l - pad.r) / 8);
                    return (
                        <line
                            key={`v-${i}`}
                            x1={x}
                            y1={pad.t}
                            x2={x}
                            y2={h - pad.b}
                            stroke={grid}
                            strokeWidth={1}
                        />
                    );
                })}

                <motion.path
                    d={areaPath}
                    fill="url(#latencyArea)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                />

                <motion.path
                    d={pathFromPoints(dataCurve)}
                    fill="none"
                    stroke="url(#dataLine)"
                    strokeWidth={3.5}
                    strokeLinecap="round"
                    filter="url(#softGlow)"
                    initial={{ pathLength: 0, opacity: 0.0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.0, delay: 0.2, ease: 'easeOut' }}
                />

                <motion.path
                    d={pathFromPoints(capCurve)}
                    fill="none"
                    stroke="url(#capLine)"
                    strokeWidth={3.5}
                    strokeLinecap="round"
                    filter="url(#softGlow)"
                    initial={{ pathLength: 0, opacity: 0.0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.0, delay: 0.55, ease: 'easeOut' }}
                />

                <motion.circle
                    cx={lastData.x}
                    cy={lastData.y}
                    r={5}
                    fill={danger}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                />

                <motion.circle
                    cx={lastCap.x}
                    cy={lastCap.y}
                    r={5}
                    fill={accent}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.25 }}
                />

                <motion.text
                    x={w - pad.r}
                    y={pad.t + 10}
                    textAnchor="end"
                    fontFamily="JetBrains Mono"
                    fontSize={14}
                    fill={subtext}
                    paintOrder="stroke"
                    stroke="rgba(0,0,0,0.7)"
                    strokeWidth={3}
                    strokeLinejoin="round"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    DATA VOLUME
                </motion.text>

                <motion.text
                    x={w - pad.r}
                    y={pad.t + 28}
                    textAnchor="end"
                    fontFamily="JetBrains Mono"
                    fontSize={14}
                    fill={subtext}
                    paintOrder="stroke"
                    stroke="rgba(0,0,0,0.7)"
                    strokeWidth={3}
                    strokeLinejoin="round"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.05 }}
                >
                    HUMAN CAPACITY
                </motion.text>

                <motion.text
                    x={pad.l}
                    y={h - 12}
                    textAnchor="start"
                    fontFamily="JetBrains Mono"
                    fontSize={14}
                    fill={subtext}
                    paintOrder="stroke"
                    stroke="rgba(0,0,0,0.7)"
                    strokeWidth={3}
                    strokeLinejoin="round"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.85 }}
                >
                    TIME →
                </motion.text>

                <motion.rect
                    x={(lastCap.x + lastData.x) / 2 - 70}
                    y={(lastCap.y + lastData.y) / 2 - 12}
                    width={140}
                    height={24}
                    rx={6}
                    fill="rgba(0,0,0,0.55)"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.25 }}
                />
                <motion.text
                    x={(lastCap.x + lastData.x) / 2}
                    y={(lastCap.y + lastData.y) / 2}
                    textAnchor="middle"
                    fontFamily="JetBrains Mono"
                    fontSize={16}
                    fontWeight={600}
                    fill={text}
                    paintOrder="stroke"
                    stroke="rgba(0,0,0,0.7)"
                    strokeWidth={3}
                    strokeLinejoin="round"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: [1, 1.08, 1] }}
                    transition={{ opacity: { duration: 0.6, delay: 1.3 }, scale: { delay: 1.7, duration: 0.9, times: [0, 0.5, 1] } }}
                >
                    THE LATENCY GAP
                </motion.text>
            </svg>
        </div>
    );
};
