import "./AboutPage.css";
import CountUp from "react-countup";
import AboutPicture from "./AboutPicture";

export default function AboutPage() {
  return (
    <div className="centerDiv-3">
      <div className="aboutText">
        <h1>
          I am on a mission to push the human{" "}
          <span style={{ color: "#AF125A", cursor: "pointer" }}>body</span> and{" "}
          <span style={{ color: "#87F1FF" }}>mind</span>.
        </h1>
        <div className="counters">
          <div className="counter records">
            <CountUp
              className="count"
              start={0}
              end={5}
              duration={2}
              enableScrollSpy
              delay={1}
            />
            <h3>records</h3>
          </div>
          <div className="counter followers">
            <CountUp
              className="count"
              start={510000}
              end={518000}
              suffix="+"
              duration={2}
              enableScrollSpy
              delay={1}
            />
            <h3>followers</h3>
          </div>
          <div className="counter views">
            <CountUp
              className="count"
              start={0}
              end={4}
              suffix="b+"
              duration={4}
              enableScrollSpy
              delay={1}
            />
            <h3>views</h3>
          </div>
        </div>
      </div>
      <div className="ernestImg">{/* <AboutPicture /> */}</div>
    </div>
  );
}
