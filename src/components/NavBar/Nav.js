import { useState, useEffect } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/get_reducer';

export default function Nav(props) {
  const [userNav, setUserNav] = useState('header');
  const [logo, setLogo] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', fireOnScroll, true);
  }, []);

  const fireOnScroll = () => {
    var value = document.documentElement.scrollTop;

    if (userNav === 'header' && value > 140) {
      setUserNav('scrolled');
    } else if (value <= 140) {
      setUserNav('header');
    }
  };

  return (
    <header className={userNav}>
      <nav className='navigation-bar'>
        {props.sportsInfo && props.sportsInfo.auth_id ? (
          <>
            <img alt='Play It Forward Logo' src={''} className='piflogo' />
            <ul className='unorderedNavList'>
              <Link to='/' className='navlink'>
                <li id='navigationlinks'>HOME</li>
              </Link>
              <Link to='/about' className='navlink'>
                <li id='navigationlinks'>ABOUT</li>
              </Link>
              <Link to='/donate' className='navlink'>
                <li id='navigationlinks'>DONATE</li>
              </Link>
              <Link to='/player' className='navlink'>
                <li id='navigationlinks'>PROFILE</li>
              </Link>
              <Link to='/team' className='navlink'>
                <li id='navigationlinks'>TEAM</li>
              </Link>
              <Link to='/league' className='navlink'>
                <li id='navigationlinks'>LEAGUE</li>
              </Link>
              <Link to='/logout' className='navlink'>
                <li id='navigationlinks'>LOGOUT</li>
              </Link>
            </ul>
          </>
        ) : (
          <>
            <img alt='Play It Forward Logo' src={''} className='piflogo' />
            <ul className='unorderedNavList'>
              <Link to='/' className='navlink'>
                <li id='navigationlinks'>HOME</li>
              </Link>
              <Link to='/about' className='navlink'>
                <li id='navigationlinks'>ABOUT</li>
              </Link>
              <Link to='/donate' className='navlink'>
                <li id='navigationlinks'>DONATE</li>
              </Link>
              {/* <a href={process.env.REACT_APP_LOGIN} className="navlink"> */}
              <li id='navigationlinks'>LOGIN</li>
              {/* </a> */}
              <Link to='/registration' className='navlink'>
                <li id='navigationlinks'>REGISTER</li>
              </Link>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
}
