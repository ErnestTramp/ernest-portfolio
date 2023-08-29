import { gsap } from "gsap";

export default function AnimateLoad() {

    gsap.from(".intro-text", {
        opacity: 0,
        scale: 0,
        y: 10,
        letterSpacing: 10,
        duration: .75,
        ease: "back.out(1.9)",
        delay: .3,
        onComplete: () => {
          gsap.to(".intro-text", {
            opacity: 0,
            scale: 0,
            y: 10,
            letterSpacing: 10,
            duration: .3,
            ease: "back.in(1.9)",
          });
        },
      });

        gsap.from(".elem", {y: 50, opacity: 0, duration: .55, stagger: .25, delay: 1.5, ease: "back.out(1.9)"});
        gsap.from(".icon", {y: -50, opacity: 0, duration: .45, stagger: .25, delay: 1.58, ease: "back.out(1.9)"});
        gsap.from(".letter", {translateX: 200, opacity: 0, duration: .65, stagger: .05, delay: 1.3, ease: "back.out(1.9)"});
        gsap.from(".video", { scale: 0, opacity: 0, duration: .55, delay: 1.55})
        gsap.from(".arrow-container", { scale: 0, opacity: 0, duration: .45, delay: 1.75})
        gsap.from(".orbs", { scale: 0, opacity: 0, duration: 1, delay: 1.85})
        return null;

    
}