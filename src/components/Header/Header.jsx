/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from "react";
import "./Header.scss";
import HeaderIcon from '../../assets/baseline_menu_white_18dp.png';
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";


export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 100vw)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <h3 className="navbar-heading">
          <Link 
            to={"/"}
            style={{ textDecoration: 'none' }}
          >
            Medium Clap
          </Link>
        </h3>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <Link 
            to={"/"}
            style={{ textDecoration: 'none' }}
            onClick={toggleNav}
          >
            Custom Hooks Page
          </Link>
          <Link 
            to={"/compound-component"}
            style={{ textDecoration: 'none' }}
            onClick={toggleNav}
          >
            Compound Component Page
          </Link>
          <Link 
            to={"/styles-prop"}
            style={{ textDecoration: 'none' }}
            onClick={toggleNav}
          >
            Styles Prop Page
          </Link>
          <Link 
            to={"/control-props"}
            style={{ textDecoration: 'none' }}
            onClick={toggleNav}
          >
            Control Props Page
          </Link>
          <Link 
            to={"/foundation-hooks"}
            style={{ textDecoration: 'none' }}
            onClick={toggleNav}
          >
            Foundation Hooks Page
          </Link>
          <Link 
            to={"/props-collection"}
            style={{ textDecoration: 'none' }}
            onClick={toggleNav}
          >
            Props Collection Page
          </Link>
          <Link 
            to={"/props-getter"}
            style={{ textDecoration: 'none' }}
            onClick={toggleNav}
          >
            Props Getter Page
          </Link>
          <Link 
            to={"/state-initializer"}
            style={{ textDecoration: 'none' }}
            onClick={toggleNav}
          >
            State Initializer Page
          </Link>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="header-button">
        <img 
            src={HeaderIcon} 
            alt="HeaderIcon"
        />
      </button>
    </header>
  );
}