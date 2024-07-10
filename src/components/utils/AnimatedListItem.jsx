import React from "react";
import { motion } from "framer-motion";

const AnimatedListItem = ({ children, index, triggerIndex, className }) => {
  const shouldAnimate = index <= triggerIndex;

  return (
    <motion.li
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.li>
  );
};

export default AnimatedListItem;
