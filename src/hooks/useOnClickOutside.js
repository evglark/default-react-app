import { useEffect, useRef, useState } from 'react';

export const useOnClickOutside = () => {
  const [clickOutside, setClickOutside] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setClickOutside(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, clickOutside, setClickOutside };
};
