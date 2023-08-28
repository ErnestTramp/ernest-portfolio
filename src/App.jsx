import './App.css'
import Header from './components/Header'
import CenterComponent from './components/CenterComponent'
import ProjectPage from './components/ProjectPage'
import { useEffect, useRef } from 'react'
import AboutPage from './components/AboutPage'
import { Link, Element } from 'react-scroll';
import StarsCanvas from './components/StarsCanvas'

function App() {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const styleSheet = document.createElement('style');
      document.head.appendChild(styleSheet);

      const rule = 'body::-webkit-scrollbar { width: 6px; }';

      styleSheet.sheet.insertRule(rule, 0);
    })
  }, [])

  return (
    <>
      <Header />
      <Element name="home">
        <CenterComponent />
      </Element>
      <Element name="projects">
        <StarsCanvas />
        <ProjectPage />
      </Element>
      <Element name="about">
        <AboutPage />
      </Element>
    </>
  );
}

export default App
