import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './ProjectPage.css';
import StarsCanvas from './StarsCanvas';
import Projects from '../assets/Projects';

export default function ProjectPage() {
    const [width, setWidth] = useState(0);
    const [selectedItem, setSelectedItem] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    const handleClick = (id) => {
        setSelectedItem(id);
        console.log(selectedItem);
    }

    return (
        <div className="centerDiv-2">
            <StarsCanvas />
            <div className="text-desc">
                <p>MY PROJECTS</p>
            </div>
            <motion.div
                ref={carousel}
                className='carousel'
                drag="x"
                dragConstraints={{ right: 100, left: -width }}
            >
                {Projects.map((project, index) => {
                    return (
                        <motion.div className="carousel-item" key={project.id} onClick={() => {handleClick(project.id)}}>
                            <h1>{project.title}</h1>
                        </motion.div>
                    )
                })}
            </motion.div>
            <div className="project-text">
                <p className='project-type'>1</p>
                <h2 className='project-title'>2</h2>
                <p>3</p>
            </div>
        </div>
    );
}
