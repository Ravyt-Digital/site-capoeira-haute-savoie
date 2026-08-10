"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "/photos/equipe-alpes.webp",
    alt: "Le groupe Capoeira Haute-Savoie réuni dans les Alpes avec ses instruments",
    eyebrow: "Notre équipe",
    title: "Ensemble, au cœur des Alpes",
    position: "center 58%",
  },
  {
    src: "/photos/capoeira-alpes.webp",
    alt: "Mestre Cobra Preta et Fabiana en mouvement face aux Alpes",
    eyebrow: "Le mouvement",
    title: "La ginga face aux montagnes",
    position: "center",
  },
  {
    src: "/photos/communaute-capoeira.webp",
    alt: "La communauté Capoeira Haute-Savoie et Guerreiros dos Campeões réunie",
    eyebrow: "La communauté",
    title: "Toutes les générations dans la roda",
    position: "center 43%",
  },
  {
    src: "/photos/instruments-capoeira.webp",
    alt: "Berimbaus, pandeiro et atabaque, instruments de la capoeira",
    eyebrow: "La musicalité",
    title: "Le rythme guide chaque jeu",
    position: "center",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reducedMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [paused]);

  const showPrevious = () => setActive((current) => (current - 1 + slides.length) % slides.length);
  const showNext = () => setActive((current) => (current + 1) % slides.length);

  return (
    <div
      className="hero-art hero-slider"
      role="region"
      aria-roledescription="carrousel"
      aria-label="La capoeira en Haute-Savoie"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <figure
            className={`hero-slide${index === active ? " is-active" : ""}`}
            aria-hidden={index !== active}
            key={slide.src}
          >
            <img
              src={slide.src}
              alt={index === active ? slide.alt : ""}
              style={{ objectPosition: slide.position }}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          </figure>
        ))}
      </div>

      <div className="sun-disc" aria-hidden="true" />
      <div className="roda-word" aria-hidden="true">RODA</div>

      <div className="hero-slider-caption" aria-live="polite" aria-atomic="true">
        <span>{slides[active].eyebrow}</span>
        <strong>{slides[active].title}</strong>
      </div>

      <div className="hero-slider-controls">
        <button type="button" onClick={showPrevious} aria-label="Voir la photo précédente">←</button>
        <div className="hero-slider-dots" aria-label="Choisir une photo">
          {slides.map((slide, index) => (
            <button
              type="button"
              className={index === active ? "is-active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Afficher la photo ${index + 1} : ${slide.title}`}
              aria-current={index === active ? "true" : undefined}
              key={slide.src}
            />
          ))}
        </div>
        <button type="button" onClick={showNext} aria-label="Voir la photo suivante">→</button>
      </div>

      <p>corpo · ritmo · comunidade</p>
    </div>
  );
}
