import React, { useRef, useState, useEffect } from 'react';

/**
 * Reusable auto-scrolling horizontal container.
 * Automatically scrolls items horizontally at set intervals, pauses on hover/touch,
 * and loops back to the start when reaching the end of the scroll width.
 * Automatically disables scroll actions when the content fits inside the container (e.g. in grid layouts).
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements
 * @param {number} [props.interval=3200] - Duration between scrolls in ms
 * @param {string} [props.className=""] - CSS classes for the container
 */
export const AutoScrollContainer = ({ children, interval = 3200, className = "" }) => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (!scrollRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      
      // If the content fits in the container (e.g., desktop grid layout), do not scroll
      if (scrollWidth <= clientWidth + 10) return;

      // Loop back to start if near the end of scrollable content
      if (scrollLeft + clientWidth >= scrollWidth - 25) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll by 85% of client width to reveal next items while aligning with snap points
        const scrollStep = clientWidth * 0.85;
        scrollRef.current.scrollBy({ left: scrollStep, behavior: 'smooth' });
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, interval]);

  return (
    <div
      ref={scrollRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
      className={className}
    >
      {children}
    </div>
  );
};

export default AutoScrollContainer;
