import { useEffect, useRef } from "react";

export default function Ball() {
  const ball = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ball.current.throttleTimer) {
        ball.current.throttleTimer = setTimeout(() => {
          const x = e.clientX - 700;
          const y = e.clientY - 880;
          ball.current.style.transform = `translate(${x}px, ${y}px)`;
          ball.current.throttleTimer = null;
        }, 10);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="ball" ref={ball}>
    <h3>Click or Drag</h3>
  </div>;
}
