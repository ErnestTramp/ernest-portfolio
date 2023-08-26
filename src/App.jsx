import './App.css'
import Header from './components/Header'
import CenterComponent from './components/CenterComponent'
import ProjectPage from './components/ProjectPage'
import { useEffect } from 'react'
import AboutPage from './components/AboutPage'

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
      <CenterComponent />
      <ProjectPage />
      <AboutPage />
    </>
  )
}

export default App
