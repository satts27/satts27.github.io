"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { useRouter } from "next/router";
import { text, curve, translate } from "./anim";

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

const curveStyles = {
  svg: {
    position: "fixed",
    height: "calc(100vh + 600px)",
    width: "100vw",
    pointerEvents: "none",
    left: 0,
    top: 0,
  },
  background: {
    position: "fixed",
    height: "calc(100vh + 600px)",
    width: "100vw",
    pointerEvents: "none",
    left: 0,
    top: 0,
    backgroundColor: "#6d5444",
    transition: "opacity 0s linear 0.1s",
  },
  route: {
    position: "absolute",
    left: "50%",
    top: "40%",
    color: "#6d5444",
    fontSize: "46px",
    zIndex: 3,
    transform: "translateX(-50%)",
    textAlign: "center",
  },
};

export default function Curve({ children }) {
  //   const router = useRouter();
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="page curve bg-green">
      <div
        style={{
          ...curveStyles.background,
          opacity: dimensions.width == null ? 1 : 0,
        }}
        className="background"
      />
      <motion.p className="route" {...anim(text)}>
        {/* {routes[router.route]} */}
      </motion.p>
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg {...anim(translate)} style={curveStyles.svg}>
      <motion.path {...anim(curve(initialPath, targetPath))} fill="#6d5444" />
    </motion.svg>
  );
};