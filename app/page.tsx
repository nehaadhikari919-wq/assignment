"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hero.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    number: "98%",
    title: "Smooth Experience",
    text: "Fluid motion designed around natural user interaction.",
  },
  {
    number: "72%",
    title: "User Engagement",
    text: "Interactive storytelling creates stronger visual impact.",
  },
  {
    number: "3.2x",
    title: "Visual Impact",
    text: "Motion and depth make the experience more memorable.",
  },
];

const process = [
  {
    number: "01",
    title: "SCROLL",
    text: "The user controls the animation naturally through scrolling.",
  },
  {
    number: "02",
    title: "RESPOND",
    text: "GSAP reads scroll progress and continuously updates the scene.",
  },
  {
    number: "03",
    title: "TRANSFORM",
    text: "GPU-friendly transforms create smooth movement and depth.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const visual = visualRef.current;
    const ring = ringRef.current;
    const content = contentRef.current;
    const grid = gridRef.current;
    const progress = progressRef.current;

    if (!hero || !visual || !ring || !content || !grid || !progress) {
      return;
    }

    const ctx = gsap.context(() => {
      /* --------------------------------
         INITIAL STATES
      -------------------------------- */

      gsap.set(".hero-top", {
        opacity: 0,
        y: -20,
      });

      gsap.set(".small-tag", {
        opacity: 0,
        y: 25,
      });

      gsap.set(".title-line", {
        opacity: 0,
        y: 90,
        rotateX: 25,
      });

      gsap.set(".hero-description", {
        opacity: 0,
        y: 30,
      });

      gsap.set(".stat-box", {
        opacity: 0,
        y: 45,
      });

      gsap.set(".visual", {
        opacity: 0,
        scale: 0.75,
        rotate: -12,
      });

      gsap.set(".scroll-indicator", {
        opacity: 0,
      });

      /* --------------------------------
         HERO INTRO ANIMATION
      -------------------------------- */

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .to(".hero-top", {
          opacity: 1,
          y: 0,
          duration: 0.7,
        })
        .to(
          ".small-tag",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .to(
          ".title-line",
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            stagger: 0.12,
          },
          "-=0.2"
        )
        .to(
          ".hero-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .to(
          ".visual",
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 1.2,
            ease: "expo.out",
          },
          "-=0.7"
        )
        .to(
          ".stat-box",
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.14,
          },
          "-=0.7"
        )
        .to(
          ".scroll-indicator",
          {
            opacity: 1,
            duration: 0.5,
          },
          "-=0.2"
        );

      /* --------------------------------
         MAIN SCROLL ANIMATION
      -------------------------------- */

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      scrollTimeline
        .to(
          visual,
          {
            x: -260,
            y: 390,
            scale: 0.52,
            rotation: -38,
            ease: "none",
          },
          0
        )
        .to(
          content,
          {
            y: -190,
            scale: 0.86,
            opacity: 0.12,
            ease: "none",
          },
          0
        )
        .to(
          grid,
          {
            y: 180,
            scale: 1.08,
            ease: "none",
          },
          0
        )
        .to(
          ".stats",
          {
            y: -120,
            opacity: 0.25,
            ease: "none",
          },
          0
        )
        .to(
          ".hero-top",
          {
            y: -100,
            opacity: 0,
            ease: "none",
          },
          0
        )
        .to(
          progress,
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
          },
          0
        );

      /* --------------------------------
         RING ROTATION
      -------------------------------- */

      gsap.to(ring, {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      /* --------------------------------
         INNER RINGS
      -------------------------------- */

      gsap.to(".inner-ring.first", {
        rotation: -180,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".inner-ring.second", {
        rotation: 240,
        scale: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      /* --------------------------------
         PARALLAX PARTICLES
      -------------------------------- */

      gsap.utils
        .toArray<HTMLElement>(".particle")
        .forEach((particle, index) => {
          const direction = index % 2 === 0 ? -1 : 1;

          gsap.to(particle, {
            y: direction * (100 + index * 25),
            x: direction * (30 + index * 12),
            rotation: direction * (80 + index * 20),
            scale: index % 3 === 0 ? 1.5 : 0.7,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 2.2,
            },
          });
        });

      /* --------------------------------
         ORBITING OBJECTS
      -------------------------------- */

      gsap.to(".orb-one", {
        x: 28,
        y: -35,
        rotation: 180,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".orb-two", {
        x: -40,
        y: 50,
        scale: 1.4,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      gsap.to(".orb-three", {
        x: 50,
        y: -70,
        scale: 0.65,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      /* --------------------------------
         CONTINUOUS FLOATING EFFECT
      -------------------------------- */

      gsap.to(".floating", {
        y: -16,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
        ease: "sine.inOut",
      });

      gsap.to(".main-object", {
        y: -8,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".visual-glow", {
        scale: 1.18,
        opacity: 0.8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* --------------------------------
         STAT CARD HOVER
      -------------------------------- */

      gsap.utils.toArray<HTMLElement>(".stat-box").forEach((card) => {
        const number = card.querySelector(".stat-number");

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -8,
            duration: 0.35,
            ease: "power2.out",
          });

          gsap.to(number, {
            x: 5,
            duration: 0.3,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.35,
            ease: "power2.out",
          });

          gsap.to(number, {
            x: 0,
            duration: 0.3,
          });
        });
      });

      /* --------------------------------
         SECOND SECTION REVEAL
      -------------------------------- */

      gsap.from(".section-label", {
        opacity: 0,
        y: 25,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top 75%",
        },
      });

      gsap.from(".second-title-line", {
        opacity: 0,
        y: 70,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".second-section",
          start: "top 70%",
        },
      });

      gsap.from(".second-description", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top 60%",
        },
      });

      gsap.from(".process-card", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process",
          start: "top 80%",
        },
      });

      gsap.from(".technology-pill", {
        opacity: 0,
        scale: 0.7,
        duration: 0.5,
        stagger: 0.08,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".technologies",
          start: "top 85%",
        },
      });
    }, hero);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main className="site">
      <section ref={heroRef} className="hero">
        <div ref={gridRef} className="background-grid" />

        <div className="glow glow-one" />
        <div className="glow glow-two" />
        <div className="glow glow-three" />

        <div className="particle particle-one" />
        <div className="particle particle-two" />
        <div className="particle particle-three" />
        <div className="particle particle-four" />
        <div className="particle particle-five" />
        <div className="particle particle-six" />
        <div className="particle particle-seven" />
        <div className="particle particle-eight" />

        <div className="progress-track">
          <div ref={progressRef} className="progress-bar" />
        </div>

        <div className="sticky-container">
          <div className="hero-wrapper">
            <div className="hero-top">
              <div className="hero-tag">
                <span className="status-dot" />
                <span>CREATIVE DIGITAL EXPERIENCE</span>
              </div>

              <div className="top-right">
                <span>SCROLL / EXPLORE</span>
                <span>2026</span>
              </div>
            </div>

            <div ref={contentRef} className="hero-content">
              <div className="small-tag">DIGITAL INNOVATION / 001</div>

              <h1>
                <span className="title-line">
                  W E L C O M E
                </span>

                <span className="title-line muted">
                  I T Z
                </span>

                <span className="title-line">
                  F I Z Z
                </span>

                <span className="title-line accent">
                  .
                </span>
              </h1>

              <div className="title-decoration">
                <span />
                <span />
                <span />
              </div>

              <p className="hero-description">
                A scroll-driven digital experience where
                design, interaction and motion come together
                to create something memorable.
              </p>
            </div>

            <div ref={visualRef} className="visual">
              <div className="visual-label label-top">
                INTERACTIVE
              </div>

              <div className="visual-label label-bottom">
                MOTION / 01
              </div>

              <div ref={ringRef} className="outer-ring">
                <span className="ring-dot top" />
                <span className="ring-dot bottom" />
                <span className="ring-dot right" />
                <span className="ring-dot left" />
              </div>

              <div className="inner-ring first" />
              <div className="inner-ring second" />

              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <div className="visual-glow" />

              <div className="main-object">
                <div className="object-shine" />
                <div className="object-inner" />

                <div className="object-circle">
                  <div className="object-circle-ring" />
                  <div className="object-dot" />
                </div>

                <div className="object-line line-one" />
                <div className="object-line line-two" />
              </div>

              <div className="floating orb-one">
                <span />
              </div>

              <div className="floating orb-two">
                <span />
              </div>

              <div className="floating orb-three">
                <span />
              </div>
            </div>

            <div className="stats">
              {stats.map((stat) => (
                <div className="stat-box" key={stat.number}>
                  <div className="stat-top">
                    <div>
                      <div className="stat-number">
                        {stat.number}
                      </div>

                      <div className="stat-title">
                        {stat.title}
                      </div>
                    </div>

                    <div className="arrow">↗</div>
                  </div>

                  <p>{stat.text}</p>
                </div>
              ))}
            </div>

            <div className="scroll-indicator">
              <span>SCROLL TO EXPLORE</span>
              <div className="scroll-line">
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="second-section">
        <div className="second-background-grid" />
        <div className="second-glow" />

        <div className="second-content">
          <span className="section-label">
            SCROLL INTERACTION / 002
          </span>

          <h2>
            <span className="second-title-line">
              Motion should feel
            </span>

            <span className="second-title-line muted-large">
              natural.
            </span>
          </h2>

          <p className="second-description">
            The hero animation responds directly to the
            user&apos;s scroll position. GSAP ScrollTrigger
            connects the visual movement to scroll progress
            instead of using an autoplay animation.
          </p>

          <div className="process">
            {process.map((item) => (
              <div className="process-card" key={item.number}>
                <div className="card-number">{item.number}</div>

                <div className="card-line" />

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <span className="card-arrow">↗</span>
              </div>
            ))}
          </div>

          <div className="technologies">
            <span className="technology-pill">Next.js</span>
            <span className="technology-pill">React</span>
            <span className="technology-pill">Tailwind</span>
            <span className="technology-pill">GSAP</span>
            <span className="technology-pill">ScrollTrigger</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-left">
          <span>SCROLL DRIVEN HERO</span>
          <span>INTERACTIVE EXPERIENCE</span>
        </div>

        <div className="footer-right">
          <span>BUILT WITH NEXT.JS</span>
          <span>GSAP / REACT</span>
        </div>
      </footer>
    </main>
  );
}