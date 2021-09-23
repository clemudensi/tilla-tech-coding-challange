import { useEffect, useState } from 'react';

const useDebounced = <T> (
  value: T,
  delay = 0
) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    }
  }, [value, delay]);

  return debounceValue;
};

export { useDebounced };
