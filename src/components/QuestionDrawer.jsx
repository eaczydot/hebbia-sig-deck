import React, { useState, useEffect, useRef, useCallback } from 'react';
import { loadQuestions, saveQuestion, generateMockResponse } from '../stores/questionStore';
import './QuestionDrawer.css';

export function QuestionDrawer({ currentSlide, deckId = 'sig-deck-v1' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState(() => loadQuestions(deckId));
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    setQuestions(loadQuestions(deckId));
  }, [deckId]);

  const scrollToBottom = useCallback(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [questions, scrollToBottom]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = inputValue.trim();
    if (!text || isThinking) return;

    const question = {
      id: `q-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      slideIndex: currentSlide,
      text,
      askedAt: Date.now(),
      aiResponse: null,
      respondedAt: null,
    };

    saveQuestion(deckId, question);
    setQuestions(prev => [...prev, question]);
    setInputValue('');
    setIsThinking(true);

    // Simulate AI thinking delay
    const delay = 800 + Math.random() * 1200;
    setTimeout(() => {
      const response = generateMockResponse(currentSlide, text);
      const updatedQuestion = {
        ...question,
        aiResponse: response,
        respondedAt: Date.now(),
      };

      setQuestions(prev =>
        prev.map(q => q.id === question.id ? updatedQuestion : q)
      );

      // Update in storage
      const allQuestions = loadQuestions(deckId);
      const idx = allQuestions.findIndex(q => q.id === question.id);
      if (idx !== -1) {
        allQuestions[idx] = updatedQuestion;
        window.localStorage.setItem(`qa:${deckId}`, JSON.stringify({ questions: allQuestions }));
      }

      setIsThinking(false);
    }, delay);
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <button
        type="button"
        className="question-drawer-toggle"
        onClick={() => setIsOpen(prev => !prev)}
        aria-label={isOpen ? 'Close questions' : 'Open questions'}
        aria-expanded={isOpen}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        {questions.length > 0 && (
          <span className="question-drawer-badge">{questions.length}</span>
        )}
      </button>

      {isOpen && (
        <aside className="question-drawer" aria-label="Questions panel">
          <header className="question-drawer-header">
            <h2 className="question-drawer-title">Questions</h2>
            <button
              type="button"
              className="question-drawer-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close questions panel"
            >
              &times;
            </button>
          </header>

          <div className="question-drawer-list" ref={listRef}>
            {questions.length === 0 && (
              <p className="question-drawer-empty">
                No questions yet. Ask about any slide and get an instant response.
              </p>
            )}

            {questions.map(q => (
              <div key={q.id} className="question-card">
                <div className="question-card-header">
                  <span className="question-card-slide">Slide {q.slideIndex + 1}</span>
                  <span className="question-card-time">{formatTime(q.askedAt)}</span>
                </div>
                <p className="question-card-text">{q.text}</p>
                {q.aiResponse ? (
                  <div className="question-card-response">
                    <span className="question-card-ai-label">AI</span>
                    <p>{q.aiResponse}</p>
                  </div>
                ) : (
                  <div className="question-card-response is-thinking">
                    <span className="question-card-ai-label">AI</span>
                    <span className="question-card-dots">
                      <span /><span /><span />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <form className="question-drawer-input" onSubmit={handleSubmit}>
            <textarea
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder="Ask a question about this slide..."
              rows={2}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <button type="submit" disabled={!inputValue.trim() || isThinking}>
              Send
            </button>
          </form>
        </aside>
      )}
    </>
  );
}
