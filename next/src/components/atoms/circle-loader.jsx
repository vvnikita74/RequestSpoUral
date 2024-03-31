'use client'
import { motion } from "framer-motion";

const containerStyle = {
  position: "relative",
  boxSizing: "border-box"
};

const circleStyle = {
  display: "block",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  top: 0,
  left: 0
};

const spinTransition = {
  repeat: Infinity,
  ease: "linear",
  duration: 1,
};

export default function CircleLoader() {
  return (
    <div style={containerStyle} className="circle-loader">
      <motion.span
        style={circleStyle}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}