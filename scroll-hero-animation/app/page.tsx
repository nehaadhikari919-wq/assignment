"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "98%",
    title: "Smooth Experience",
    description: "Designed for fluid and responsive interactions.",
  },
  {
    value: "72%",
    title: "User Engagement",
    description: "Motion creates a more memorable experience.",
  },
  {
    value: "3.2x",
    title: "Visual Impact",
    description: "Interactive storytelling keeps users engaged.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const visual = visualRef.current;
    const ring = ringRef.current;
    const text = textRef.current;
    const statsContainer = statsRef.current;

    if (!hero || !visual || !ring || !text || !statsContainer) return;

    const ctx = gsap.context(() => {
      /* --------------------------------
         INITIAL HERO ANIMATION
      -------------------------------- */

      const titleWords = gsap.utils.toArray(".title-word");

      gsap.set(titleWords, {
        opacity: 0,
        y: 50,
      });

      gsap.set(".stat-card", {
        opacity: 0,
        y: 30,
      });

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro.to(titleWords, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.08,
      });

      intro.to(
        ".stat-card",
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
        },
        "-=0.35"
      );

      /* --------------------------------
         SCROLL-DRIVEN VISUAL
      -------------------------------- */

      gsap.to(visual, {
        y: 420,
        x: -80,
        rotation: -18,
        scale: 0.72,
        ease: "none",

        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* --------------------------------
         VISUAL ROTATION
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
         HERO TEXT PARALLAX
      -------------------------------- */

      gsap.to(text, {
        y: -160,
        opacity: 0.25,
        ease: "none",

        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* --------------------------------
         STATS PARALLAX
      -------------------------------- */

      gsap.to(statsContainer, {
        y: -100,
        opacity: 0.15,
        ease: "none",

        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* --------------------------------
         FLOATING PARTICLES
      -------------------------------- */

      gsap.utils.toArray(".particle").forEach((particle, index) => {
        gsap.to(particle as HTMLElement, {
          y: index % 2 === 0 ? -100 : 100,
          x: index % 2 === 0 ? 50 : -50,
          rotation: index % 2 === 0 ? 90 : -90,
          ease: "none",

          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 2 + index * 0.3,
          },
        });
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#050505] text-white">
      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section
        ref={heroRef}
        className="relative min-h-[180vh] overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#050505]" />

        {/* Gradient glow */}
        <div className="absolute left-1/2 top-[35%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[140px]" />

        <div className="absolute right-[-150px] top-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        {/* Particles */}
        <div className="particle absolute left-[10%] top-[30%] h-2 w-2 rounded-full bg-white/50" />

        <div className="particle absolute left-[18%] top-[65%] h-3 w-3 rounded-full bg-fuchsia-400/60" />

        <div className="particle absolute right-[15%] top-[25%] h-2 w-2 rounded-full bg-cyan-400/70" />

        <div className="particle absolute right-[25%] top-[70%] h-3 w-3 rounded-full bg-white/40" />

        {/* Main content */}
        <div className="sticky top-0 flex min-h-screen items-center justify-center px-6 py-20">
          <div className="relative z-10 w-full max-w-7xl">
            {/* Top label */}
            <div className="mb-8 flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-white/40">
                Creative Digital Experience
              </p>

              <p className="hidden text-xs uppercase tracking-[0.3em] text-white/30 sm:block">
                Scroll to explore ↓
              </p>
            </div>

            {/* Hero Text */}
            <div ref={textRef} className="relative z-20 text-center">
              <p className="mb-7 text-xs uppercase tracking-[0.5em] text-fuchsia-300">
                Digital Innovation
              </p>

              <h1 className="mx-auto max-w-6xl text-[clamp(3rem,9vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.06em]">
                <span className="title-word mr-3 inline-block">
                  WELCOME
                </span>

                <span className="title-word inline-block text-white/30">
                  ITZ
                </span>

                <br />

                <span className="title-word mr-3 inline-block">
                  FIZZ
                </span>

                <span className="title-word inline-block text-fuchsia-400">
                  .
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                A scroll-driven digital experience where design,
                interaction and motion come together to create something
                memorable.
              </p>
            </div>

            {/* Main Visual */}
            <div
              ref={visualRef}
              className="pointer-events-none absolute left-1/2 top-[53%] z-10 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 sm:h-[350px] sm:w-[350px] lg:h-[430px] lg:w-[430px]"
            >
              {/* Outer ring */}
              <div
                ref={ringRef}
                className="absolute inset-0 rounded-full border border-white/10"
              >
                <div className="absolute left-1/2 top-[-5px] h-3 w-3 -translate-x-1/2 rounded-full bg-fuchsia-400 shadow-[0_0_30px_rgba(232,121,249,1)]" />

                <div className="absolute bottom-[-5px] left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,1)]" />
              </div>

              {/* Second ring */}
              <div className="absolute inset-[15%] rounded-full border border-white/10" />

              {/* Glow */}
              <div className="absolute inset-[20%] rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 opacity-70 blur-[45px]" />

              {/* Main object */}
              <div className="absolute inset-[24%] rotate-45 rounded-[35px] border border-white/20 bg-gradient-to-br from-white/20 via-fuchsia-500/30 to-cyan-400/20 shadow-[0_0_100px_rgba(217,70,239,0.35)] backdrop-blur-xl">
                <div className="absolute inset-5 rounded-[25px] border border-white/20 bg-black/30" />

                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 shadow-[0_0_70px_rgba(255,255,255,0.4)] backdrop-blur-md" />
              </div>

              {/* Small orbiting object */}
              <div className="absolute right-[5%] top-[15%] h-10 w-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md" />

              <div className="absolute bottom-[10%] left-[5%] h-6 w-6 rounded-full bg-fuchsia-400 shadow-[0_0_30px_rgba(232,121,249,0.9)]" />
            </div>

            {/* Statistics */}
            <div
              ref={statsRef}
              className="relative z-30 mt-24 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-28"
            >
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="stat-card group rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-white/20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-4xl font-bold tracking-tight">
                        {stat.value}
                      </p>

                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-white/70">
                        {stat.title}
                      </p>
                    </div>

                    <span className="text-lg text-fuchsia-300">↗</span>
                  </div>

                  <p className="mt-4 text-xs leading-6 text-white/40">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="mt-12 flex justify-center">
              <div className="flex flex-col items-center gap-3 text-white/30">
                <span className="text-[10px] uppercase tracking-[0.4em]">
                  Scroll
                </span>

                <div className="h-12 w-px bg-gradient-to-b from-white/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECOND SECTION
      ========================================= */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden border-t border-white/10 bg-[#080808] px-6 py-32">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[150px]" />

        <div className="relative z-10 max-w-4xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.5em] text-fuchsia-300">
            Scroll Interaction
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Motion should feel
            <span className="block text-white/30">natural.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/40 sm:text-base">
            The animation above is controlled by the user's scroll
            position. It does not autoplay. GSAP ScrollTrigger connects
            the movement directly to scroll progress for a smooth,
            responsive experience.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-2xl font-bold">01</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
                Scroll
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-2xl font-bold">02</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
                Interpolate
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-2xl font-bold">03</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
                Transform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505] px-6 py-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/30">
          Scroll Driven Hero Animation • Built with Next.js + GSAP
        </p>
      </footer>
    </main>
  );
}