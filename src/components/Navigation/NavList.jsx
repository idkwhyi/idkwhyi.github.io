//utils
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/Navbar/Navbar.css'
//components


const NavList = ({ className, text, link, onClick, onMouseEnter, onMouseLeave }) => {

  return (
    <div className={`w-fit h-fit text-white hover:text-black ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave} >
      <li className='navListHover listFontSize w-full h-full gap-0 regular-plusJakartaSans'>
        {/* <img className='w-10 h-10 transition-opacity duration-200 ease-in-out' src={normalArrow} alt='arrowIcon' /> */}
          <Link
            className=" w-full h-full font-bold hover:text-black"
            onClick={onClick}
            to={link}
          >{text}</Link>
      </li>
    </div>
  )
}

NavList.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  animationStatus: PropTypes.bool,
}

export default NavList;