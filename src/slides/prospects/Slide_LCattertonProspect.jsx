import React, { useState } from 'react';
import { SlideContainer } from '../../components/SlideContainer';
import { GlassPanel } from '../../components/GlassPanel';
import { BuyingCommitteeChart } from '../../components/prospects/BuyingCommitteeChart';
import { motion } from 'framer-motion';
import { 
    Building2, 
    Globe, 
    Linkedin, 
    Target, 
    TrendingUp, 
    Calendar,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    FileSearch,
    Briefcase
} from 'lucide-react';

// Import the committee data
import lcattertonData from '../../data/lcatterton-committee.json';

const StatCard = ({ icon: Icon, label, value, color = 'var(--color-brand-cobalt)' }) => (
    <GlassPanel style={{
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        background: 'var(--color-canvas-charcoal)'
    }}>
        <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: `${color}20`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Icon size={20} color={color} />
        </div>
        <div>
            <div style={{
                fontSize: '10px',
                fontWeight: 600,
                color: 'var(--color-text-tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '2px'
            }}>
                {label}
            </div>
            <div style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--color-text-primary)'
            }}>
                {value}
            </div>
        </div>
    </GlassPanel>
);

const NextStepItem = ({ step, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 * index }}
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            background: 'var(--color-border-functional)',
            borderRadius: '6px',
            marginBottom: '8px'
        }}
    >
        <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: 'var(--color-brand-cobalt)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 600,
            color: 'white',
            flexShrink: 0
        }}>
            {index + 1}
        </div>
        <span style={{
            fontSize: '13px',
            color: 'var(--color-text-secondary)'
        }}>
            {step}
        </span>
    </motion.div>
);

const HebbiaValueProp = ({ icon: Icon, title, description }) => (
    <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '16px'
    }}>
        <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '6px',
            background: 'var(--color-brand-cobalt)20',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
        }}>
            <Icon size={16} color="var(--color-brand-cobalt)" />
        </div>
        <div>
            <div style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                marginBottom: '4px'
            }}>
                {title}
            </div>
            <div style={{
                fontSize: '12px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.4
            }}>
                {description}
            </div>
        </div>
    </div>
);

export const Slide_LCattertonProspect = () => {
    const [activeTab, setActiveTab] = useState('committee');

    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '24px' }}>
                <div className="text-matrix-header" style={{ marginBottom: '8px' }}>
                    PROSPECT INTELLIGENCE
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '12px',
                            background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
                            border: '1px solid var(--color-border-functional)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Building2 size={28} color="var(--color-brand-cobalt)" />
                        </div>
                        <div>
                            <h1 style={{
                                fontSize: '32px',
                                fontWeight: 600,
                                color: 'var(--color-text-primary)',
                                marginBottom: '4px'
                            }}>
                                L Catterton
                            </h1>
                            <div style={{
                                fontSize: '14px',
                                color: 'var(--color-text-secondary)'
                            }}>
                                Global Consumer-Focused Private Equity Firm
                            </div>
                        </div>
                    </div>
                    
                    {/* Quick links */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <a 
                            href="https://www.lcatterton.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '8px 12px',
                                background: 'var(--color-border-functional)',
                                borderRadius: '6px',
                                fontSize: '12px',
                                color: 'var(--color-text-secondary)',
                                textDecoration: 'none'
                            }}
                        >
                            <Globe size={14} />
                            Website
                        </a>
                        <a 
                            href="https://www.linkedin.com/company/l-catterton"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '8px 12px',
                                background: '#0A66C2',
                                borderRadius: '6px',
                                fontSize: '12px',
                                color: 'white',
                                textDecoration: 'none'
                            }}
                        >
                            <Linkedin size={14} />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            {/* Stats row */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '12px',
                marginBottom: '24px'
            }}>
                <StatCard 
                    icon={TrendingUp} 
                    label="AUM" 
                    value="$35B+" 
                    color="#10B981"
                />
                <StatCard 
                    icon={Briefcase} 
                    label="Focus" 
                    value="Consumer" 
                    color="#8B5CF6"
                />
                <StatCard 
                    icon={Target} 
                    label="Deal Stage" 
                    value={lcattertonData.dealStage}
                    color="#F59E0B"
                />
                <StatCard 
                    icon={Building2} 
                    label="HQ" 
                    value="Greenwich, CT"
                    color="#3B82F6"
                />
                <StatCard 
                    icon={Calendar} 
                    label="Last Updated" 
                    value="Feb 2026"
                    color="#EC4899"
                />
            </div>

            {/* Tab navigation */}
            <div style={{
                display: 'flex',
                gap: '4px',
                marginBottom: '16px',
                background: 'var(--color-border-functional)',
                padding: '4px',
                borderRadius: '8px',
                width: 'fit-content'
            }}>
                {[
                    { id: 'committee', label: 'Buying Committee' },
                    { id: 'strategy', label: 'Sales Strategy' }
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            padding: '8px 16px',
                            fontSize: '12px',
                            fontWeight: 500,
                            borderRadius: '6px',
                            background: activeTab === tab.id ? 'var(--color-brand-cobalt)' : 'transparent',
                            color: activeTab === tab.id ? 'white' : 'var(--color-text-secondary)',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Main content area */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: activeTab === 'committee' ? '1fr' : '2fr 1fr',
                gap: '24px',
                height: 'calc(100% - 280px)',
                overflow: 'hidden'
            }}>
                {activeTab === 'committee' ? (
                    /* Buying Committee Tab */
                    <div style={{ overflow: 'auto', paddingRight: '8px' }}>
                        <BuyingCommitteeChart data={lcattertonData} showFilters={true} />
                    </div>
                ) : (
                    /* Sales Strategy Tab */
                    <>
                        <div style={{ overflow: 'auto' }}>
                            <GlassPanel style={{
                                padding: '24px',
                                marginBottom: '16px',
                                background: 'var(--color-canvas-charcoal)'
                            }}>
                                <div style={{
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: 'var(--color-text-primary)',
                                    marginBottom: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    <Sparkles size={16} color="var(--color-brand-cobalt)" />
                                    Hebbia Value Proposition for L Catterton
                                </div>
                                
                                <HebbiaValueProp 
                                    icon={FileSearch}
                                    title="Consumer Deal Due Diligence"
                                    description="Analyze hundreds of consumer brand documents, market research, and competitive intelligence in minutes instead of weeks."
                                />
                                <HebbiaValueProp 
                                    icon={TrendingUp}
                                    title="Portfolio Company Intelligence"
                                    description="Monitor portfolio company performance, market trends, and competitive dynamics across the consumer landscape."
                                />
                                <HebbiaValueProp 
                                    icon={Target}
                                    title="Deal Sourcing & Screening"
                                    description="Screen potential targets faster by extracting key metrics and insights from CIMs, financials, and market data."
                                />
                            </GlassPanel>

                            <GlassPanel style={{
                                padding: '24px',
                                background: 'var(--color-canvas-charcoal)'
                            }}>
                                <div style={{
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: 'var(--color-text-primary)',
                                    marginBottom: '16px'
                                }}>
                                    Key Talking Points
                                </div>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {[
                                        "Consumer sector expertise with 200+ brands analyzed in our platform",
                                        "SOC 2 Type II certified - meets PE security requirements",
                                        "Used by leading PE firms including Advent, TPG, and KKR",
                                        "Reduces deal analysis time by 80% on average",
                                        "Integrates with existing workflows (Excel, PowerPoint, data rooms)"
                                    ].map((point, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '10px',
                                            marginBottom: '12px'
                                        }}>
                                            <CheckCircle2 size={16} color="#10B981" style={{ marginTop: '2px', flexShrink: 0 }} />
                                            <span style={{
                                                fontSize: '13px',
                                                color: 'var(--color-text-secondary)',
                                                lineHeight: 1.4
                                            }}>
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </GlassPanel>
                        </div>

                        <div>
                            <GlassPanel style={{
                                padding: '20px',
                                background: 'var(--color-canvas-charcoal)'
                            }}>
                                <div style={{
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: 'var(--color-text-primary)',
                                    marginBottom: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    <ArrowRight size={16} color="var(--color-brand-cobalt)" />
                                    Next Steps
                                </div>
                                {lcattertonData.nextSteps.map((step, i) => (
                                    <NextStepItem key={i} step={step} index={i} />
                                ))}
                            </GlassPanel>
                        </div>
                    </>
                )}
            </div>

            {/* Data source note */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '60px',
                fontSize: '10px',
                color: 'var(--color-text-quaternary)'
            }}>
                Data sourced via Firecrawl • Last updated: {lcattertonData.lastUpdated}
            </div>
        </SlideContainer>
    );
};

export default Slide_LCattertonProspect;
