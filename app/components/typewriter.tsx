"use client";
import React, { useEffect, useState } from "react";

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1200,
  className = "",
}) => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text.length < currentPhrase.length) {
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && text.length === currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        let nextIndex = phraseIndex;
        if (phrases.length > 1) {
          while (nextIndex === phraseIndex) {
            nextIndex = Math.floor(Math.random() * phrases.length);
          }
        }
        setPhraseIndex(nextIndex);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      <span style={{ opacity: showCursor ? 1 : 0 }} className="inline-block w-2 animate-blink">
        |
      </span>
    </span>
  );
};

export default Typewriter;