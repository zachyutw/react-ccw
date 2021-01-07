import { useEffect, useState } from 'react';

/**
 *
 * @param offsetY detected early px to reach the bottom
 * @returns {boolean} detected that has window scrolled to bottom or not
 */
const useScrollToBottom: (offset?: number) => boolean = (offsetY = 0) => {
    const [isWindowBottom, setIsWindowBottom] = useState(false);
    useEffect(() => {
        const detectBottom = () => {
            // add 150px offset to make scroll loading more smooth
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - offsetY
            ) {
                console.log('bottom');
                setIsWindowBottom(true);
            }
            setIsWindowBottom(false);
        };

        window.addEventListener('scroll', detectBottom);

        return () => {
            window.removeEventListener('scroll', detectBottom);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isWindowBottom;
};

export default useScrollToBottom;
