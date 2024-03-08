//utils
import '../../styles/Header.css'
//components
import headerImage1 from '../../assets/gallery_images/blueFlower.jpg'
import headerImage2 from '../../assets/gallery_images/nice.png'

const Header = () => {
  return (
    <div className="w-screen h-fit p-5 gap-5 flex flex-wrap items-center  regular-rocoleta">
      <div className='inner-container gap-5 w-full h-full flex flex-wrap items-center'>

        <div className="child1 bento-border-transparent p-5">
          <div className="h4 w-full text-left">My</div>
          <div className="h2 w-full text-left">Personal Art</div>
          <div className="h2 w-full text-right">Gallery</div>
        </div>

        <div className="child2 bg-secondHeader bento-border-transparent p-5 flex flex-col items-center text-left gap-5">
          <div className="h1 w-full">Talitha Christabella Susanto</div>
          <div className="desc regular-plusJakartaSans w-full">Just an ordinary high school student who focuses on art
          </div>
        </div>

        <div className="child3 bg-gray bento-border-transparent p-7">
          <img src={headerImage1} alt="header image" className='w-full h-full object-cover rounded-lg' />
        </div>

        <div className="child4 p-7 bg-thirdHeader bento-border-transparent">

          <div className="child4-img h-full flex items-center">
            <img src={headerImage2} alt="header image 2" className='w-full h-full object-contain rounded-lg' />
          </div>

          <div className="child4-text regular-plusJakartaSans flex  h-full">
              Crafting digital dreams into tangible realities. Explore my creations and let`s spark some inspiration together.
          </div>

        </div>
      </div>


    </div>
  )
}

export default Header;