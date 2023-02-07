import React, { useState, useEffect } from 'react'
import { FaAngleDoubleUp } from "react-icons/fa";
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { IconContext } from "react-icons";

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        });
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <IconContext.Provider value={{ color: "blue", size: '100', className: "global-class-name" }}>
            <div >
                {showScrollTopButton && (
                    <Box sx={{ position: "fixed", left: '50%', transform: 'translate(-50%, 0)', bottom: 30, m: 0, border: 'solid 1px green', zIndex: 1000 }}>
                        <FaAngleDoubleUp
                            onClick={scrollTop}
                        />
                    </Box>
                )}
            </div>
        </IconContext.Provider>
    )
}

export default ScrollToTop