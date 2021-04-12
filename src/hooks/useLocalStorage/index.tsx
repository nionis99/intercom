import { useState } from 'react';

function useLocalStorage(key: string, initialValue: string | null) {
  const [storedValue, setStoredValue] = useState<string | null>(() => {
    const item = window.localStorage.getItem(key);
    try {
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return item || initialValue;
    }
  });

  const setValue = (value: string | null) => {
    try {
      window.localStorage.setItem(key, value as string);
      setTimeout(() => setStoredValue(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
