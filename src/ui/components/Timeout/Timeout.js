import { useEffect } from 'react';
import { useLatest } from '../../hooks';

export function Timeout({
  ms,
  onTimeout = () => {},
}) {
  const latestOnTimeout = useLatest(onTimeout);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      latestOnTimeout();
    }, ms);

    return () => {
      window.clearTimeout(timerId);
    };
  }, []);

  return null;
}
