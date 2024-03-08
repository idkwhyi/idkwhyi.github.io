// utils
import '../../styles/Navbar/Navbar.css';
import { useState, useEffect } from "react"
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
//components
import NavButton from "./NavButton"
import NavList from "./NavList";

const Navbar = ({ displayButton }) => {

  const [showNavbar, setShowNavbar] = useState(false);
  const [textMouseOver, setTextMouseOver] = useState('');
  const [mount, setMount] = useState(false);
  // const history = useHistory()
  // const [animationStatus, setAnimationStatus] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (showNavbar) {
      html.style.overflowY = 'hidden';
      body.style.overflowY = 'hidden';
    } else {
      html.style.overflowY = '';
      body.style.overflowY = '';
    }

    return () => {
      html.style.overflowY = '';
      body.style.overflowY = '';
    };
  }, [showNavbar]);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    setMount(true);
  }

  const handleListItemClick = (link) => {
    handleShowNavbar();
    history.push(link)
    // console.info("delay start")
    // Delay page change until animation is complete
    // setTimeout(() => {
    //   setAnimationStatus(!animationStatus)
    //   console.info("delay done")
    //   console.info('animation status inside timeout ', animationStatus)
    // }, 700); 
  };

  const handleListHover = (text) => {
    setTextMouseOver(text)
  }

  return (
    <div className={`fixed z-10 `} >

      <NavButton onClick={handleShowNavbar} navStatus={showNavbar} displayStatus={displayButton} />
      <div className={`absolute flex items-center`}>

        {/* navbar black background */}
        <div className={`navBgContainer absolute -rotate-2 ${showNavbar ? 'openNavbar' : 'closeNavbar'} ${textMouseOver || 'bg-custom-black'}`}>
        </div>

        <div className={`navListContainer -rotate-2 absolute left-0 top-0 w-full h-full pt-10 flex-end flex-col list-none`}>

          <NavList className={`${showNavbar ? 'openNavList navListOpenDelay' : (mount ? 'closeNavList navListCloseDelay' : 'defaultListStyle')}`}
            text='Home'
            link='/'
            onClick={() => handleListItemClick('/')}
            onMouseEnter={() => handleListHover('homeBg')}
            onMouseLeave={() => handleListHover('bg-custom-black')}
            // animationStatus={animationStatus}
          />

          <NavList className={`${showNavbar ? 'openNavList navListOpenDelay' : (mount ? 'closeNavList navListCloseDelay' : 'defaultListStyle')}`}
            text='Gallery'
            link={location.pathname === '/' ? '/gallery' : ''}
            onClick={() => handleListItemClick(location.pathname === '/' ? '/gallery' : '')}
            onMouseEnter={() => handleListHover('galleryBg')}
            onMouseLeave={() => handleListHover('bg-custom-black')}
            // animationStatus={animationStatus}
          />

        </div>

      </div>

      {/* handle navbar close if clicked outside the navbar */}
      <div className={`${showNavbar ? '' : 'hidden'} h-screen w-screen`} onClick={handleShowNavbar}></div>

    </div>
  )
}

Navbar.propTypes = {
  displayButton: PropTypes.bool.isRequired,
};

export default Navbar

