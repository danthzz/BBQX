import { useState, useEffect } from 'react';

export const useInView = (options) => {
    const [inView, setInView] = useState(false);
    const [element, setElement] = useState(null);

    useEffect(() => {
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            setInView(entry.isIntersecting);
        }, options);

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [element, options]);

    return [setElement, inView];
};
