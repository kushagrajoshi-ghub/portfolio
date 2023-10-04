import React from "react";
import './about.css';
import Me from '../../assets/meblue.png'
import { FaAward } from 'react-icons/fa'
import { BiCodeBlock } from 'react-icons/bi'
import { MdModeOfTravel } from 'react-icons/md'

const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>
            <div className="container about__container">

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="About Me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">

                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>1 year working</small>
                        </article>

                        <article className="about__card">
                            <BiCodeBlock className="about__icon" />
                            <h5>Projects</h5>
                            <small>12+ completed</small>
                        </article>

                        <article className="about__card">
                            <MdModeOfTravel className="about__icon" />
                            <h5>Leisure</h5>
                            <small>Sports, Music, Travel</small>
                        </article>

                    </div>

                    <p className="p-margin">
                        <div className="text-white">
                        As a computer science graduate with expertise in cutting-edge web application development and a strong foundation in full-stack development, I'm passionate about crafting innovative digital solutions. I thrive on collaborative teamwork and am dedicated to continuous learning. I'm excited to contribute my skills to dynamic teams, driving positive outcomes in the ever-evolving tech landscape
                        </div>
                    </p>

                    <a href="#contact" className="btn btn-primary p-margin">Let's talk</a>

                </div>
            </div>
        </section>
    );
}

export default About;