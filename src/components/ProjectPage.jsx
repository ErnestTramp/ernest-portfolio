import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './ProjectPage.css';
import ProjectsData from '../assets/Projects';
import { gsap } from 'gsap';

export default function ProjectPage() {
    const tl = gsap.timeline();
    const [width, setWidth] = useState(0);
    const [selectedItem, setSelectedItem] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    const handleClick = (id) => {
        if (id !== selectedItem + 1) { 
            tl.to(".txt", { y: -20, opacity: 0, duration: 0.3, stagger: 0.05 });
            window.setTimeout(() => {
                setSelectedItem(id - 1);
            }, 300);
            tl.to(".txt", { y: 0, opacity: 1, duration: 0.3, stagger: 0.1 });
        }
    }
    

    return (
        <div className="centerDiv-2">
            <div className="text-desc">
                <p>my projects.</p>
            </div>
            <motion.div
                ref={carousel}
                className='carousel'
                drag="x"
                dragConstraints={{ right: 100, left: -width }}
            >
                {ProjectsData.map((project, index) => {
                    return (
                        <motion.div id={project.id} className="carousel-item" key={project.id} onClick={() => {handleClick(project.id)}}>
                            <img src={project.imageUrl} alt="Project Image" loading='lazy' />
                        </motion.div>
                    )
                })}
            </motion.div>
            <div className="project-text">
                <p className='project-type txt'>{ProjectsData[selectedItem].type}</p>
                <h2 className='project-title txt'>{ProjectsData[selectedItem].title}</h2>
                <p className='txt'>{ProjectsData[selectedItem].description}</p>
            </div>
        </div>
    );
}
