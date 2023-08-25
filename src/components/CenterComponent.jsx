import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import './Arrow.css'

export default function CenterComponent() {

  const videoRef = useRef();

  function rotateVideo(event) {
    var x = event.clientX;
    var y = event.clientY;

    var midX = window.innerWidth / 2;
    var midY = window.innerHeight / 2;

    var offsetX = ((x - midX) / midX) * 25;
    var offsetY = ((y - midY) / midY) * 25;

    window.setTimeout(function() {
        videoRef.current.style.transform = `rotateX(${-1 * offsetY}deg) rotateY(${offsetX}deg)`;
    }, 50)
  }

  useEffect(() => {
    gsap.from(".letter", {translateX: 200, opacity: 0, duration: .65, stagger: .04, ease: "back.out(1.8)"});
    gsap.from(".video", { scale: 0, opacity: 0, duration: .55, delay: .25})
    gsap.from(".arrow-container", { scale: 0, opacity: 0, duration: .45, delay: .45})
    gsap.from(".orbs", { scale: 0, opacity: 0, duration: 1, delay: .55})
    document.addEventListener('mousemove', rotateVideo);
    return () => {
      document.removeEventListener('mousemove', rotateVideo);
    };
  }, []);

  return (
    <div className="centerDiv">
      <div className="orbs">
        <div className="orb1"></div>
        <div className="orb2"></div>
      </div>
      <div className="video" ref={videoRef}></div>
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
