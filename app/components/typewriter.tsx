"use client";
import React, { useEffect, useState } from "react";

// Fonts for Typewriter text:
import { Playfair_Display } from "next/font/google";
import { Special_Elite } from "next/font/google";
import { Gloria_Hallelujah } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const elite = Special_Elite({
  subsets: ["latin"],
  weight: ["400"]
})

const halleluja = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: ["400"]
})

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

// ...existing code...

const fontClasses = [
  halleluja.className,
];

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
  const [fontIndex, setFontIndex] = useState(() => Math.floor(Math.random() * fontClasses.length));

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
        setPhraseIndex((i) => {
          const nextIndex = (i + 1) % phrases.length;
          setFontIndex(Math.floor(Math.random() * fontClasses.length));
          return nextIndex;
        });
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`${className} ${fontClasses[fontIndex]}`}>
      {text}
      <span style={{ opacity: showCursor ? 1 : 0 }} className="inline-block w-2 animate-blink">
        |
      </span>
    </span>
  );
};

// ...existing code...

export default Typewriter;