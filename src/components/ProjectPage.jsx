import { useEffect, useState } from 'react';
import './ProjectPage.css';
import StarsCanvas from './StarsCanvas';
import throttle from 'lodash/throttle';

export default function ProjectPage() {

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
        const speedDrag = -0.01;

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
            const throttledFunction = throttle(() => {
                const lol2 = findActiveItemId();
            }, 500); 
        };
        
        const animation = () => {
            progress = Math.max(0, Math.min(progress, 100));
            active = Math.floor(progress / 100 * ($items.length - 1));

            $items.forEach((item, index) => displayItems(item, index, active));
        };

        const findActiveItemId = () => {
            for (let i = 0; i < $items.length; i++) {
                const item = $items[i];
                const activeValue = parseFloat(item.style.getPropertyValue('--active'));
                if (activeValue === 0) {
                    return item.id;
                }
            }
            // If no item has an active property of 0, you can return a default value or handle it as needed.
            return null;
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
        const updateBallPosition = throttle((e) => {
            const xxx = e.clientX;
            const yyy = e.clientY - 150;
            ball.style.transform = `translate(${xxx}px, ${yyy}px)`;
        }, 16);
        
        document.addEventListener('mousemove', updateBallPosition);
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
                    <div className="carousel-item" id='1'></div>
                    <div className="carousel-item" id='2'></div>
                    <div className="carousel-item" id='3'></div>
                    <div className="carousel-item" id='4'></div>
                    <div className="carousel-item" id='5'></div>
                    <div className="carousel-item" id='6'></div>
                </div>
                <div className="project-text">
                    <p className='project-type'>selectedProject.type</p>
                    <h2 className='project-title'>selectedProject.title</h2>
                    <p>selectedProject.description</p>
                </div>
            </div>
        </>
    );
}
