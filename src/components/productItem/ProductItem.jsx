import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <Link
      to={`/products/product/${product.id}`}
      className='flex flex-col justify-center items-center bg-white p-4 shadow-md rounded-lg transition-transform transform-gpu hover:scale-105 '
    >
      <img src={product.imgUrl} alt={product.model} />
      <h3 className='text-lg font-semibold'>{product.brand}</h3>
      <p className='text-gray-600'>{product.model}</p>
      <p className='text-gray-600'>{product.price}</p>
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
