import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const AnimateText = ({ text, delayValue }) => {
  const characters = [...text];
  return (
    <AnimatePresence>
      {characters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, color: "#FF5733" }} // Initial color scheme
          whileInView={{ opacity: 1, color: "#33FF57" }} // Color scheme when in view
          viewport={{ once: true }}
          exit={{ opacity: 0, color: "#5733FF" }} // Color scheme when exiting
          transition={{ delay: index * delayValue, duration: 0.5 }}
        >
          {letter}
        </motion.span>
      ))}
    </AnimatePresence>
  );
};

export default AnimateText;
