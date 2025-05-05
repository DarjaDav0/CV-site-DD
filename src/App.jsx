import React, { useEffect, useRef } from 'react';
import './App.css';
import Aboutsection from './Aboutsection';
import Skills from './skills.jsx';
import './skills.css';
import Projects from './projects.jsx';

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Copied to clipboard:', text);
  }).catch(err => {
    console.error('Failed to copy to clipboard:', err);
  });
}

function App() {

  const handleCopyEmail = (e) => {
    e.preventDefault(); // Prevent default mailto behavior
    copyToClipboard('darja.davydova.dd@gmail.com');
  };

	const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('nav');
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const percentageScrolled = scrollY / maxScroll;
      const newTop = 50 - (percentageScrolled * 40); 
      nav.style.top = `${newTop}%`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          const navLink = document.querySelector(`.nav ul li a[href="#${id}"]`);

          if (entry.isIntersecting) {
            navLink.classList.add('active');
          } else {
            navLink.classList.remove('active');
          }
        });
      },
      { threshold: 0.5 } 
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App text-center">
			<section id="intro">
      <div className="App-header">
        <h1>Darja Davydova</h1>
          <a>Welcome to my web CV <br/> Made with Vite and React.js :) <br/> Updating with gh-pages </a>
          <ul className="inline-list">
            <li>
              <a 
                href="mailto:darja.davydova.dd@gmail.com" 
                className="button" 
                onClick={handleCopyEmail}
              >
                Mail me
              </a>
            </li>
            <li><a href="https://www.linkedin.com/in/darja-davydova-814953229" className="button">Linkedin</a></li>
            <li><a href="https://github.com/DarjaDav0" className="button">GitHub</a></li>
          </ul>
      </div>
			</section>
      <nav id="nav" className="nav">
        <ul>
          <li><a href="#intro" onClick={() => handleScrollToSection('intro')}>Intro</a></li>
          <li><a href="#about" onClick={() => handleScrollToSection('about')}>About</a></li>
          <li><a href="#skills" onClick={() => handleScrollToSection('skills')}>Skills</a></li>
          <li><a href="#projects" onClick={() => handleScrollToSection('projects')}>Projects</a></li>
        </ul>
      </nav>
      <section id="about">
        <Aboutsection />
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
    </div>
  );
}

export default App;