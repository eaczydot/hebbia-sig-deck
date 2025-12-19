import React, { useEffect, useMemo, useRef } from 'react';

const mulberry32 = (seed) => {
    return function () {
        let t = seed += 0x6D2B79F5;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
};

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const project = (p, cameraZ) => {
    const scale = cameraZ / (cameraZ - p.z);
    return {
        x: p.x * scale,
        y: p.y * scale,
        z: p.z,
        scale,
    };
};

export const NeuralNet3D = ({
    height = 420,
    nodeCount = 44,
    seed = 7,
    accent = 'rgba(59, 130, 246, 1)',
    dim = 'rgba(240, 240, 240, 0.35)',
    lineDim = 'rgba(240, 240, 240, 0.14)',
    background = 'rgba(0,0,0,0)',
    style = {},
}) => {
    const canvasRef = useRef(null);
    const rafRef = useRef(null);
    const stateRef = useRef({
        pointerX: 0,
        pointerY: 0,
        hasPointer: false,
        t: 0,
    });

    const { nodes, edges } = useMemo(() => {
        const rand = mulberry32(seed);

        const pts = Array.from({ length: nodeCount }).map((_, i) => {
            const u = rand();
            const v = rand();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const r = 0.92 + rand() * 0.10;
            return {
                id: i,
                x: r * Math.sin(phi) * Math.cos(theta),
                y: r * Math.cos(phi),
                z: r * Math.sin(phi) * Math.sin(theta),
            };
        });

        const k = 3;
        const ed = [];
        for (let i = 0; i < pts.length; i++) {
            const a = pts[i];
            const dists = [];
            for (let j = 0; j < pts.length; j++) {
                if (i === j) continue;
                const b = pts[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dz = a.z - b.z;
                dists.push({ j, d: dx * dx + dy * dy + dz * dz });
            }
            dists.sort((x, y) => x.d - y.d);
            for (let t = 0; t < k; t++) {
                const j = dists[t]?.j;
                if (j == null) continue;
                const key = i < j ? `${i}-${j}` : `${j}-${i}`;
                ed.push({ i, j, key });
            }
        }
        const unique = new Map();
        for (const e of ed) unique.set(e.key, { i: e.i, j: e.j });

        return { nodes: pts, edges: Array.from(unique.values()) };
    }, [nodeCount, seed]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let mounted = true;

        const onPointerMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            stateRef.current.pointerX = x;
            stateRef.current.pointerY = y;
            stateRef.current.hasPointer = true;
        };

        const onPointerLeave = () => {
            stateRef.current.hasPointer = false;
        };

        canvas.addEventListener('pointermove', onPointerMove);
        canvas.addEventListener('pointerleave', onPointerLeave);

        const draw = () => {
            if (!mounted) return;

            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            const w = Math.max(1, Math.floor(rect.width * dpr));
            const h = Math.max(1, Math.floor(rect.height * dpr));
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
            }

            const s = stateRef.current;
            s.t += 0.012;

            const cx = w / 2;
            const cy = h / 2;

            const baseRotY = s.t * 0.55;
            const baseRotX = s.t * 0.25;

            const pointerRotY = s.hasPointer ? (s.pointerX - 0.5) * 1.2 : 0;
            const pointerRotX = s.hasPointer ? (0.5 - s.pointerY) * 0.9 : 0;

            const rotY = baseRotY + pointerRotY;
            const rotX = baseRotX + pointerRotX;

            const sinY = Math.sin(rotY);
            const cosY = Math.cos(rotY);
            const sinX = Math.sin(rotX);
            const cosX = Math.cos(rotX);

            const cameraZ = 2.2;
            const radius = Math.min(w, h) * 0.34;

            ctx.clearRect(0, 0, w, h);
            if (background !== 'rgba(0,0,0,0)') {
                ctx.fillStyle = background;
                ctx.fillRect(0, 0, w, h);
            }

            const pts2 = nodes.map((p) => {
                let x = p.x;
                let y = p.y;
                let z = p.z;

                const x1 = x * cosY + z * sinY;
                const z1 = -x * sinY + z * cosY;
                x = x1;
                z = z1;

                const y1 = y * cosX - z * sinX;
                const z2 = y * sinX + z * cosX;
                y = y1;
                z = z2;

                const pr = project({ x, y, z }, cameraZ);

                return {
                    ...pr,
                    px: cx + pr.x * radius,
                    py: cy + pr.y * radius,
                };
            });

            ctx.lineWidth = 1;
            ctx.strokeStyle = lineDim;
            ctx.globalCompositeOperation = 'source-over';

            for (const e of edges) {
                const a = pts2[e.i];
                const b = pts2[e.j];
                const depth = (a.z + b.z) / 2;
                const alpha = clamp(0.18 + (0.55 - depth) * 0.20, 0.05, 0.22);
                ctx.globalAlpha = alpha;
                ctx.beginPath();
                ctx.moveTo(a.px, a.py);
                ctx.lineTo(b.px, b.py);
                ctx.stroke();
            }

            ctx.globalAlpha = 1;

            const sorted = pts2
                .map((p, i) => ({ ...p, i }))
                .sort((a, b) => a.z - b.z);

            for (const p of sorted) {
                const focus = clamp((0.95 - p.z) * 0.9, 0, 1);
                const r = 2.2 * p.scale;

                ctx.globalAlpha = 0.8 * focus;
                ctx.fillStyle = accent;
                ctx.beginPath();
                ctx.arc(p.px, p.py, r, 0, Math.PI * 2);
                ctx.fill();

                ctx.globalAlpha = 0.35 * focus;
                ctx.fillStyle = dim;
                ctx.beginPath();
                ctx.arc(p.px, p.py, r + 2.2, 0, Math.PI * 2);
                ctx.fill();
            }

            rafRef.current = requestAnimationFrame(draw);
        };

        rafRef.current = requestAnimationFrame(draw);

        return () => {
            mounted = false;
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            canvas.removeEventListener('pointermove', onPointerMove);
            canvas.removeEventListener('pointerleave', onPointerLeave);
        };
    }, [nodes, edges, accent, dim, lineDim, background]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: '100%',
                height,
                display: 'block',
                borderRadius: 'var(--glass-radius)',
                ...style,
            }}
        />
    );
};
