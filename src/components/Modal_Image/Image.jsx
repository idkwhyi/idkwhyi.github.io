import PropTypes from 'prop-types';
import '../../styles/Modal_image/Modal_Image.css'

const Image = ({ src, alt }) => {
    return (
        <div className="images-after-clicked w-full flex justify-center items-center p-3">
            <img
                src={src}
                alt={alt}
                className="images-element object-contain "
            />
        </div>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Image;