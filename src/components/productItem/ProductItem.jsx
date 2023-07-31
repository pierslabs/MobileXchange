import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/price.utils';
import { useContext } from 'react';
import { ProductAppContext } from '../../context/ProductAppContext';

const ProductItem = ({ product }) => {
  const { handleProductViewed } = useContext(ProductAppContext);
  const price = product.price * 1.2;
  return (
    <Link
      to={`/products/product/${product.id}`}
      className='items-center border p-4 shadow-lg rounded-lg transition-transform  hover:scale-105 card overflow-hidden'
      onClick={() => handleProductViewed(product.id)}
    >
      <div className='flex justify-between items-center mb-3'>
        <h3 className='sm:text-2xl  text-gray-700 sm:-rotate-45 text-center underline'>
          {product.brand}
        </h3>
        <p className='p-1 text-sm sm:text-lg bg-yellow-400 transform -skew-x-12'>
          <span className=' line-through text-red-600  sm:mr-2'>
            {formatPrice(price)}
          </span>
        </p>
      </div>
      {!price && (
        <div className='relative text-gray-900 text-center w-full '>
          <p className=' absolute top-20 left-[10%] right-[10%] font-semibold text-xl'>
            Producto no disponible
          </p>
        </div>
      )}
      <img
        src={product.imgUrl}
        alt={product.model}
        loading='lazy'
        className={`mx-auto w-auto h-auto ${!price && 'opacity-30'} `}
      />
      <div className='sm:flex text-center text-sm items-center justify-between mt-10 flex-wrap w-full'>
        <h3 className='sm:text-xl '>{product.model}</h3>
        <p className='text-2xl text-orange-500 mt-2'>
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};
