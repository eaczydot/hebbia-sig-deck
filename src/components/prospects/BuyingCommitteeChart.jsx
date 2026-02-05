import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassPanel } from '../GlassPanel';
import { 
    User, 
    Users, 
    Building2, 
    DollarSign, 
    Cpu, 
    Star, 
    ChevronDown, 
    ChevronUp,
    ExternalLink,
    Linkedin,
    Mail,
    Phone,
    Filter,
    Search,
    X
} from 'lucide-react';

// Role configuration with colors and icons
const ROLE_CONFIG = {
    economic_buyer: {
        label: 'Economic Buyer',
        color: '#10B981', // Green
        icon: DollarSign,
        description: 'Controls budget and final purchasing authority'
    },
    technical_buyer: {
        label: 'Technical Buyer',
        color: '#3B82F6', // Blue
        icon: Cpu,
        description: 'Evaluates technical fit and security'
    },
    user_buyer: {
        label: 'User Buyer',
        color: '#8B5CF6', // Purple
        icon: Users,
        description: 'Will use the product day-to-day'
    },
    champion: {
        label: 'Champion',
        color: '#F59E0B', // Amber
        icon: Star,
        description: 'Internal advocate for the solution'
    },
    influencer: {
        label: 'Influencer',
        color: '#EC4899', // Pink
        icon: User,
        description: 'Can sway decision-makers'
    },
    decision_maker: {
        label: 'Decision Maker',
        color: '#EF4444', // Red
        icon: Building2,
        description: 'Final sign-off authority'
    }
};

const INFLUENCE_COLORS = {
    high: '#10B981',
    medium: '#F59E0B',
    low: '#6B7280'
};

const SENTIMENT_CONFIG = {
    champion: { color: '#10B981', label: 'Champion' },
    neutral: { color: '#6B7280', label: 'Neutral' },
    skeptic: { color: '#EF4444', label: 'Skeptic' },
    unknown: { color: '#374151', label: 'Unknown' }
};

// Individual member card component
const MemberCard = ({ member, isExpanded, onToggle, style = {} }) => {
    const roleConfig = ROLE_CONFIG[member.role] || ROLE_CONFIG.influencer;
    const RoleIcon = roleConfig.icon;
    const sentimentConfig = SENTIMENT_CONFIG[member.sentiment || 'unknown'];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
                position: 'relative',
                ...style
            }}
        >
            <GlassPanel
                style={{
                    padding: '16px',
                    cursor: 'pointer',
                    minWidth: '200px',
                    maxWidth: '280px',
                    background: 'var(--color-canvas-charcoal)',
                    border: `1px solid ${isExpanded ? roleConfig.color : 'var(--color-border-functional)'}`,
                    transition: 'border-color 0.3s ease'
                }}
                onClick={onToggle}
            >
                {/* Role indicator bar */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: roleConfig.color,
                    borderRadius: '4px 4px 0 0'
                }} />

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    {/* Avatar */}
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${roleConfig.color}40, ${roleConfig.color}20)`,
                        border: `2px solid ${roleConfig.color}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                    }}>
                        {member.photo ? (
                            <img 
                                src={member.photo} 
                                alt={member.name}
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                }}
                            />
                        ) : (
                            <RoleIcon size={20} color={roleConfig.color} />
                        )}
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            marginBottom: '2px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            {member.name}
                        </div>
                        <div style={{
                            fontSize: '11px',
                            color: 'var(--color-text-secondary)',
                            marginBottom: '8px',
                            lineHeight: 1.3
                        }}>
                            {member.title}
                        </div>
                        
                        {/* Badges */}
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                            <span style={{
                                fontSize: '9px',
                                fontWeight: 600,
                                padding: '3px 6px',
                                borderRadius: '3px',
                                background: `${roleConfig.color}20`,
                                color: roleConfig.color,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                {roleConfig.label}
                            </span>
                            <span style={{
                                fontSize: '9px',
                                fontWeight: 600,
                                padding: '3px 6px',
                                borderRadius: '3px',
                                background: `${INFLUENCE_COLORS[member.influence]}20`,
                                color: INFLUENCE_COLORS[member.influence],
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                {member.influence} influence
                            </span>
                        </div>
                    </div>

                    {/* Expand icon */}
                    <div style={{ color: 'var(--color-text-tertiary)' }}>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ overflow: 'hidden' }}
                        >
                            <div style={{
                                marginTop: '16px',
                                paddingTop: '16px',
                                borderTop: '1px solid var(--color-border-functional)'
                            }}>
                                {/* Department */}
                                <div style={{ marginBottom: '12px' }}>
                                    <div style={{
                                        fontSize: '10px',
                                        fontWeight: 600,
                                        color: 'var(--color-text-tertiary)',
                                        marginBottom: '4px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em'
                                    }}>
                                        Department
                                    </div>
                                    <div style={{
                                        fontSize: '12px',
                                        color: 'var(--color-text-secondary)'
                                    }}>
                                        {member.department}
                                    </div>
                                </div>

                                {/* Focus area */}
                                {member.focus && (
                                    <div style={{ marginBottom: '12px' }}>
                                        <div style={{
                                            fontSize: '10px',
                                            fontWeight: 600,
                                            color: 'var(--color-text-tertiary)',
                                            marginBottom: '4px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em'
                                        }}>
                                            Focus Area
                                        </div>
                                        <div style={{
                                            fontSize: '12px',
                                            color: 'var(--color-text-secondary)'
                                        }}>
                                            {member.focus}
                                        </div>
                                    </div>
                                )}

                                {/* Background */}
                                {member.background && member.background.length > 0 && (
                                    <div style={{ marginBottom: '12px' }}>
                                        <div style={{
                                            fontSize: '10px',
                                            fontWeight: 600,
                                            color: 'var(--color-text-tertiary)',
                                            marginBottom: '4px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em'
                                        }}>
                                            Background
                                        </div>
                                        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                                            {member.background.map((item, i) => (
                                                <span key={i} style={{
                                                    fontSize: '10px',
                                                    padding: '2px 6px',
                                                    borderRadius: '3px',
                                                    background: 'var(--color-border-functional)',
                                                    color: 'var(--color-text-secondary)'
                                                }}>
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Sentiment */}
                                <div style={{ marginBottom: '12px' }}>
                                    <div style={{
                                        fontSize: '10px',
                                        fontWeight: 600,
                                        color: 'var(--color-text-tertiary)',
                                        marginBottom: '4px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em'
                                    }}>
                                        Sentiment
                                    </div>
                                    <span style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        fontSize: '11px',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        background: `${sentimentConfig.color}20`,
                                        color: sentimentConfig.color
                                    }}>
                                        <span style={{
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '50%',
                                            background: sentimentConfig.color
                                        }} />
                                        {sentimentConfig.label}
                                    </span>
                                </div>

                                {/* Contact links */}
                                <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                                    {member.linkedIn && (
                                        <a 
                                            href={member.linkedIn}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '28px',
                                                height: '28px',
                                                borderRadius: '4px',
                                                background: '#0A66C2',
                                                color: 'white'
                                            }}
                                        >
                                            <Linkedin size={14} />
                                        </a>
                                    )}
                                    {member.email && (
                                        <a 
                                            href={`mailto:${member.email}`}
                                            onClick={(e) => e.stopPropagation()}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '28px',
                                                height: '28px',
                                                borderRadius: '4px',
                                                background: 'var(--color-border-functional)',
                                                color: 'var(--color-text-secondary)'
                                            }}
                                        >
                                            <Mail size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </GlassPanel>
        </motion.div>
    );
};

// Filter panel component
const FilterPanel = ({ filters, setFilters, roles }) => {
    return (
        <GlassPanel style={{
            padding: '16px',
            marginBottom: '24px',
            background: 'var(--color-canvas-charcoal)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                {/* Search */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    background: 'var(--color-border-functional)',
                    borderRadius: '4px',
                    flex: '1',
                    maxWidth: '250px'
                }}>
                    <Search size={14} color="var(--color-text-tertiary)" />
                    <input
                        type="text"
                        placeholder="Search members..."
                        value={filters.search}
                        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            outline: 'none',
                            color: 'var(--color-text-primary)',
                            fontSize: '12px',
                            width: '100%'
                        }}
                    />
                    {filters.search && (
                        <X 
                            size={14} 
                            color="var(--color-text-tertiary)"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setFilters({ ...filters, search: '' })}
                        />
                    )}
                </div>

                {/* Role filter */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Filter size={14} color="var(--color-text-tertiary)" />
                    <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>Role:</span>
                    <div style={{ display: 'flex', gap: '4px' }}>
                        <button
                            onClick={() => setFilters({ ...filters, role: null })}
                            style={{
                                padding: '4px 8px',
                                fontSize: '10px',
                                borderRadius: '3px',
                                background: !filters.role ? 'var(--color-brand-cobalt)' : 'var(--color-border-functional)',
                                color: !filters.role ? 'white' : 'var(--color-text-secondary)',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            All
                        </button>
                        {roles.map(role => {
                            const config = ROLE_CONFIG[role];
                            return (
                                <button
                                    key={role}
                                    onClick={() => setFilters({ ...filters, role })}
                                    style={{
                                        padding: '4px 8px',
                                        fontSize: '10px',
                                        borderRadius: '3px',
                                        background: filters.role === role ? config.color : 'var(--color-border-functional)',
                                        color: filters.role === role ? 'white' : 'var(--color-text-secondary)',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {config.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Influence filter */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>Influence:</span>
                    <div style={{ display: 'flex', gap: '4px' }}>
                        {['all', 'high', 'medium', 'low'].map(level => (
                            <button
                                key={level}
                                onClick={() => setFilters({ ...filters, influence: level === 'all' ? null : level })}
                                style={{
                                    padding: '4px 8px',
                                    fontSize: '10px',
                                    borderRadius: '3px',
                                    background: (level === 'all' && !filters.influence) || filters.influence === level 
                                        ? INFLUENCE_COLORS[level] || 'var(--color-brand-cobalt)'
                                        : 'var(--color-border-functional)',
                                    color: (level === 'all' && !filters.influence) || filters.influence === level 
                                        ? 'white' 
                                        : 'var(--color-text-secondary)',
                                    transition: 'all 0.2s ease',
                                    textTransform: 'capitalize'
                                }}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </GlassPanel>
    );
};

// Main component
export const BuyingCommitteeChart = ({ data, showFilters = true }) => {
    const [expandedId, setExpandedId] = useState(null);
    const [filters, setFilters] = useState({
        search: '',
        role: null,
        influence: null
    });

    const { company, committee = [] } = data || {};

    // Get unique roles for filter
    const availableRoles = [...new Set(committee.map(m => m.role))];

    // Filter members
    const filteredMembers = committee.filter(member => {
        if (filters.search && !member.name.toLowerCase().includes(filters.search.toLowerCase()) &&
            !member.title.toLowerCase().includes(filters.search.toLowerCase())) {
            return false;
        }
        if (filters.role && member.role !== filters.role) {
            return false;
        }
        if (filters.influence && member.influence !== filters.influence) {
            return false;
        }
        return true;
    });

    // Group by department or role
    const groupedMembers = filteredMembers.reduce((acc, member) => {
        const key = member.department || 'Other';
        if (!acc[key]) acc[key] = [];
        acc[key].push(member);
        return acc;
    }, {});

    return (
        <div style={{ width: '100%' }}>
            {/* Company header */}
            {company && (
                <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '8px',
                        background: 'var(--color-border-functional)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Building2 size={24} color="var(--color-text-secondary)" />
                    </div>
                    <div>
                        <div style={{
                            fontSize: '20px',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)'
                        }}>
                            {company}
                        </div>
                        <div style={{
                            fontSize: '12px',
                            color: 'var(--color-text-secondary)'
                        }}>
                            {data.industry} • {data.aum} AUM • {committee.length} Committee Members
                        </div>
                    </div>
                </div>
            )}

            {/* Filters */}
            {showFilters && (
                <FilterPanel 
                    filters={filters} 
                    setFilters={setFilters}
                    roles={availableRoles}
                />
            )}

            {/* Committee grid by department */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {Object.entries(groupedMembers).map(([department, members]) => (
                    <div key={department}>
                        <div style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            color: 'var(--color-text-tertiary)',
                            marginBottom: '16px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <span style={{
                                width: '24px',
                                height: '1px',
                                background: 'var(--color-border-functional)'
                            }} />
                            {department}
                            <span style={{
                                fontSize: '10px',
                                color: 'var(--color-text-quaternary)',
                                fontWeight: 400
                            }}>
                                ({members.length})
                            </span>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                            gap: '16px'
                        }}>
                            {members.map(member => (
                                <MemberCard
                                    key={member.id}
                                    member={member}
                                    isExpanded={expandedId === member.id}
                                    onToggle={() => setExpandedId(
                                        expandedId === member.id ? null : member.id
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty state */}
            {filteredMembers.length === 0 && (
                <div style={{
                    textAlign: 'center',
                    padding: '60px 20px',
                    color: 'var(--color-text-tertiary)'
                }}>
                    <Users size={48} style={{ opacity: 0.3, marginBottom: '16px' }} />
                    <div style={{ fontSize: '14px' }}>
                        No committee members match the current filters
                    </div>
                </div>
            )}

            {/* Legend */}
            <div style={{
                marginTop: '32px',
                padding: '16px',
                background: 'var(--color-border-functional)',
                borderRadius: '8px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center'
            }}>
                <div style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: 'var(--color-text-tertiary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginRight: '8px'
                }}>
                    Buyer Roles:
                </div>
                {Object.entries(ROLE_CONFIG).map(([key, config]) => (
                    <div key={key} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '10px',
                        color: 'var(--color-text-secondary)'
                    }}>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '2px',
                            background: config.color
                        }} />
                        {config.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BuyingCommitteeChart;
