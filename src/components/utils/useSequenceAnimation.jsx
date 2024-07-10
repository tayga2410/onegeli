import { useEffect, useState } from 'react';

export const useSequenceAnimation = (isEnabled, delay = 300) => {
  const [triggerIndex, setTriggerIndex] = useState(-1);

  useEffect(() => {
    if (isEnabled) {
      const interval = setInterval(() => {
        setTriggerIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearInterval(interval);
    }
  }, [isEnabled, delay]);

  return triggerIndex;
};