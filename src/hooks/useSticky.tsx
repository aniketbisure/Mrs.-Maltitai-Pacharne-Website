import { useEffect, useState } from "react"
const useSticky = () => {
    const [isSticky, setIsSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 250;
            setIsSticky((prev) => {
                if (prev !== scrollCheck) {
                    return scrollCheck;
                }
                return prev;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return [isSticky]
}

export default useSticky