import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./ProjectPage.css";
import ProjectsData from "../assets/Projects";
import { gsap } from "gsap";
import Ball from "./Ball";

export default function ProjectPage() {
  const tl = gsap.timeline();
  const [width, setWidth] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);
  const carousel = useRef();
  const carouselItems = useRef([]);
  const { scrollYProgress } = useScroll();

  const offsetCarousel = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth - 400);

    carousel.current.addEventListener("mousedown", () => {
      document.querySelector(".ball").classList.remove("active");
    });
    carousel.current.addEventListener("mouseup", () => {
      document.querySelector(".ball").classList.add("active");
    });

    carouselItems.current.forEach((itemRef) => {
      itemRef.addEventListener("mouseenter", () => {
        document.querySelector(".ball").classList.add("active");
      });

      itemRef.addEventListener("mouseleave", () => {
        document.querySelector(".ball").classList.remove("active");
      });
    });
  }, []);

  const handleClick = (id) => {
    if (id !== selectedItem + 1) {
      tl.to(".txt", { y: -20, opacity: 0, duration: 0.3, stagger: 0.05 });
      window.setTimeout(() => {
        setSelectedItem(id - 1);
      }, 300);
      tl.to(".txt", { y: 0, opacity: 1, duration: 0.3, stagger: 0.1 });
    }
  };

  return (
    <div className="centerDiv-2">
      <div className="text-desc">
        <p>my projects.</p>
      </div>
      <Ball />
      <motion.div
        ref={carousel}
        className="carousel"
        drag="x"
        dragConstraints={{ right: 200, left: -width }}
        style={{ marginLeft: offsetCarousel }}
      >
        {ProjectsData.map((project, index) => {
          const isSelected = index === selectedItem;
          const isVideoAllowed = index < ProjectsData.length - 3;

          return (
            <motion.div
              ref={(element) => carouselItems.current.push(element)}
              className={`carousel-item ${isSelected ? "selected" : ""}`}
              key={project.id}
              onClick={() => {
                handleClick(project.id);
              }}
            >
              <video
                className={`prjVidContent ${
                  isVideoAllowed && isSelected ? "video-selected" : ""
                }`}
                autoPlay
                loop
                muted
                loading="lazy"
                preload="none"
              >
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img
                className="prjImgContent"
                src={project.imageUrl}
                alt="Project Image"
                loading="lazy"
              />
            </motion.div>
          );
        })}
      </motion.div>
      <div className="project-text">
        <p className="project-type txt">{ProjectsData[selectedItem].type}</p>
        <h2 className="project-title txt">
          {ProjectsData[selectedItem].title}
        </h2>
        <p className="txt">{ProjectsData[selectedItem].description}</p>
      </div>
    </div>
  );
}
