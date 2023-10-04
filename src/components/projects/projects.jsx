import React, { useRef } from "react";
import "./projects.css";
import { BsPatchCheckFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CustomPrevArrow = ({ onClick }) => (
    <button className="custom-prev-arrow" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} className="left-arrow" />
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button className="custom-next-arrow" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} className="right-arrow" />
    </button>
);

const Projects = ({ title, techStack, date, description, link }) => {
    return (
        <div className="experience-item container">
            <div className="project-heading">
                <h3 className="experience-title"><a href={link} target="_blank">{title}</a></h3>
                <div className="experience-details">
                    <p className="experience-company">{techStack}</p>
                    <p className="experience-date-range">{date}</p>
                </div>
            </div>
            <div className="experience-highlights">
                <small className="text-light">Description:</small>
                <ul>
                    {description.map((item, index) => (
                        <li key={index}>
                            <BsPatchCheckFill className="li-item" /> {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const ProjectCarousel = ({ projects }) => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    return (
        <Slider {...settings}>
            {projects.map((project, index) => (
                <Projects key={index} {...project} />
            ))}
        </Slider>
    );
};

export default ProjectCarousel;
