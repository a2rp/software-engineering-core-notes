import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

import { Styled } from "./styled";

const GoToTop = ({ scrollContainerRef }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const container = scrollContainerRef?.current;
        if (!container) {
            return undefined;
        }

        const updateVisibility = () => {
            setIsVisible(container.scrollTop > 360);
        };

        container.addEventListener("scroll", updateVisibility, { passive: true });
        updateVisibility();

        return () => container.removeEventListener("scroll", updateVisibility);
    }, [scrollContainerRef]);

    if (!isVisible) {
        return null;
    }

    return (
        <Styled.Wrapper>
            <button
                type="button"
                onClick={() => scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Scroll to top"
                title="Scroll to top"
            >
                <FiArrowUp aria-hidden="true" />
            </button>
        </Styled.Wrapper>
    );
};

export default GoToTop;