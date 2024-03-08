//utils
import { useState } from 'react'
import '../styles/Gallery/Gallery.css'
//components
import Navbar from "../components/Navigation/Navbar"
import Modal from "../components/Modal_Image/ModalImage"
import Footer from "../components/Home/Footer"

//images
import fourArm from '../assets/gallery_images/4arm.jpg'
import adam from '../assets/gallery_images/adam.webp'
import apple from '../../src/assets/gallery_images/apple.png'
import bear from '../../src/assets/gallery_images/bear.jpg'
import blackDragon from '../assets/gallery_images/blackMountainDragon.jpg'
import blueFlower from '../assets/gallery_images/blueFlower.jpg'
import zebra from '../assets/gallery_images/boluKeju.jpg'
import cameraGuy from '../assets/gallery_images/cameraGuyClose.jpg'
import canvas from '../assets/gallery_images/canvas.jpg'
import cherry from '../assets/gallery_images/cherry.png'
import dwarf from '../../src/assets/gallery_images/dwarf.jpg'
import eyeTable from '../../src/assets/gallery_images/eyeTable.jpg'
import glass from '../../src/assets/gallery_images/glass.png'
import hand from '../../src/assets/gallery_images/hand.jpg'
import idk from '../../src/assets/gallery_images/idk2.jpg'
import sit from '../../src/assets/gallery_images/imSit2.jpg'
import man from '../../src/assets/gallery_images/man.jpg'
import nice from '../../src/assets/gallery_images/nice.png'
import phone from '../../src/assets/gallery_images/phone.png'
import secondPhone from '../../src/assets/gallery_images/phone2.png'
import thirdPhone from '../../src/assets/gallery_images/phone3.png'
import fourthPhone from '../../src/assets/gallery_images/phone4.png'
import fifthPhone from '../../src/assets/gallery_images/phone5.png'
import sixthPhone from '../../src/assets/gallery_images/phone6.png'
import seventhPhone from '../../src/assets/gallery_images/phone7.jpg'
import eightPhone from '../../src/assets/gallery_images/phone8.png'
import ninthPhone from '../../src/assets/gallery_images/phone9.png'
import tenthPhone from '../../src/assets/gallery_images/phone10.png'
import pixel from '../../src/assets/gallery_images/pixel.jpg'
import poster from '../../src/assets/gallery_images/poster.png'
import sky from '../../src/assets/gallery_images/sky.png'
import wine from '../../src/assets/gallery_images/wineGlass2.jpg'
import un_1 from '../assets/gallery_images/untitled1.png'
import un_2 from '../assets/gallery_images/untitled2.png'
import un_3 from '../assets/gallery_images/untitled3.png'
import un_4 from '../assets/gallery_images/untitled4.png'
import un_5 from '../assets/gallery_images/untitled5.png'
import un_6 from '../assets/gallery_images/untitled6.png'
import un_7 from '../assets/gallery_images/untitled7.png'
import un_8 from '../assets/gallery_images/untitled8.png'
import un_9 from '../assets/gallery_images/untitled9.png'
import un_10 from '../assets/gallery_images/untitled10.png'
import un_11 from '../assets/gallery_images/untitled11.png'


const About = () => {

  const [navButtonDisplayStatus, setNavButtonDisplayStatus] = useState(true)
  const toggleNavButton = (navButtonDisplayStatus) => {
    setNavButtonDisplayStatus(!navButtonDisplayStatus)
  }

  return (
    <div className='w-screen h-fit flex flex-col'>
      <Navbar displayButton={navButtonDisplayStatus} />
      <div className="art-container p-5 bg-white text-5xl">
        {/* column 1 */}
        <div className="inner-art-container h-fit p-5 gap-10">
          {/* <Modal src='' alt='sample' className="" toggleStatus={toggleNavButton}/> */}
          <Modal src={fourArm} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={bear} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={blueFlower} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={cameraGuy} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={cherry} alt='sample' className="" toggleStatus={toggleNavButton} />
          {/* <Modal src={eyeClose} alt='sample' className="" toggleStatus={toggleNavButton} /> */}
          <Modal src={un_2} toggleStatus={toggleNavButton} />
          <Modal src={glass} alt='sample' className="" toggleStatus={toggleNavButton} />
          {/* <Modal src={handSecond} alt='sample' className="" toggleStatus={toggleNavButton} /> */}
          <Modal src={sit} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={un_3} alt='sample' toggleStatus={toggleNavButton} />
          <Modal src={un_4} alt='sample' toggleStatus={toggleNavButton} />
          <Modal src={nice} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={secondPhone} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={fourthPhone} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={man} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={un_1} alt='sample' toggleStatus={toggleNavButton} />
        </div>
        {/* column 2 */}
        <div className="inner-art-container h-fit p-5 gap-10">
          {/* <Modal src={fourHand} alt='sample' className="" toggleStatus={toggleNavButton} /> */}
          <Modal src={blackDragon} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={apple} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={zebra} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={canvas} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={un_5} alt='sample' toggleStatus={toggleNavButton} />
          <Modal src={dwarf} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={eyeTable} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={hand} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={idk} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={phone} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={thirdPhone} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={un_6} alt='sample' toggleStatus={toggleNavButton} />
          <Modal src={un_7} alt='sample' toggleStatus={toggleNavButton} />
          <Modal src={un_8} alt='sample' toggleStatus={toggleNavButton} />
          <Modal src={poster} alt='sample' className="" toggleStatus={toggleNavButton} />
        </div>

        {/* column 3 */}
        <div className="inner-art-container h-fit p-5 gap-10 ">
          <Modal src={adam} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={seventhPhone} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={ninthPhone} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={fifthPhone} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={wine} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={tenthPhone} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={un_9} alt='sample' toggleStatus={toggleNavButton} />
          <Modal src={pixel} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={un_10} alt='sample' toggleStatus={toggleNavButton} />
          <Modal src={sky} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={eightPhone} alt='sample' className="" toggleStatus={toggleNavButton} />
          <Modal src={un_11} alt='sample' toggleStatus={toggleNavButton} />
          <Modal src={sixthPhone} alt='sample' className="" toggleStatus={toggleNavButton} />
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default About