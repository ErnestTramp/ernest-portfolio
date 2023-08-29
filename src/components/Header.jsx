import './Header.css'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Headroom from 'react-headroom';

export default function Header() {
    return (
          <Headroom style={{transition: 'all .5s ease-in-out'}}>
        <header>
          <div className="nav">
            <Link to="projects" spy={true} offset={-30} smooth={true} duration={800} className="elem projects">
              projects.
            </Link>
            <Link to="about" spy={true} smooth={true} duration={800} className="elem about">
              about me.
            </Link>
          <Link to="contact" spy={true} smooth={true} duration={800} className="elem contact">
            get in touch.
          </Link>
          </div>
          <div className="socials">
            <FontAwesomeIcon onClick={() => {window.open("https://instagram.com/ernest.tramp")}} icon={faInstagram} className='instagram icon' size='2xl' />
            <FontAwesomeIcon onClick={() => {window.open("https://tiktok.com/@ernest.tramp")}} icon={faTiktok} className='tiktok icon' size='2xl' />
            <FontAwesomeIcon onClick={() => {window.open("https://youtube.com/@RadialFlipz")}} icon={faYoutube} className='youtube icon' size='2xl' />
          </div>
         
        </header>
          </Headroom>
      );
}