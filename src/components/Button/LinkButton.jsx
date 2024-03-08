import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import '../../styles/Button/LinkButton.scss';

const LinkButton = ({ link, text }) => {
  return (
    <div className="button-container-1 text-xl">
      <span className="regular-plusJakartaSans mas">{text}</span>
      <button id='work' className="regular-plusJakartaSans" type="button" name="Hover">
        <Link to={link}>{text}</Link>
      </button>
    </div>
  )
}

LinkButton.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default LinkButton