"use client";

import Hero from "@/components/Hero/Hero";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Curve from "@/components/Curve/Curve";
import Bento from "@/components/Bento/Bento";
import Projects from "@/components/Projects/Projects";
import { LayoutGrid } from "@/components/LayoutGrid/LayoutGrid";
import MainComponent from "@/components/MainComponent/MainComponent";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main
      ref={container}
      className="relative h-[200vh] bg-occur flex flex-col min-h-screen"
    >
      <div className="absolute top-0 left-0 right-0 z-20">
        <Curve text="HI" />
      </div>
      <div className="relative z-10 flex-1">
        <Hero scrollYProgress={scrollYProgress} />
      </div>
      <div className="bg-occur flex-1 relative z-10">
        <div className="flex items-center justify-center bg-pinkish h-[100vh]">
          <div>
            <Bento />
            {/* yaha moving tech stack */}
          </div>
        </div>

        <p>satts27</p>
        <p>satts27</p>
        <div>
          <p>P</p>
          <Projects />
        </div>
        <p>satts27</p>
        <div></div>
        <p>satts27</p>
        <div className="h-screen py-20 w-full">
          <LayoutGrid cards={cards} />
        </div>
        <p>satts27</p>
        <p>satts27</p>
        <div className="p-20">
          <MainComponent />
        </div>
        <p>satts27</p>
        <p>satts27</p>
      </div>
      <div className="sticky bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">RNS_HackOverflow</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Runner-up at RNS_HackOverflow conducted at RNSIT, Bengaluru. May 27 -
        29, 2023
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnails: ["/Iste_workshop.jpg", "/Iste_workshop_2.jpg"],
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnails: ["/RNS_winning.jpg"],
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnails: ["/surya_styler.png"],
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnails: ["/BitLords1.jpg", "/BitLords2.jpg"],
  },
];
