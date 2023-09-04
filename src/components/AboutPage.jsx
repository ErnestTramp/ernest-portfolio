import "./AboutPage.css";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const addSpan = (note, styles) => {
    return [...note].map((letter) => (
      <span class="letter" style={styles}>
        {letter}
      </span>
    ));
  };

  //  {addSpan("test",{color: 'blue'})} // TODO SPANIFY ALL THE NUMBERS AND ANIMATE THEM

  return (
    <div className="centerDiv-3">
      <div className="aboutText">
        <CountUp
          start={513995}
          end={514000}
          duration={4}
          enableScrollSpy
          scrollSpyDelay={2}
        />
        <CountUp
          start={2999999995}
          end={3000000000}
          duration={4}
          enableScrollSpy
          scrollSpyDelay={2}
        />
        <p>followers : views</p>
      </div>
      <div className="ernestImg" />
    </div>
  );
}
