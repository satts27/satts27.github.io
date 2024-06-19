import React, { useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";

const Hero = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const toRotate = ["Software Developer", "ML Enthusiast", "Data Analyst"];

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState(" "); // Initialize with a space
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000; // Define period here

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]); // Correctly include text and delta in the dependency array

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText;

    if (isDeleting) {
      updatedText = fullText.substring(0, text.length - 1);
    } else {
      updatedText = fullText.substring(0, text.length + 1);
    }

    setText(updatedText);

    // Calculate typing, deleting, and pause speed based on the period
    let typingSpeed = period / fullText.length; // Access period here
    let deletingSpeed = period / fullText.length;
    let pauseSpeed = 1000; // 1 second pause after completing a word

    if (isDeleting) {
      setDelta(deletingSpeed);
      if (updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        // Pause for 1 second after deleting a word
        setTimeout(() => {
          setDelta(typingSpeed);
        }, pauseSpeed);
      }
    } else if (updatedText === fullText) {
      setIsDeleting(true);
      setDelta(pauseSpeed); // Pause for 1 second after completing a word
      setTimeout(() => {
        setDelta(deletingSpeed);
      }, pauseSpeed);
    } else {
      setDelta(typingSpeed);
    }
  };

  return (
    <motion.div style={{ scale }}>
      <div className="flex bg-occur h-[100vh] sticky top-0 items-center justify-center">
        <div className="relative text-pinkish p-8 text-center text-border-black">
          <img
            src="/Surya_styler-nobg.png"
            alt="Surya Styler"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
          />
          <h1 className="text-[50px] font-heading2">Hi, I am</h1>
          <h1 className="text-[250px] font-heading2">Surya Ganiga</h1>
          <h1 className="text-[150px] font-heading2 relative z-20">
            <span
              className="txt-rotate"
              dataperiod="1000"
              data-rotate='["Software Developer", "ML Enthusiast", "Data Analyst"]'
            >
              <span className="wrap">
                {" " + (text === "" ? "\u00A0" : text)}
              </span>
            </span>
          </h1>
          <p className="text-[20px]">asdasdpdpas</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
