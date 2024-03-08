// utils
import '../styles/Home/Home.css'
import '../components/Modal_Image/Image'
import { useState } from 'react'

// components
import Navbar from '../components/Navigation/Navbar'
import Header from '../components/Home/Header'
import ArtShowcase from '../components/Home/ArtShowcase'
import Footer from '../components/Home/Footer'

const Home = () => {

  const [navButtonDisplayStatus, setNavButtonDisplayStatus] = useState(true) // true means displayed

  const toggleDisplayButton = (navButtonDisplayStatus) => {
    setNavButtonDisplayStatus(!navButtonDisplayStatus)
  }


  return (
    <div className='w-full h-auto'>
      <Navbar displayButton={navButtonDisplayStatus} />
      <div className="w-full h-fit gap-60 px-5 flex flex-col align-center text-center items-center">
        <Header />
        <ArtShowcase toggleNavButton={toggleDisplayButton}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home