import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  HelpCircle,
  StickyNote,
  Sparkles,
  X,
  Send,
  User,
  Clock,
  CheckCircle2,
  Loader2,
  Copy,
  Download,
  MoreHorizontal,
} from 'lucide-react';
import './ActionToolbar.css';

const MotionDiv = motion.div;

const MOCK_COMMENTS = [
  { id: 1, user: 'Sarah Chen', initials: 'SC', time: '2m ago', text: 'Great breakdown of the ROI metrics here.', resolved: false, replies: 2 },
  { id: 2, user: 'Marcus Webb', initials: 'MW', time: '5m ago', text: 'Can we add more context on the integration timeline?', resolved: true, replies: 3 },
];

const MOCK_QUESTIONS = [
  { id: 1, user: 'Jordan Lee', initials: 'JL', time: '1m ago', text: 'How does this compare to our current solution?', answered: false },
  { id: 2, user: 'Alex Morgan', initials: 'AM', time: '8m ago', text: 'What\'s the expected adoption curve?', answered: true },
];

const AI_SUGGESTIONS = [
  'Summarize this slide',
  'Key takeaways',
  'Compare to previous',
];

export function ActionToolbar({ slideIndex = 0 }) {
  const [activePanel, setActivePanel] = useState(null);
  const [comments, setComments] = useState(MOCK_COMMENTS);
  const [questions, setQuestions] = useState(MOCK_QUESTIONS);
  const [notes, setNotes] = useState('');
  const [aiMessages, setAiMessages] = useState([
    { role: 'assistant', content: 'I can help you understand this presentation. Ask me anything about the content, data, or context.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [notesSaved, setNotesSaved] = useState(false);
  const panelRef = useRef(null);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const togglePanel = useCallback((panel) => {
    setActivePanel(prev => prev === panel ? null : panel);
    setInputValue('');
  }, []);

  useEffect(() => {
    if (activePanel && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [activePanel]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setActivePanel(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [aiMessages, isAiThinking]);

  // Auto-save notes
  useEffect(() => {
    if (notes) {
      const timeout = setTimeout(() => {
        setNotesSaved(true);
        setTimeout(() => setNotesSaved(false), 2000);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [notes]);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    if (activePanel === 'comments') {
      setComments(prev => [...prev, {
        id: Date.now(),
        user: 'You',
        initials: 'YO',
        time: 'Just now',
        text: inputValue,
        resolved: false,
        replies: 0,
      }]);
    } else if (activePanel === 'questions') {
      setQuestions(prev => [...prev, {
        id: Date.now(),
        user: 'You',
        initials: 'YO',
        time: 'Just now',
        text: inputValue,
        answered: false,
      }]);
    } else if (activePanel === 'ai') {
      handleAiMessage(inputValue);
    }
    setInputValue('');
  };

  const handleAiMessage = (message) => {
    setAiMessages(prev => [...prev, { role: 'user', content: message }]);
    setIsAiThinking(true);
    
    setTimeout(() => {
      setAiMessages(prev => [...prev, {
        role: 'assistant',
        content: `Based on slide ${slideIndex + 1}, this section covers the key value propositions and strategic implications. The data reflects projected outcomes based on similar enterprise implementations. Would you like me to elaborate on any specific aspect?`
      }]);
      setIsAiThinking(false);
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleAiMessage(suggestion);
  };

  const tools = [
    { id: 'comments', icon: MessageSquare, label: 'Comments', count: comments.filter(c => !c.resolved).length },
    { id: 'questions', icon: HelpCircle, label: 'Questions', count: questions.filter(q => !q.answered).length },
    { id: 'notes', icon: StickyNote, label: 'Notes', count: notes.trim() ? 1 : 0 },
    { id: 'ai', icon: Sparkles, label: 'Ask AI', count: 0, isAi: true },
  ];

  const panelVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    exit: { 
      opacity: 0, 
      y: 10, 
      scale: 0.98,
      transition: { duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const renderPanelContent = () => {
    switch (activePanel) {
      case 'comments':
        return (
          <div className="toolbar-panel-content">
            <div className="toolbar-panel-header">
              <span className="toolbar-panel-title">Comments</span>
              <span className="toolbar-panel-subtitle">Slide {slideIndex + 1} of presentation</span>
            </div>
            <div className="toolbar-panel-list">
              {comments.length === 0 ? (
                <div className="toolbar-empty-state">
                  <div className="toolbar-empty-icon">
                    <MessageSquare size={20} />
                  </div>
                  <span className="toolbar-empty-title">No comments yet</span>
                  <span className="toolbar-empty-desc">Start a discussion about this slide</span>
                </div>
              ) : (
                comments.map(comment => (
                  <div key={comment.id} className={`toolbar-item ${comment.resolved ? 'is-resolved' : ''}`}>
                    <div className="toolbar-item-header">
                      <div className="toolbar-item-user">
                        <div className="toolbar-item-avatar">{comment.initials}</div>
                        <span>{comment.user}</span>
                      </div>
                      <div className="toolbar-item-meta">
                        <Clock size={10} />
                        <span>{comment.time}</span>
                      </div>
                    </div>
                    <p className="toolbar-item-text">{comment.text}</p>
                    {comment.resolved ? (
                      <div className="toolbar-item-status">
                        <CheckCircle2 size={12} />
                        <span>Resolved</span>
                      </div>
                    ) : comment.replies > 0 && (
                      <div className="toolbar-item-thread">
                        <div className="toolbar-item-thread-avatars">
                          <div className="toolbar-item-avatar">SC</div>
                          <div className="toolbar-item-avatar">MW</div>
                        </div>
                        <span className="toolbar-item-thread-count">{comment.replies} replies</span>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
            <form className="toolbar-input-wrapper" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Add a comment..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="toolbar-input"
              />
              <button type="submit" className="toolbar-send-btn" disabled={!inputValue.trim()}>
                <Send size={14} />
              </button>
            </form>
          </div>
        );

      case 'questions':
        return (
          <div className="toolbar-panel-content">
            <div className="toolbar-panel-header">
              <span className="toolbar-panel-title">Questions</span>
              <span className="toolbar-panel-subtitle">Ask the presenter</span>
            </div>
            <div className="toolbar-panel-list">
              {questions.length === 0 ? (
                <div className="toolbar-empty-state">
                  <div className="toolbar-empty-icon">
                    <HelpCircle size={20} />
                  </div>
                  <span className="toolbar-empty-title">No questions yet</span>
                  <span className="toolbar-empty-desc">Ask a question to the presenter</span>
                </div>
              ) : (
                questions.map(question => (
                  <div key={question.id} className={`toolbar-item ${question.answered ? 'is-resolved' : ''}`}>
                    <div className="toolbar-item-header">
                      <div className="toolbar-item-user">
                        <div className="toolbar-item-avatar">{question.initials}</div>
                        <span>{question.user}</span>
                      </div>
                      <div className="toolbar-item-meta">
                        <Clock size={10} />
                        <span>{question.time}</span>
                      </div>
                    </div>
                    <p className="toolbar-item-text">{question.text}</p>
                    {question.answered && (
                      <div className="toolbar-item-status is-answered">
                        <CheckCircle2 size={12} />
                        <span>Answered</span>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
            <form className="toolbar-input-wrapper" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask a question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="toolbar-input"
              />
              <button type="submit" className="toolbar-send-btn" disabled={!inputValue.trim()}>
                <Send size={14} />
              </button>
            </form>
          </div>
        );

      case 'notes':
        return (
          <div className="toolbar-panel-content">
            <div className="toolbar-panel-header">
              <span className="toolbar-panel-title">Your Notes</span>
              <span className="toolbar-panel-subtitle">Private notes saved locally</span>
            </div>
            <textarea
              ref={inputRef}
              className="toolbar-notes-textarea"
              placeholder="Take notes during the presentation..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <div className="toolbar-notes-footer">
              <div className="toolbar-notes-count">
                {notesSaved ? (
                  <span className="toolbar-notes-save">
                    <CheckCircle2 size={12} />
                    Saved
                  </span>
                ) : (
                  <span>{notes.length} characters</span>
                )}
              </div>
              <div className="toolbar-notes-actions">
                <button 
                  type="button" 
                  className="toolbar-notes-btn"
                  onClick={() => navigator.clipboard?.writeText(notes)}
                  disabled={!notes.trim()}
                >
                  <Copy size={12} />
                </button>
                <button 
                  type="button" 
                  className="toolbar-notes-btn"
                  disabled={!notes.trim()}
                >
                  <Download size={12} />
                </button>
              </div>
            </div>
          </div>
        );

      case 'ai':
        return (
          <div className="toolbar-panel-content toolbar-ai-panel">
            <div className="toolbar-panel-header">
              <div className="toolbar-ai-header-content">
                <Sparkles size={14} className="toolbar-ai-icon" />
                <span className="toolbar-panel-title">Ask AI</span>
                <div className="toolbar-ai-status">
                  <span className="toolbar-ai-status-dot" />
                  <span>Ready</span>
                </div>
              </div>
              <span className="toolbar-panel-subtitle">Context: Slide {slideIndex + 1}</span>
            </div>
            <div className="toolbar-ai-messages">
              {aiMessages.map((msg, idx) => (
                <div key={idx} className={`toolbar-ai-message ${msg.role}`}>
                  {msg.role === 'assistant' && (
                    <div className="toolbar-ai-avatar">
                      <Sparkles size={12} />
                    </div>
                  )}
                  <div className="toolbar-ai-bubble">
                    {msg.content}
                  </div>
                </div>
              ))}
              {isAiThinking && (
                <div className="toolbar-ai-message assistant">
                  <div className="toolbar-ai-avatar">
                    <Sparkles size={12} />
                  </div>
                  <div className="toolbar-ai-bubble toolbar-ai-thinking">
                    <Loader2 size={14} className="toolbar-ai-spinner" />
                    <span>Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            {aiMessages.length <= 2 && !isAiThinking && (
              <div className="toolbar-ai-suggestions">
                {AI_SUGGESTIONS.map((suggestion, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="toolbar-ai-suggestion"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            <form className="toolbar-input-wrapper" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask about this slide..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="toolbar-input"
              />
              <button type="submit" className="toolbar-send-btn" disabled={!inputValue.trim() || isAiThinking}>
                <Send size={14} />
              </button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="action-toolbar-container" ref={panelRef}>
      <AnimatePresence mode="wait">
        {activePanel && (
          <MotionDiv
            key={activePanel}
            className="action-toolbar-panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button 
              className="toolbar-close-btn"
              onClick={() => setActivePanel(null)}
              aria-label="Close panel"
            >
              <X size={14} />
            </button>
            {renderPanelContent()}
          </MotionDiv>
        )}
      </AnimatePresence>

      <div className="action-toolbar">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          const isActive = activePanel === tool.id;
          return (
            <React.Fragment key={tool.id}>
              {index === tools.length - 1 && <div className="action-toolbar-divider" />}
              <button
                className={`action-toolbar-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => togglePanel(tool.id)}
                aria-label={tool.label}
                aria-pressed={isActive}
                data-tooltip={tool.label}
              >
                <Icon size={18} />
                {tool.count > 0 && (
                  <span className={`action-toolbar-badge ${tool.isNew ? 'is-new' : ''}`}>{tool.count}</span>
                )}
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ActionToolbar;
