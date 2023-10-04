import React from "react";
import Experience from "./experience";

const achievements = [
    {
        title: "Software Development Engineer",
        company: "Phando: video streaming platform for OTT & EdTech",
        dateRange: "May 2023 - Oct 2023",
        highlights: [
            "Spearheaded full stack web development for two significant projects, namely TestCoach by S.Chand Publications and OTT-SaaS catering to diverse clients including MitwaTv, VTV (Vodafone), TheWoW (BSNL), and others.",
            "Implemented robust security measures to enable secure live streaming from CDN-URLs, ensuring the protection of video content and live channels from the backend.",
            "Developed a multi-currency feature for package subscriptions, enhancing user convenience and accessibility.",
            "Established a backgate entry system for superuser access, enhancing administrative control and optimizing time usage.",
            "Introduced a Cancel Subscription feature, providing users with greater flexibility and control over their subscription plans.",
            "Played a pivotal role in developing an extensive range of features for the Edutech platform, including tests, practice modules, and courses. These features were designed to align with the functionalities of renowned platforms such as Udemy and Coursera.",
            "Actively contributed to bug-fixing efforts in the backend RESTful APIs, ensuring smoother user experiences and improved system performance",
        ],
    },
    {
        title: "Software Engineer Intern",
        company: "Phando: video streaming platform for OTT & EdTech",
        dateRange: "Jan 2023 – April 2023",
        highlights: [
            "Gained valuable knowledge and practical experience with the Laravel framework as a Software Engineer Intern.",
            "Execute multiple smaller projects to strengthen proficiency in Laravel development.",
            "Utilize Postman for creating API collections, contributing to comprehensive documentation efforts.",
            "Enhanced skills in JavaScript, HTML5, and CSS3 to deliver dynamic and engaging data representations.",
        ],
    },
];

const ExperienceSection = () => {
    return (
        <>
            <section id="experience">
                <h5>My professional Experience</h5>
                <h2>Career Highlights</h2>
                <div>
                    {achievements.map((achievement, index) => (
                        <Experience key={index} {...achievement} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default ExperienceSection;
