"use client";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import WelcomeArticle from "./articles/WelcomeArticle";
import FeaturesArticle from "./articles/FeaturesArticle";
import { useRef } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  const containerRef = useRef(null);
  const { scrollYProgress: containerScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const welcomeRef = useRef(null);
  const featuresRef = useRef(null);

  const welcomeInView = useInView(welcomeRef, { amount: 0.5 });
  const featuresInView = useInView(featuresRef, { amount: 0.5 });

  const x = useTransform(containerScrollYProgress, [0, 1], ["0%", "-50%"]);

  // Transform scroll progress to width
  const width = useTransform(scrollYProgress, [0, 0.5], ["30cqw", "60cqw"]);
  const height = useTransform(scrollYProgress, [0, 0.5], ["10cqw", "40cqw"]);
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-green">
      <section
        className="relative h-full w-full overflow-hidden"
        style={{ scrollSnapAlign: "start" }}
      >
        <div className="relative z-10 h-screen flex flex-col items-center justify-center">
          <motion.h1
            className="fixed font-chango uppercase text-6xl text-center text-green text-shadow-lg"
            style={{
              y: useTransform(scrollYProgress, [0, 0.5], ["0cqw", "-20cqw"]),
            }}
          >
            <span className="font-bold">Fun</span>Furni
          </motion.h1>
        </div>
      </section>
      <section
        id="home"
        ref={containerRef}
        className="relative w-screen h-[150vh] bg-pink"
      >
        {/* Invisible snap points for vertical scrolling */}
        <div className="absolute top-0 h-screen w-full snap-start snap-always pointer-events-none" />
        <div className="absolute top-[50vh] h-screen w-full snap-start snap-always pointer-events-none" />

        <div
          id="clip-path-wrapper"
          className="sticky top-0 z-10 flex items-center justify-items-start overflow-hidden"
        >
          <motion.div style={{ x }} className="flex flex-nowrap h-full">
            <motion.article
              ref={welcomeRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: welcomeInView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              id="welcome"
              className="shrink-0 w-screen h-screen flex items-center justify-center snap-start snap-always"
            >
              <WelcomeArticle />
            </motion.article>
            <motion.article
              ref={featuresRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: featuresInView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="shrink-0 w-screen h-screen flex items-center justify-center snap-start snap-always"
            >
              <FeaturesArticle />
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* nav 
      <motion.div className="fixed top-[15cqw] right-[10cqw] z-50" style={{}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
          />
        </svg>
      </motion.div>
      */}
      {/* white block */}
      <motion.div
        id="scroll-indicator"
        className="fixed z-0 shadow-md rounded-lg bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width, height }}
      />
      <section id="hello" className=" w-full h-full bg-blue-400">
        <h2>hello</h2>
      </section>
    </main>
  );
}
