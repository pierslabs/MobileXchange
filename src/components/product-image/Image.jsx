import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
const Image = ({ url, alt }) => {
  const [imgClicked, setImgClicked] = useState(false);

  console.log(imgClicked);
  return (
    <div className='relative'>
      {imgClicked && (
        <div className='fixed top-0 left-0 w-full h-full backdrop-filter backdrop-blur-lg flex items-center justify-center z-20'>
          <div className='bg-white p-2  flex flex-col border  rounded-s-lg border-orange-400 sm:w-1/3 '>
            <button
              className=' top-2 right-2  rounded  mb-2 ml-auto hover:bg-orange-500'
              onClick={() => setImgClicked(false)}
            >
              <AiOutlineClose className='text-2xl' />
            </button>
            <img src={url} alt={alt} className=' rounded-s-xl' />
          </div>
        </div>
      )}

      <img
        src={url}
        alt={alt}
        className='w-full h-auto cursor-pointer'
        onClick={() => setImgClicked(true)}
      />
    </div>
  );
};

export default Image;

Image.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
};
