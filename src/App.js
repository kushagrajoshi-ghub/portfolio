import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/Footer/footer';
import Skills from './components/skills/skills';
import ExperienceSection from './components/experience/ExperienceSection';
import ProjectSection from './components/projects/projectSection';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Skills />
      <ExperienceSection />
      <ProjectSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
