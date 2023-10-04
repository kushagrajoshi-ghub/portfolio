import React from "react";
import ProjectCarousel from "./projects";

const projectsDesc = [
    {
        title: "TestCoach by S.Chand publications",
        link: "https://testcoach.in/",
        techStack: "Laravel | PHP | JavaScript | MySQL | HTML+CSS+Bootstrap",
        date: "Jan 2023 - May 2023",
        description: [
            "During the TestCoach project with S. Chand Publications, I leveraged the full potential of the Laravel framework to create a robust educational platform.",
            "My contributions included seamlessly integrating user authentication and onboarding processes, where I also implemented email and SMS verification gateways for enhanced security and user trust.",
            "Collaborating closely with my team, I helped design and implement key educational features such as tests, practice modules, and courses. These enhancements aligned perfectly with industry standards, akin to well-established platforms like Udemy and Coursera.",
            "I actively contributed to bug-fixing efforts, ensuring optimal platform performance. Furthermore, I also developed the REST API's as per the requirement of android/ios app, resulting in a significant boost to user experiences and overall system efficiency.",
            "Our TestCoach project was a collaborative effort amongst my talented colleagues and I, where we combined our expertise and skills to set new standards in the e-learning industry. Our commitment to quality and innovation shines through in every aspect of TestCoach, resulting in a cutting-edge educational platform."
        ],
    },
    {
        title: "OTT-SaaS",
        link: "https://www.vtv.co.tz/",
        techStack: "Laravel | PHP | JavaScript | MySQL | HTML+CSS+Bootstrap",
        date: "March 2023 - Oct 2023",
        description: [
            "Spearheaded numerous initiatives to elevate and refine the existing OTT-SaaS model. Implemented substantial enhancements to both web and API components on the server-side, resulting in a more seamless and user-friendly experience.",
            " Implemented robust security measures to ensure the secure live streaming of content from CDN-URLs. This fortification safeguards valuable video content and live channels, guaranteeing a secure and protected viewing experience for users.",
            "Developed a dynamic multi-currency feature for subscription packages, enhancing user convenience and accessibility on the platform. This addition enables users to engage with the platform more conveniently and flexibly.",
            "Established a streamlined backgate entry system, providing superuser access. This optimization enhances administrative control, leading to improved efficiency and time management across the platform.",
            "Introduced a 'Cancel Subscription' feature, empowering users with greater flexibility and control over their subscription plans. This enhancement enriches the overall user experience by putting subscription management in the hands of the users.",
        ],
    },
    {
        title: "Medicinal Availability Web Application",
        link: "https://mediwayy.000webhostapp.com/index.php",
        techStack: "HTML+CSS+Bootstrap | JavaScript+jQuery | AngularJS | PHP | MySQL",
        date: "March 2021",
        description: [
            "Developed a comprehensive web application to improve medicinal availability.",
            "Utilized a full stack of technologies and languages.",
            "Enhanced accessibility and streamlined the process of acquiring medicines.",
            "Optimized performance with AJAX, AngularJS, and JSON for real-time updates.",
            "Created an interactive admin dashboard to present medicinal information effectively.",
        ],
    },];

const ProjectSection = () => {
    return (
        <>
            <section id="projects">
                <h5>My Featured Work</h5>
                <h2>Recent Projects</h2>
                {/* Pass the correct prop name */}
                <ProjectCarousel projects={projectsDesc} />
            </section>
        </>
    );
};

export default ProjectSection;
