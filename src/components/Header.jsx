import './Header.css'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
    return (
        <header>
          <div className="nav">
            <Link to="projects" spy={true} offset={-30} smooth={true} duration={800} className="elem projects">
              projects.
            </Link>
            <Link to="about" spy={true} smooth={true} duration={800} className="elem about">
              about me.
            </Link>
          <a className="elem contact">get in touch.</a>
          </div>
          <div className="socials">
            <FontAwesomeIcon icon={faInstagram} className='instagram' size='2xl' />
            <FontAwesomeIcon icon={faTiktok} className='tiktok' size='2xl' />
            <FontAwesomeIcon icon={faYoutube} className='youtube' size='2xl' />
          </div>
        </header>
      );
}