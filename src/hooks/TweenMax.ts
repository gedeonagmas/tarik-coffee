import { useEffect, useState } from 'react';

export function useParallax(containerRef: React.RefObject<HTMLDivElement>, movement: number) {
  const [parallaxX, setParallaxX] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const relX = e.pageX - (left + width / 2);
        const relY = e.pageY - (top + height / 2);
        setParallaxX((relX / width) * movement);
        setParallaxY((relY / height) * movement);
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [containerRef, movement]); // Include containerRef and movement in the dependency array

  return { parallaxX, parallaxY };
}