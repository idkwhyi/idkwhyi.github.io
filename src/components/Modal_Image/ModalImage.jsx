import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from './Image';
import '../../styles/Modal_image/Modal_Image.css'
import closeIcon from '../../assets/images/closeIcon.png'

const ModalImage = ({ src, alt, className, toggleStatus }) => {

  const [openStatus, setOpenStatus] = useState(false);

  const openModal = () => {
    setOpenStatus(prevStatus => !prevStatus);
    toggleStatus(!openStatus)
  }

  const closeModal = () => {
    setOpenStatus(prevStatus => !prevStatus);
    toggleStatus(!openStatus)
  }

  const closeModalbyContainer = (event) => {
    const modalContainer = document.getElementById('modalContainer');
    event.target == modalContainer && closeModal();
    console.info("container clicked")
  }

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (openStatus) {
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
  }, [openStatus]);


  return (
    <div>
      <img className={`images bg-black shadow-xl w-full object-cover transition duration-100 ease-in hover:shadow-2xl ${className}`} src={src} alt={alt}
        onClick={openModal}
      />

      {
        openStatus &&
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          id='modalContainer'
          onClick={closeModalbyContainer}
        >
          <button
            className="closeButton absolute top-0 right-0 w-12 h-12 text-center items-center flex justify-center bg-white border border-black rounded-full shadow-sm"
            onClick={closeModal}
          >
            <img className='w-3.5 h-3.5' src={closeIcon} alt='close icon'/>
          </button>
          <Modal src={src} alt={alt} />
        </div>
      }

    </div>
  );
};


ModalImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  toggleStatus: PropTypes.func,
};

export default ModalImage;
