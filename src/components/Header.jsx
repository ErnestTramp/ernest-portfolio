import './Header.css'
import { Link } from 'react-scroll';

export default function Header() {
    return (
        <header>
          <div className="nav">
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="elem projects">
              projects.
            </Link>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="elem about">
              about me.
            </Link>
          </div>
          <button className="elem contact">get in touch.</button>
        </header>
      );
}