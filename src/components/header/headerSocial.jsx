import React from "react";
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';



const HeaderSocial = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/kushagra-joshi25/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/kushagrajoshi-ghub" target="_blank"><BsGithub /></a>
            <a href = "mailto: kushagra.joshi25@gmail.com" target="_blank"><MdEmail /></a>
        </div>
    );
}

export default HeaderSocial;