import React, { useState } from "react";
import { Card } from "../Card/Card";

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardData = [
    {
      title: "Stock Market Analysis Website",
      href: "https://example.com/stock-market",
      description:
        "A comprehensive platform for analyzing stock market trends and data.",
    },
    {
      title: "Cyber Bullying Detection",
      href: "https://example.com/cyber-bullying",
      description:
        "An AI-powered tool for detecting and preventing cyber bullying.",
    },
    {
      title: "E-commerce Platform",
      href: "https://example.com/e-commerce",
      description:
        "A user-friendly e-commerce platform with a range of features.",
    },
    {
      title: "Personal Blog",
      href: "https://example.com/blog",
      description: "A stylish and customizable personal blog template.",
    },
    {
      title: "Portfolio Website",
      href: "https://example.com/portfolio",
      description:
        "A sleek portfolio website to showcase your work and projects.",
    },
  ];
  const cardCount = cardData.length;
  const visibleCount = 3;

  const handleNext = () => {
    if (startIndex < cardCount - visibleCount) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="p-10">
      <div className="flex justify-between mb-4 items-center">
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded mr-4"
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          Previous
        </button>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={handleNext}
          disabled={startIndex >= cardCount - visibleCount}
        >
          Next
        </button>
      </div>
      <div className="overflow-hidden">
        <section
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
          }}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="min-w-[calc(100%/3)] p-2 border border-purple-700 rounded-[12px]"
            >
              <Card
                title={card.title}
                href={card.href}
                description={card.description}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Projects;
