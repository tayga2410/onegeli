import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useOnScreen } from './useOnScreen';

const RotateImage = ({ src, alt, className }) => {
  const ref = useRef();
  const hasAnimated = useOnScreen(ref);

  return (
    <motion.img
      ref={ref}
      className={className}
      src={src}
      alt={alt}
      style={{
        transform: `rotate(${hasAnimated ? 15 : -25}deg)`,
        transition: 'transform 1s ease',
      }}
    />
  );
};

export default RotateImage;
