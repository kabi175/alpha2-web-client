import { useEffect, useState } from 'react';

export default function useIsSmallScreen(width: number = 500) {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsSmall(window.innerWidth < width); // example breakpoint
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return isSmall;
}