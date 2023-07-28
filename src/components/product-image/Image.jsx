import PropTypes from 'prop-types';

const Image = ({ url, alt }) => {
  return <img src={url} alt={alt} className='w-full h-auto' />;
};

export default Image;

Image.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
};
