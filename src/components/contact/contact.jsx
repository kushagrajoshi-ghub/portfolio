import React from "react";
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u8kpfds', 'template_r6zcebu', form.current, 'lTpSDV-rW93xFuzuI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <section id="contact">

            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">

                    <article className="contact__option">
                        <MdEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>kushagra.joshi25@gmail.com</h5>
                        <a href="mailto: kushagra.joshi25@gmail.com" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsLinkedin className="contact__option-icon" />
                        <h4>LinkedIn</h4>
                        <h5>kushagra-joshi25</h5>
                        <a href="https://www.linkedin.com/in/kushagra-joshi25/" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>+91-7290033901</h5>
                        <a href="https://api.whatsapp.com/send?phone=+917290033901" target="_blank">Send a message</a>
                    </article>

                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" id="" placeholder="Your Full name" required />
                    <input type="email" name="email" id="" placeholder="Your Email" required />
                    <textarea name="message" id="" cols="30" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary contact__btn">Send Message</button>
                </form>

            </div>

        </section>
    );
}

export default Contact;