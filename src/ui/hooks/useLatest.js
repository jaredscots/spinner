import { useEffect, useRef } from 'react';

export function useLatest(fn) {
  const latestFnRef = useRef(fn);

  useEffect(() => {
    latestFnRef.current = fn;
  }, [fn]);

  return (...rest) => (
    latestFnRef.current?.(...rest)
  );
}
