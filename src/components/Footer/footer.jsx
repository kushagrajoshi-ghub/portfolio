import React from "react";
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>

            <a href="#" className="footer__logo">Kushagra Joshi</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href=""><FaFacebookF /></a>
                <a href=""><BsInstagram /></a>
                <a href=""><BsTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Learning and Growing. Thankyou! </small>
            </div>

        </footer>
        );
}

export default Footer;