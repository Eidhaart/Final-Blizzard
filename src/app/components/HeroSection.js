"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "./HeroSection.css";

export default function HeroSection({ aboutStrings }) {
  const { t } = useTranslation(); // Import translation function

  return (
    <header className="hero-section">
      <div className="overlay"></div>
      <video className="video-background" autoPlay loop muted playsInline>
        <source src="/video-file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>{aboutStrings.hero.title}</h1>
        <p>
          <i>{aboutStrings.hero.description}</i>
        </p>
      </div>
    </header>
  );
}
