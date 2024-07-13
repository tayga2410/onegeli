import React from 'react';
import { motion } from 'framer-motion';
import { useOnScreen } from './useOnScreen';
import useWindowSize from './UseWindowResize';

const AnimatedImage = ({ 
  src, 
  desktopSrc,
  tabletSrc,
  semiTabletSrc, 
  mobileSrc,
  alt, 
  initialPosition, 
  animatePosition, 
  desktopInitialPosition,
  desktopAnimatePosition,
  tabletInitialPosition, 
  tabletAnimatePosition, 
  semiTabletInitialPosition, 
  semiTabletAnimatePosition, 
  mobileInitialPosition, 
  mobileAnimatePosition, 
  className 
}) => {
  const ref = React.useRef();
  const hasAnimated = useOnScreen(ref);
  const windowSize = useWindowSize(); 

  let currentInitialPosition = initialPosition;
  let currentAnimatePosition = animatePosition;
  let currentSrc = src;

  if (windowSize.width <= 1919) {
    currentInitialPosition = desktopInitialPosition || initialPosition;
    currentAnimatePosition =  desktopAnimatePosition || animatePosition;
    currentSrc =  desktopSrc || src;
  }

  if (windowSize.width <= 1439) {
    currentInitialPosition = tabletInitialPosition || initialPosition;
    currentAnimatePosition = tabletAnimatePosition || animatePosition;
    currentSrc = tabletSrc || src;
  }
  
  if (windowSize.width <= 768) {
    currentInitialPosition = semiTabletInitialPosition || initialPosition;
    currentAnimatePosition = semiTabletAnimatePosition || animatePosition;
    currentSrc = semiTabletSrc || src;
  }

  if (windowSize.width <= 767) {
    currentInitialPosition = mobileInitialPosition || initialPosition;
    currentAnimatePosition = mobileAnimatePosition || animatePosition;
    currentSrc = mobileSrc || src;
  }


  return (
    <motion.img
      className={className}
      ref={ref}
      src={currentSrc}
      alt={alt}
      initial={currentInitialPosition}
      animate={hasAnimated ? currentAnimatePosition : currentInitialPosition}
      transition={{ duration: 0.5 }}
    />
  );
};

export default AnimatedImage;
