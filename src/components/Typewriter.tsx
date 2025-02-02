// Typewriter.tsx
import React, { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number; // Velocidad de escritura
  pause?: number; // Pausa antes de borrar
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  speed = 150,
  pause = 1500,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText((prev) => prev.slice(0, -1)); // Borrar letra por letra
        } else {
          setDisplayText((prev) => currentWord.slice(0, prev.length + 1)); // Escribir letra por letra
        }

        if (!isDeleting && displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), pause); // Pausa antes de borrar
        } else if (isDeleting && displayText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length); // Cambiar a la siguiente palabra
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, words, currentWordIndex, speed, pause]);

  return (
    <h1 className="typewriter">
      {displayText}
      <span className="cursor">|</span>
    </h1>
  );
};
