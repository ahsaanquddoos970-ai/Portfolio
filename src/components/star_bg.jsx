// src/components/StarBackground.jsx
import React, { useState } from "react";
import "./star_bg.css";

function generateStars() {
  return Array.from({ length: 80 }, () => ({
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
    opacity: Math.random() * 0.8 + 0.2,
    animationDelay: `${Math.random() * 10}s`,
  }));
}

function generateMeteors() {
  return Array.from({ length: 6 }, () => ({
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
    animationDelay: `${Math.random() * 15}s`,
  }));
}

export function StarBackground() {
  const [stars] = useState(generateStars);
  const [meteors] = useState(generateMeteors);

  return (
    <div className="star-background" aria-hidden="true">
      <div className="star-background__glow" />

      {stars.map((star, i) => (
        <div
          key={i}
          className="star-background__star"
          style={{
            top: star.top,
            left: star.left,
            opacity: star.opacity,
            animationDelay: star.animationDelay,
          }}
        />
      ))}

      {meteors.map((meteor, i) => (
        <div
          key={`m-${i}`}
          className="star-background__meteor"
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.animationDelay,
          }}
        />
      ))}
    </div>
  );
}
