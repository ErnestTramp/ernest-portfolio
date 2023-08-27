import { useEffect } from 'react';
import './ProjectPage.css';
import StarsCanvas from './StarsCanvas';

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
            console.log(progress)
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
            startX = x;
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

        document.addEventListener('mousemove', (e) => {
        const xxx = e.clientX;
        const yyy = e.clientY + 15;

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
            </div>
        </>
    );
}
