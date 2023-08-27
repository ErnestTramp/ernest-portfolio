import { useEffect, useState } from 'react';
import './ProjectPage.css';
import StarsCanvas from './StarsCanvas';

export default function ProjectPage() {

    const projects = [
        {
            id: 1,
            type: 'Web Development',
            title: 'Project 1',
            description: 'This is the description for Project 1. It involves web development tasks.',
            // ... other properties ...
        },
        {
            id: 2,
            type: 'Mobile App',
            title: 'Project 2',
            description: 'Project 2 is a mobile app development project with unique features.',
            // ... other properties ...
        },
        {
            id: 3,
            type: 'Mobile App',
            title: 'Project 3',
            description: 'Project 2 is a mobile app development project with unique features.',
            // ... other properties ...
        },
        {
            id: 4,
            type: 'Mobile App',
            title: 'Project 4',
            description: 'Project 2 is a mobile app development project with unique features.',
            // ... other properties ...
        },
        {
            id: 5,
            type: 'Mobile App',
            title: 'Project 5',
            description: 'Project 2 is a mobile app development project with unique features.',
            // ... other properties ...
        },
        {
            id: 6,
            type: 'Mobile App',
            title: 'Project 6',
            description: 'Project 2 is a mobile app development project with unique features.',
            // ... other properties ...
        },
    ]

    const [selectedProject, setSelectedProject] = useState(projects[0]); // Initialize with the first project

    useEffect(() => {


        /*--------------------
        Vars
        --------------------*/
        let progress = 50;
        let startX = 0;
        let active = 0;
        let isDown = false;

        /*--------------------
        Constants
        --------------------*/
        const speedWheel = 0.02;
        const speedDrag = -0.1;

        /*--------------------
        Get Z
        --------------------*/
        const getZindex = (array, index) => (
            array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i))
        );

        /*--------------------
        Items
        --------------------*/
        const $items = document.querySelectorAll('.carousel-item');
        const $cursors = document.querySelectorAll('.cursor');

        const displayItems = (item, index, active) => {
            const zIndex = getZindex([...$items], active)[index];
            item.style.setProperty('--zIndex', zIndex);
            item.style.setProperty('--active', (index - active) / $items.length);
        };

        const animation = () => {
            progress = Math.max(0, Math.min(progress, 100));
            active = Math.floor(progress / 100 * ($items.length - 1));

            $items.forEach((item, index) => displayItems(item, index, active));
        };

        /*--------------------
        Handlers
        --------------------*/
        const handleWheel = e => {
            const wheelProgress = e.deltaY * speedWheel;
            progress = progress + (wheelProgress * 2);
            animation();
        };

        const handleMouseMove = (e) => {
            if (e.type === 'mousemove') {
                $cursors.forEach(($cursor) => {
                    $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
                });
            }
            if (!isDown) return;
            const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
            const mouseProgress = (x - startX) * speedDrag;
            progress = progress + mouseProgress;
            animation();
        };

        const handleMouseDown = e => {
            isDown = true;
            startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        };

        const handleMouseUp = () => {
            isDown = false;
        };

        animation();
        /*--------------------
        Click on Items
        --------------------*/
        $items.forEach((item, i) => {
            item.addEventListener('click', () => {
                progress = (i / $items.length) * 100 + 10;
                animation();
                console.log(item[i])
            });
            item.addEventListener("mouseenter", () => {
                const ball = document.querySelector('.ball');
                ball.classList.add("active");
            })
            item.addEventListener("mouseleave", () => {
                const ball = document.querySelector('.ball');
                ball.classList.remove("active");
            })
        });

        document.addEventListener('mousewheel', handleWheel);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchstart', handleMouseDown);
        document.addEventListener('touchmove', handleMouseMove);
        document.addEventListener('touchend', handleMouseUp);

        const ball = document.querySelector('.ball');

        document.addEventListener('mousemove', (e) => {
            const xxx = e.clientX;
            const yyy = e.clientY - 200;
            ball.style.transform = `translate(${xxx}px, ${yyy}px)`;
        });
    }, []);

    return (
        <>
            <div className="centerDiv-2">
                <StarsCanvas />
                <div className="text-desc">
                    <p>MY PROJECTS</p>
                </div>
                <div className="carousel">
                    <div className="ball">
                        <h3>Drag or Click</h3>
                    </div>
                    <div className="carousel-item"></div>
                    <div className="carousel-item"></div>
                    <div className="carousel-item"></div>
                    <div className="carousel-item"></div>
                    <div className="carousel-item"></div>
                    <div className="carousel-item"></div>
                </div>
                <div className="project-text">
                    <p className='project-type'>{selectedProject.type}</p>
                    <h2 className='project-title'>{selectedProject.title}</h2>
                    <p>{selectedProject.description}</p>
                </div>
            </div>
        </>
    );
}
