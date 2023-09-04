import "./AboutPage.css";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [followers, setFollowers] = useState(1312499);
  const [oldFollowers, setOldFollowers] = useState(1300000);

  useEffect(() => {
    const getRandomInterval = () => {
      return Math.floor(Math.random() * (4000 - 1500 + 1)) + 1500; // Random interval between 1500 and 4000 milliseconds
    };

    const interval = setInterval(() => {
      const randomChange = Math.random() < 0.5 ? -3 : 4; // Randomly +4 or -3
      setOldFollowers(followers);
      setFollowers((prevFollowers) => prevFollowers + randomChange);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="centerDiv-3">
      <div className="aboutText">
        <CountUp
          start={513995}
          end={514000}
          duration={4}
          enableScrollSpy
          scrollSpyDelay={2}
          suffix="+"
        />
        <CountUp
          start={2999999995}
          end={3000000000}
          duration={4}
          enableScrollSpy
          scrollSpyDelay={2}
          suffix="+"
        />
        <p>followers : views</p>
      </div>
      <div className="ernestImg" />
    </div>
  );
}
