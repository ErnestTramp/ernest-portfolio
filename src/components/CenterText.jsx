import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import './Arrow.css'

export default function CenterText() {

    const letters = useRef();

    useLayoutEffect(() => {
  
    let ctx = gsap.context(() => {
    gsap.from(".letter", { x: -100, stagger: .2, duration: 2});
    }, letters);
    
    return () => ctx.revert(); // cleanup
    
  }, []);

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
    document.addEventListener('mousemove', rotateVideo);
    return () => {
      document.removeEventListener('mousemove', rotateVideo);
    };
  }, []);

  return (
    <div className="centerDiv">
      <div className="video" ref={videoRef}></div>
      <div className="text" ref={letters}>
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
        <a href="#" class="arrow-container">
            <div class="arrow"></div>
            <div class="arrow"></div>
            <div class="arrow"></div>  
        </a>
    </div>
  );
}
