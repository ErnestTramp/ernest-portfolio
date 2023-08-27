import React, { useRef, useEffect, useState } from 'react';
import AnimateLoad from './AnimateLoad';
import './Arrow.css'

export default function CenterComponent() {

  const introTexts = [
    'hello world',
    "hello mate",
    'hey x',
    'how you going',
    'nice to meet you',
    'greetings',
  ];

  const [randomIntroText, setRandomIntroText] = useState('');

  const videoRef = useRef();

  function rotateVideo(event) {
    var x = event.clientX;
    var y = event.clientY;

    var midX = window.innerWidth / 2;
    var midY = window.innerHeight / 2;

    var offsetX = ((x - midX) / midX) * 30;
    var offsetY = ((y - midY) / midY) * 30;

    window.setTimeout(function() {
        videoRef.current.style.transform = `rotateX(${-1 * offsetY}deg) rotateY(${offsetX}deg)`;
    }, 50)
  }

  useEffect(() => {
    //Animate the pageload
    AnimateLoad();

    //Add video rotation
    document.addEventListener('mousemove', rotateVideo);

    //Random Splash Text
    const randomIndex = Math.floor(Math.random() * introTexts.length);
    setRandomIntroText(introTexts[randomIndex]);
    return () => {
      document.removeEventListener('mousemove', rotateVideo);
    };
  }, []);

  return (
    <div className="centerDiv">
      <h2 className="intro-text">{randomIntroText}</h2>
      <div className="orbs">
        <div className="orb1"></div>
        <div className="orb2"></div>
      </div>
      <div className="video" ref={videoRef}>
        <video src="/compressed.mp4" autoPlay={true} muted={true} loop={true}></video>
      </div>
      <div className="text">
        <h1 className="ernest">
            <span className="letter">e</span>
            <span className="letter">r</span>
            <span className="letter">n</span>
            <span className="letter">e</span>
            <span className="letter">s</span>
            <span className="letter">t</span>
        </h1>
        <h1 className="brenchley">
            <span className="letter">b</span>
            <span className="letter">r</span>
            <span className="letter">e</span>
            <span className="letter">n</span>
            <span className="letter">c</span>
            <span className="letter">h</span>
            <span className="letter">l</span>
            <span className="letter">e</span>
            <span className="letter">y</span>
        </h1>
      </div>
        <a href="#" className="arrow-container">
            <div className="arrow"></div>
            <div className="arrow"></div>
            <div className="arrow"></div>  
        </a>
    </div>
  );
}
