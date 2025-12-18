import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const FinancialLineChart = ({ data, color = '#465BFF', height = 300 }) => {
    return (
        <div style={{ width: '100%', height }}>
            <ResponsiveContainer>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                            <stop offset="95%" stopColor={color} stopOpacity={0} />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    {/* Hidden axes for clean look, or minimal styling if needed */}
                    <XAxis
                        dataKey="name"
                        hide={true}
                        stroke="#444"
                        tick={{ fill: '#666', fontSize: 10 }}
                    />
                    <YAxis
                        hide={true}
                        stroke="#444"
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#141414',
                            borderColor: '#333',
                            color: '#fff',
                            fontSize: '12px'
                        }}
                        itemStyle={{ color: color }}
                    />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke={color}
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorValue)"
                        filter="url(#glow)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
