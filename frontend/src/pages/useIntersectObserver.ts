import { useEffect, useState } from 'react';

interface IntersectObserver {
  error: unknown;
}

export const useIntersectObserver = (idElementTrigger: string, callback: () => void): IntersectObserver => {
  const [error, setError] = useState<unknown>(undefined);

  useEffect(() => {
    let intersectionObserver: IntersectionObserver | null;
    try {
      intersectionObserver = new IntersectionObserver((entries) => {
        const thereWasSomeIntersection: boolean = entries.some((entry) => entry.isIntersecting);

        if (thereWasSomeIntersection) {
          callback();
        }
      });
      intersectionObserver.observe(document.getElementById(idElementTrigger) as Element);
    } catch (err: unknown) {
      setError(err);
    }

    return () => intersectionObserver?.disconnect();
  }, [idElementTrigger]);

  return { error };
};
