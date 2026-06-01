import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpIcon,
  Bot,
  GraduationCap,
  Layers,
  Map,
  MessageCircle,
  Rocket,
  School,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {
  CHATBOT_QUICK_PROMPTS,
  CHATBOT_SEED_MESSAGE,
  getArcLabsBotAnswer,
} from "../data/arcLabsKnowledge";

const iconMap = {
  bot: Bot,
  school: School,
  graduation: GraduationCap,
  layers: Layers,
  map: Map,
  rocket: Rocket,
};

function useAutoResizeTextarea({ minHeight, maxHeight }) {
  const textareaRef = useRef(null);

  const adjustHeight = useCallback(
    (reset) => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }
      textarea.style.height = `${minHeight}px`;
      const nextHeight = Math.max(
        minHeight,
        Math.min(textarea.scrollHeight, maxHeight || Infinity)
      );
      textarea.style.height = `${nextHeight}px`;
    },
    [minHeight, maxHeight]
  );

  useEffect(() => {
    if (textareaRef.current) textareaRef.current.style.height = `${minHeight}px`;
  }, [minHeight]);

  return { textareaRef, adjustHeight };
}

function getResponseDelay(answer) {
  const textLength = answer?.text?.length || 0;
  return Math.min(1200, Math.max(420, textLength * 2.2));
}

function ChatLinks({ links = [] }) {
  if (!links.length) return null;

  return (
    <div className="arc-chat-links">
      {links.map((link) =>
        link.to ? (
          <Link key={link.label} to={link.to}>
            {link.label}
          </Link>
        ) : (
          <a key={link.label} href={link.href} target={link.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            {link.label}
          </a>
        )
      )}
    </div>
  );
}

function ChatSuggestions({ suggestions = [], onSuggestion }) {
  if (!suggestions.length) return null;

  return (
    <div className="arc-chat-suggestions">
      {suggestions.slice(0, 3).map((suggestion) => (
        <button key={suggestion} type="button" onClick={() => onSuggestion(suggestion)}>
          {suggestion}
        </button>
      ))}
    </div>
  );
}

function ChatMessage({ message, onSuggestion }) {
  return (
    <div className={`arc-chat-message arc-chat-message--${message.role}`}>
      <div className="arc-chat-avatar">
        {message.role === "bot" ? <Bot size={15} /> : "You"}
      </div>
      <div className="arc-chat-content">
        <div className="arc-chat-bubble">{message.text}</div>
        {message.role === "bot" && (
          <>
            <ChatLinks links={message.links} />
            <ChatSuggestions suggestions={message.suggestions} onSuggestion={onSuggestion} />
          </>
        )}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="arc-chat-message arc-chat-message--bot">
      <div className="arc-chat-avatar">
        <Bot size={15} />
      </div>
      <div className="arc-chat-content">
        <div className="arc-chat-bubble arc-chat-typing" aria-label="ARC LABS assistant is typing">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export default function ArcLabsChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([CHATBOT_SEED_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 46,
    maxHeight: 130,
  });
  const chatBodyRef = useRef(null);
  const timersRef = useRef([]);

  const suggestions = useMemo(() => CHATBOT_QUICK_PROMPTS, []);

  useEffect(() => {
    if (isOpen && chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [isOpen, messages, isTyping]);

  useEffect(() => {
    const pendingTimers = timersRef.current;
    return () => {
      pendingTimers.forEach((timerId) => window.clearTimeout(timerId));
    };
  }, []);

  const sendMessage = useCallback(
    (input) => {
      const userText = (input || message).trim();
      if (!userText) return;

      const answer = getArcLabsBotAnswer(userText);
      const timerId = window.setTimeout(() => {
        setMessages((prev) => [...prev, { role: "bot", ...answer }]);
        setIsTyping(false);
      }, getResponseDelay(answer));

      timersRef.current.push(timerId);
      setMessages((prev) => [...prev, { role: "user", text: userText }]);
      setMessage("");
      setIsTyping(true);
      adjustHeight(true);
      setIsOpen(true);
    },
    [adjustHeight, message]
  );

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="arc-chatbot" aria-live="polite">
      {isOpen && (
        <div className="arc-chat-panel">
          <div className="arc-chat-header">
            <div>
              <div className="arc-chat-kicker">
                <Sparkles size={12} />
                Site-aware ARC assistant
              </div>
              <h2>Ask me about ARC LABS</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="arc-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X size={18} />
            </Button>
          </div>

          <div className="arc-chat-body" ref={chatBodyRef}>
            {messages.map((item, index) => (
              <ChatMessage
                key={`${item.role}-${index}-${item.text.slice(0, 12)}`}
                message={item}
                onSuggestion={sendMessage}
              />
            ))}
            {isTyping && <TypingIndicator />}
          </div>

          <div className="arc-chat-prompts">
            {suggestions.map((item) => {
              const Icon = iconMap[item.icon] || Bot;
              return (
                <button key={item.label} type="button" onClick={() => sendMessage(item.prompt)}>
                  <Icon size={14} />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="arc-chat-input-wrap">
            <Textarea
              ref={textareaRef}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
                adjustHeight();
              }}
              onKeyDown={handleKeyDown}
              placeholder="Ask about ARC LABS, kits, pricing, CSR, IIoT..."
              className="arc-chat-input"
              style={{ overflow: "hidden" }}
            />
            <div className="arc-chat-actions">
              <span className="arc-chat-input-hint">Answers from website knowledge</span>
              <Button
                className="arc-chat-send"
                size="icon"
                onClick={() => sendMessage()}
                disabled={!message.trim()}
                aria-label="Send message"
              >
                <ArrowUpIcon size={17} />
              </Button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        className="arc-chat-launcher"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close ARC LABS chat" : "Open ARC LABS chat"}
      >
        <MessageCircle size={23} />
        {!isOpen && <span>Ask ARC AI</span>}
      </button>
    </div>
  );
}
