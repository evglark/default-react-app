import { useEffect, useRef, useState } from 'react';

export const useOnClickOutside = (initialValue) => {
	const [clickdOutside, setClickOutside] = useState(initialValue);
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

    return { ref, clickdOutside };
};
