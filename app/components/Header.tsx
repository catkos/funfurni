"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const ref = useRef(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to width (500px to 800px)
  const width = useTransform(scrollYProgress, [0, 1], [500, 800]);
  const height = useTransform(scrollYProgress, [0, 1], [500, 800]);

  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [window.innerHeight / 2, 0]
  );

  return (
    <section ref={ref} className="relative h-full w-full overflow-hidden">
      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        <motion.h1
          className="fixed uppercase text-6xl text-center z-10"
          style={{
            top: "50%",
            y: useTransform(scrollYProgress, [0, 1], ["-50%", "-800%"]),
          }}
        >
          <span className="font-bold">Fun</span>Furni
        </motion.h1>
      </div>
      <div
        id="home"
        className="h-screen flex items-center justify-center bg-pink"
      >
        <div className="relative z-10 ">
          <p className="text-xl text-center max-w-md">
            Discover furniture that's as fun as it is functional. Scroll to
            explore more of what makes your space come alive!
          </p>
        </div>
      </div>
      <motion.div
        id="scroll-indicator"
        className="fixed z-0 rounded-lg bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width, height }}
      />
      <motion.div className="fixed top-0" style={{}}>
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
    </section>
  );
};

export default Header;
