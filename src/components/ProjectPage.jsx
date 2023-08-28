import { useEffect, useState, useRef } from 'react';
import './ProjectPage.css';
import StarsCanvas from './StarsCanvas';
import throttle from 'lodash/throttle';

function CustomCarousel(props) {
    const slider = useRef(null);
    let isDown = useRef(false);
    let startX = useRef(null);
    let scrollLeft = useRef(null);
  
    useEffect(() => {
      if (slider && slider.current) {
        let sliderRef = slider.current;
        sliderRef.addEventListener("mousedown", one);
        sliderRef.addEventListener("mousedown", two);
        sliderRef.addEventListener("mouseleave", three);
        sliderRef.addEventListener("mouseup", four);
        sliderRef.addEventListener("mousemove", five);
  
        return () => {
          sliderRef.removeEventListener("mousedown", one);
          sliderRef.removeEventListener("mousedown", two);
          sliderRef.removeEventListener("mouseleave", three);
          sliderRef.removeEventListener("mouseup", four);
          sliderRef.removeEventListener("mousemove", five);
        };
      }
    }, []);
  
    function one(e) {
      isDown.current = true;
      startX.current = e.pageX - slider.current.offsetLeft;
      scrollLeft.current = slider.current.scrollLeft;
    }
  
    function two(e) {
      isDown.current = true;
      startX.current = e.pageX - slider.current.offsetLeft;
      scrollLeft.current = slider.current.scrollLeft;
    }
  
    function three() {
      isDown.current = false;
    }
  
    function four() {
      isDown.current = false;
    }
  
    function five(e) {
      if (!isDown.current) return;
      e.preventDefault();
      const x = e.pageX - slider.current.offsetLeft;
      const walk = x - startX.current;
      slider.current.scrollLeft = scrollLeft.current - walk;
    }
  
    return (
      <div className="carousel" ref={slider}>
        {props.children}
      </div>
    );
}

function Box({ index }) {
    return <div className="carousel-item">Box {index}</div>;
  }
  

export default function ProjectPage() {

    return (
        <div className="centerDiv-2">
            <StarsCanvas />
            <div className="text-desc">
                <p>MY PROJECTS</p>
            </div>                
                <CustomCarousel>
                    {new Array(10).fill("").map((_, index) => {
                    return <Box index={index} key={index} />;
                    })}
                </CustomCarousel>
            <div className="project-text">
                <p className='project-type'>selectedProject.type</p>
                <h2 className='project-title'>selectedProject.title</h2>
                <p>selectedProject.description</p>
            </div>
        </div>
    );
}
