import React from "react";
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = ({ title, company, dateRange, highlights }) => {
    return (
        <div className="experience-item container">
            <h3 className="experience-title">{title}</h3>
            <div className="experience-details">
                <p className="experience-company">
                    {company}
                </p>
                <p className="experience-date-range">
                    {dateRange}
                </p>
            </div>
            <div className="experience-highlights">
                <small className="text-light">Highlights:</small>
                <ul>
                    {highlights.map((highlight, index) => (
                        <li key={index}>
                            <BsPatchCheckFill className="li-item"/> {highlight}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Experience;
