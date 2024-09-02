import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import Link from "next/link";
import { ArrowTopRight } from "./icons";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex h-[calc(100vh-112px)] items-center px-6 sm:px-14 md:px-20"
    >
      <div className="-mt-[112px] w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Minhazul Abedin
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                React Native and Frontend developer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-2xl">
                <span className="text-xl text-accent sm:text-3xl">Hi</span>,
                I&apos;m
                <span className="text-accent"> Minhazul Abedin</span> , I turn
                vision into reality with code and design.
              </div>
            </FadeUp>
            <FadeUp key="resume" duration={0.6} delay={0.4}>
              <Link
                href="https://drive.google.com/file/d/1KwN5S5KvHwBDC8yCYaCAUp2vYQCmDRXH/view?usp=sharing"
                target="_blank"
                className="group pointer-events-auto relative mt-6 flex max-w-max items-center gap-4 text-base font-semibold sm:text-lg md:text-xl"
              >
                <div className="relative max-w-max">
                  <span className="text-accent">Download Resume</span>
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full"></span>
                </div>
                <div className="h-8 w-8">
                  <ArrowTopRight className="rotate-45 text-accent transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.1]" />
                </div>
              </Link>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
