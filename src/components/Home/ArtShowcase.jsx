//utils
import PropTypes from 'prop-types';
import '../../styles/ArtShowcase.css'

//components
import Modal from '../Modal_Image/ModalImage'
import LinkButton from '../Button/LinkButton';
//showcase images
import un_1 from '../../assets/gallery_images/untitled1.png'
import un_2 from '../../assets/gallery_images/untitled2.png'
import un_3 from '../../assets/gallery_images/untitled3.png'
import un_4 from '../../assets/gallery_images/untitled4.png'
import un_5 from '../../assets/gallery_images/untitled5.png'
import un_6 from '../../assets/gallery_images/untitled6.png'
import un_7 from '../../assets/gallery_images/untitled7.png'
import un_8 from '../../assets/gallery_images/untitled8.png'
import un_9 from '../../assets/gallery_images/untitled9.png'
import un_10 from '../../assets/gallery_images/untitled10.png'

const ArtShowcase = ({ toggleNavButton }) => {
  return (
    <div className="z-0 main-container regular-rocoleta w-screen h-fit flex flex-col items-center gap-5 p-5">

      <div className="first-container gap-10 justify-between items-center">
        {/* <div className="regular-lora text-4xl ">Some of my art ________________________________</div> */}
        <div className="someArt-text">Some of my art </div>
        <div className=' regular-plusJakartaSans w-fit h-fit flex flex-row justify-between items-center'>
          <LinkButton text='More Art' link='gallery' />
        </div>
      </div>

      {/* container for gallery intro */}
      <div className='second-container justify-center items-start p-5'>

        <div className='second-cotainer-first-child gap-16 flex items-center justify-center'>
          <Modal src={un_1} alt='sample' toggleStatus={toggleNavButton} />
          <Modal src={un_2} toggleStatus={toggleNavButton} />
          <Modal src={un_3} alt='sample' toggleStatus={toggleNavButton} />
          <Modal src={un_4} alt='sample' toggleStatus={toggleNavButton} />
          <Modal src={un_5} alt='sample' toggleStatus={toggleNavButton} />
        </div>

        <div className='second-cotainer-second-child gap-16 flex items-center'>
          {/* images row 2 */}
          <Modal src={un_6} alt='sample' toggleStatus={toggleNavButton} />
          <Modal src={un_7} alt='sample' toggleStatus={toggleNavButton} />
          <Modal src={un_8} alt='sample' toggleStatus={toggleNavButton} />
          <Modal src={un_9} alt='sample' toggleStatus={toggleNavButton} />
          <Modal src={un_10} alt='sample' toggleStatus={toggleNavButton} />
        </div>

      </div>

    </div>
  )
}

ArtShowcase.propTypes = {
  toggleNavButton: PropTypes.func.isRequired,

}

export default ArtShowcase;