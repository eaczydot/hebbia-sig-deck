import React, { useMemo, useState } from 'react';
import {
  CircleHelp,
  MessageSquare,
  Tag,
  Lock,
  Clock3,
  Eye,
  EyeOff,
  Bell,
  AtSign,
  Send,
  Check,
} from 'lucide-react';
import './ActionToolbar.css';

const ACTIONS = [
  { id: 'question', label: 'Question to host', target: 'notes.toHost', icon: CircleHelp },
  { id: 'comment', label: 'Comment to host', target: 'notes.toHost', icon: MessageSquare },
  { id: 'tag', label: 'Tag', target: 'annotations.shared', icon: Tag },
  { id: 'private', label: 'Private note', target: 'notes.private', icon: Lock },
  { id: 'queue', label: 'Queue item', target: 'notes.toHost', deferred: true, icon: Clock3 },
];

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'mine', label: 'Mine' },
  { id: 'to-host', label: 'To host' },
  { id: 'private', label: 'Private' },
];

const isVisibleByFilter = (item, filter, currentUser) => {
  if (filter === 'mine') return item.author === currentUser;
  if (filter === 'to-host') return item.route === 'notes.toHost';
  if (filter === 'private') return item.route === 'notes.private';
  return true;
};

export const ActionToolbar = ({
  currentUser,
  presenterPolicy,
  toolbarVisible,
  onToggleVisibility,
  notes,
  annotations,
  onSendAction,
  onMarkRead,
}) => {
  const [panelMode, setPanelMode] = useState(null);
  const [activeActionId, setActiveActionId] = useState(ACTIONS[0].id);
  const [draft, setDraft] = useState('');
  const [filter, setFilter] = useState('all');

  const activeAction = ACTIONS.find(action => action.id === activeActionId) || ACTIONS[0];

  const allItems = useMemo(() => {
    const privateNotes = notes.private.map(item => ({ ...item, route: 'notes.private' }));
    const hostNotes = notes.toHost.map(item => ({ ...item, route: 'notes.toHost' }));
    const sharedAnnotations = annotations.shared.map(item => ({ ...item, route: 'annotations.shared' }));

    return [...privateNotes, ...hostNotes, ...sharedAnnotations].sort((a, b) => b.createdAt - a.createdAt);
  }, [annotations.shared, notes.private, notes.toHost]);

  const unreadCount = allItems.filter(item => !item.read).length;
  const mentionCount = allItems.filter(item => !item.read && /@you\b/i.test(item.text)).length;
  const filteredItems = allItems.filter(item => isVisibleByFilter(item, filter, currentUser));

  const openComposer = (actionId) => {
    setActiveActionId(actionId);
    setPanelMode('compose');
  };

  const handleSubmit = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;

    onSendAction({
      action: activeAction.id,
      text: trimmed,
      route: activeAction.target,
      deferred: Boolean(activeAction.deferred),
    });

    setDraft('');
    setPanelMode(null);
  };

  return (
    <aside className="vercel-toolbar-shell">
      {toolbarVisible && panelMode && (
        <div className="toolbar-popover">
          {panelMode === 'compose' && (
            <>
              <div className="popover-header">
                <strong>{activeAction.label}</strong>
                <span>{presenterPolicy}</span>
              </div>
              <textarea
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder={`${activeAction.label}…`}
                rows={3}
              />
              <button className="submit-button" onClick={handleSubmit}>
                <Send size={13} /> {activeAction.deferred ? 'Queue item' : 'Send'}
              </button>
            </>
          )}

          {panelMode === 'inbox' && (
            <>
              <div className="popover-header">
                <strong>Activity</strong>
                <span>{presenterPolicy}</span>
              </div>
              <div className="toolbar-filters">
                {FILTERS.map(tab => (
                  <button
                    key={tab.id}
                    className={`filter-chip${filter === tab.id ? ' is-active' : ''}`}
                    onClick={() => setFilter(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <ul className="toolbar-feed">
                {filteredItems.slice(0, 6).map(item => (
                  <li key={item.id} className={`feed-item${item.read ? '' : ' is-unread'}`}>
                    <div className="feed-line">
                      <strong>{item.actionLabel}</strong>
                      {!item.read && (
                        <button onClick={() => onMarkRead(item.id, item.route)}>
                          <Check size={11} />
                        </button>
                      )}
                    </div>
                    <p>{item.text}</p>
                    <small>{item.route}</small>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      <div className="vercel-toolbar-dock" role="toolbar" aria-label="Conference action toolbar">
        {ACTIONS.map(action => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              className={`dock-button${activeActionId === action.id && panelMode === 'compose' ? ' is-active' : ''}`}
              onClick={() => openComposer(action.id)}
              title={action.label}
              aria-label={action.label}
            >
              <Icon size={14} />
            </button>
          );
        })}

        <div className="dock-divider" />

        <button
          className={`dock-button${panelMode === 'inbox' ? ' is-active' : ''}`}
          onClick={() => setPanelMode(prev => (prev === 'inbox' ? null : 'inbox'))}
          title="Activity"
          aria-label="Activity"
        >
          <Bell size={14} />
          {unreadCount > 0 && <span className="dot-badge" />}
        </button>

        {mentionCount > 0 && (
          <span className="dock-pill" title="Mentions for you">
            <AtSign size={11} /> {mentionCount}
          </span>
        )}

        <button
          className="dock-button"
          onClick={onToggleVisibility}
          title={toolbarVisible ? 'Hide toolbar' : 'Show toolbar'}
          aria-label={toolbarVisible ? 'Hide toolbar' : 'Show toolbar'}
        >
          {toolbarVisible ? <Eye size={14} /> : <EyeOff size={14} />}
        </button>
      </div>
    </aside>
  );
};
