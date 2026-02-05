import React, { useState, useEffect } from 'react';
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

const StatCard = ({ icon: Icon, label, value, color = 'var(--color-brand-cobalt)', isMobile = false }) => (
    <GlassPanel style={{
        padding: isMobile ? '12px' : '16px',
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '10px' : '12px',
        background: 'var(--color-canvas-charcoal)'
    }}>
        <div style={{
            width: isMobile ? '32px' : '40px',
            height: isMobile ? '32px' : '40px',
            borderRadius: '8px',
            background: `${color}20`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
        }}>
            <Icon size={isMobile ? 16 : 20} color={color} />
        </div>
        <div style={{ minWidth: 0 }}>
            <div style={{
                fontSize: isMobile ? '9px' : '10px',
                fontWeight: 600,
                color: 'var(--color-text-tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '2px'
            }}>
                {label}
            </div>
            <div style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: isMobile ? '16px' : '24px' }}>
                <div className="text-matrix-header" style={{ marginBottom: '8px' }}>
                    PROSPECT INTELLIGENCE
                </div>
                <div style={{ 
                    display: 'flex', 
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'flex-start' : 'center', 
                    justifyContent: 'space-between',
                    gap: isMobile ? '12px' : '16px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '12px' : '16px' }}>
                        <div style={{
                            width: isMobile ? '44px' : '56px',
                            height: isMobile ? '44px' : '56px',
                            borderRadius: isMobile ? '10px' : '12px',
                            background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
                            border: '1px solid var(--color-border-functional)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <Building2 size={isMobile ? 22 : 28} color="var(--color-brand-cobalt)" />
                        </div>
                        <div>
                            <h1 style={{
                                fontSize: isMobile ? '24px' : '32px',
                                fontWeight: 600,
                                color: 'var(--color-text-primary)',
                                marginBottom: '4px'
                            }}>
                                L Catterton
                            </h1>
                            <div style={{
                                fontSize: isMobile ? '12px' : '14px',
                                color: 'var(--color-text-secondary)'
                            }}>
                                {isMobile ? 'Consumer PE Firm' : 'Global Consumer-Focused Private Equity Firm'}
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
                                padding: isMobile ? '10px 14px' : '8px 12px',
                                background: 'var(--color-border-functional)',
                                borderRadius: '6px',
                                fontSize: '12px',
                                color: 'var(--color-text-secondary)',
                                textDecoration: 'none',
                                minHeight: isMobile ? '44px' : 'auto'
                            }}
                        >
                            <Globe size={14} />
                            {!isMobile && 'Website'}
                        </a>
                        <a 
                            href="https://www.linkedin.com/company/l-catterton"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: isMobile ? '10px 14px' : '8px 12px',
                                background: '#0A66C2',
                                borderRadius: '6px',
                                fontSize: '12px',
                                color: 'white',
                                textDecoration: 'none',
                                minHeight: isMobile ? '44px' : 'auto'
                            }}
                        >
                            <Linkedin size={14} />
                            {!isMobile && 'LinkedIn'}
                        </a>
                    </div>
                </div>
            </div>

            {/* Stats row - scrollable on mobile */}
            <div style={{
                display: isMobile ? 'flex' : 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: isMobile ? '8px' : '12px',
                marginBottom: isMobile ? '16px' : '24px',
                overflowX: isMobile ? 'auto' : 'visible',
                WebkitOverflowScrolling: 'touch',
                paddingBottom: isMobile ? '4px' : 0,
                marginLeft: isMobile ? '-16px' : 0,
                marginRight: isMobile ? '-16px' : 0,
                paddingLeft: isMobile ? '16px' : 0,
                paddingRight: isMobile ? '16px' : 0
            }}>
                <div style={{ flexShrink: 0, width: isMobile ? '140px' : 'auto' }}>
                    <StatCard icon={TrendingUp} label="AUM" value="$35B+" color="#10B981" isMobile={isMobile} />
                </div>
                <div style={{ flexShrink: 0, width: isMobile ? '140px' : 'auto' }}>
                    <StatCard icon={Briefcase} label="Focus" value="Consumer" color="#8B5CF6" isMobile={isMobile} />
                </div>
                <div style={{ flexShrink: 0, width: isMobile ? '140px' : 'auto' }}>
                    <StatCard icon={Target} label="Stage" value={lcattertonData.dealStage} color="#F59E0B" isMobile={isMobile} />
                </div>
                {!isMobile && (
                    <>
                        <StatCard icon={Building2} label="HQ" value="Greenwich, CT" color="#3B82F6" isMobile={isMobile} />
                        <StatCard icon={Calendar} label="Updated" value="Feb 2026" color="#EC4899" isMobile={isMobile} />
                    </>
                )}
            </div>

            {/* Tab navigation */}
            <div style={{
                display: 'flex',
                gap: '4px',
                marginBottom: isMobile ? '12px' : '16px',
                background: 'var(--color-border-functional)',
                padding: '4px',
                borderRadius: '8px',
                width: isMobile ? '100%' : 'fit-content'
            }}>
                {[
                    { id: 'committee', label: isMobile ? 'Committee' : 'Buying Committee' },
                    { id: 'strategy', label: isMobile ? 'Strategy' : 'Sales Strategy' }
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            flex: isMobile ? 1 : 'none',
                            padding: isMobile ? '12px 16px' : '8px 16px',
                            fontSize: '12px',
                            fontWeight: 500,
                            borderRadius: '6px',
                            background: activeTab === tab.id ? 'var(--color-brand-cobalt)' : 'transparent',
                            color: activeTab === tab.id ? 'white' : 'var(--color-text-secondary)',
                            transition: 'all 0.2s ease',
                            minHeight: isMobile ? '44px' : 'auto'
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Main content area */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: activeTab === 'committee' || isMobile ? '1fr' : '2fr 1fr',
                gap: isMobile ? '16px' : '24px',
                flex: 1,
                minHeight: 0,
                overflow: 'auto'
            }}>
                {activeTab === 'committee' ? (
                    /* Buying Committee Tab */
                    <div style={{ overflow: 'auto', paddingRight: isMobile ? 0 : '8px' }}>
                        <BuyingCommitteeChart data={lcattertonData} showFilters={true} />
                    </div>
                ) : (
                    /* Sales Strategy Tab */
                    <>
                        <div style={{ overflow: isMobile ? 'visible' : 'auto' }}>
                            <GlassPanel style={{
                                padding: isMobile ? '16px' : '24px',
                                marginBottom: isMobile ? '12px' : '16px',
                                background: 'var(--color-canvas-charcoal)'
                            }}>
                                <div style={{
                                    fontSize: isMobile ? '13px' : '14px',
                                    fontWeight: 600,
                                    color: 'var(--color-text-primary)',
                                    marginBottom: isMobile ? '12px' : '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    <Sparkles size={16} color="var(--color-brand-cobalt)" />
                                    {isMobile ? 'Value Proposition' : 'Hebbia Value Proposition for L Catterton'}
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
                                padding: isMobile ? '16px' : '24px',
                                background: 'var(--color-canvas-charcoal)'
                            }}>
                                <div style={{
                                    fontSize: isMobile ? '13px' : '14px',
                                    fontWeight: 600,
                                    color: 'var(--color-text-primary)',
                                    marginBottom: isMobile ? '12px' : '16px'
                                }}>
                                    Key Talking Points
                                </div>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {[
                                        "Consumer sector expertise with 200+ brands analyzed",
                                        "SOC 2 Type II certified - meets PE security requirements",
                                        "Used by leading PE firms including Advent, TPG, and KKR",
                                        "Reduces deal analysis time by 80% on average",
                                        "Integrates with Excel, PowerPoint, and data rooms"
                                    ].map((point, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '10px',
                                            marginBottom: isMobile ? '10px' : '12px'
                                        }}>
                                            <CheckCircle2 size={16} color="#10B981" style={{ marginTop: '2px', flexShrink: 0 }} />
                                            <span style={{
                                                fontSize: isMobile ? '12px' : '13px',
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

                        {/* Next Steps - below on mobile */}
                        <div>
                            <GlassPanel style={{
                                padding: isMobile ? '16px' : '20px',
                                background: 'var(--color-canvas-charcoal)'
                            }}>
                                <div style={{
                                    fontSize: isMobile ? '13px' : '14px',
                                    fontWeight: 600,
                                    color: 'var(--color-text-primary)',
                                    marginBottom: isMobile ? '12px' : '16px',
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

            {/* Data source note - hide on mobile */}
            {!isMobile && (
                <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '60px',
                    fontSize: '10px',
                    color: 'var(--color-text-quaternary)'
                }}>
                    Data sourced via Firecrawl • Last updated: {lcattertonData.lastUpdated}
                </div>
            )}
        </SlideContainer>
    );
};

export default Slide_LCattertonProspect;
