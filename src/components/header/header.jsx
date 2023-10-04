// import React from "react";
// import './header.css';
// import CTA from "./cta";
// import ME from '../../assets/astro1.png'
// import HeaderSocial from "./headerSocial";

// const Header = () => {
//     return (
//         <header>
//             <div className="container header__container">
//                 <h4>Hello, I'm</h4>
//                 <h1>Kushagra Joshi</h1>
//                 <h4 className="text-light">Fullstack Developer</h4>

//                 <CTA />
//                 <HeaderSocial />

//                 <div className="me">
//                     <img src={ME} alt="" />
//                 </div>

//                 <a href="#contact" className="scroll__down">Scroll Down</a>

//             </div>
//         </header>
//         );
// }

// export default Header;

import React, { useState, useEffect } from "react";
import "./header.css";
import CTA from "./cta";
import ME from "../../assets/astro1.png";
import HeaderSocial from "./headerSocial";

const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [translationY, setTranslationY] = useState(0);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            const maxTranslationY = 60;
            const maxRotation = 10;
            const scrollRange = 300;

            const newTranslationY = (scrollY / scrollRange) * maxTranslationY;
            const newRotation = (scrollY / scrollRange) * maxRotation;

            setTranslationY(newTranslationY);
            setRotation(newRotation);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY]);

    return (
        <header>
            <div className="container header__container">
                <h4>Hello, I'm</h4>
                <h1>Kushagra Joshi</h1>
                <h4 className="text-light">Fullstack Developer</h4>

                <CTA />
                <HeaderSocial />

                <div className="me">
                    <div
                        className="me-inner"
                        style={{
                            transform: `translateY(${translationY}px) rotate(${rotation}deg)`,
                            transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
                            // transition: "transform 0.6s cubic-bezier(1, 1, 0.5, 1)",
                            willChange: "transform",
                        }}
                    >
                        <img src={ME} alt="" />
                    </div>
                </div>

                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default Header;
