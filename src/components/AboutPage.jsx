import './AboutPage.css';
import CountUp from 'react-countup';

export default function AboutPage() {
    return (
        <div className="centerDiv-3">
            <div className="aboutText">
                <h1>I am on a mission to push the human <span style={{ color: '#AF125A', cursor: 'pointer' }}>body</span> and <span style={{ color: '#87F1FF'}}>mind</span></h1>
                <div className="counters">
                    <div className="counter records">
                        <CountUp className='count' start={0} end={5} duration={2} enableScrollSpy />
                        <h3>records</h3>
                    </div>
                    <div className="counter followers">
                        <CountUp className='count' start={499970} end={500000} duration={2} enableScrollSpy delay={1} />
                        <h3>followers</h3>
                    </div>
                    <div className="counter views">
                        <CountUp className='count' start={3999999970} end={4000000000} duration={2} enableScrollSpy delay={2}  />
                        <h3>views</h3>
                    </div>
                </div>
            </div>
            <img className='ernestImg' src="/option3.jpg" alt="Ernest Brenchley" />
        </div>
    )
}