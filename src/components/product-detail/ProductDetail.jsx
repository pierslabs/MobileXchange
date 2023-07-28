import PropTypes from 'prop-types';
import EmptyState from '../emptystate/EmtyState';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import useProductDetail from './useProductDetail';
import { formatPrice } from '../../utils/price.utils';

const ProductDetail = ({ product }) => {
  const { transformProduct, price, randomReviews } = useProductDetail({
    product,
  });

  return (
    <div className='border p-4 shadow-xl'>
      <div className=' border-b-2 p-2 text-gray-700'>
        <div className='flex justify-between items-stretch text-xl border-b-2 p-2'>
          <h3>{transformProduct.brand}</h3>
          <h3>{transformProduct.model}</h3>
          <h3>{transformProduct.ram}</h3>
        </div>

        <div className='flex  items-center justify-between mt-5 '>
          <p className='text-4xl text-orange-500 bold '>
            {formatPrice(transformProduct.price)}
            <span className='text-xs ml-2'> IVA incluido</span>
          </p>
          <p className=' p-1 bg-yellow-400 transform -skew-x-12'>
            <span className='text-xl line-through text-red-600  mr-2'>
              {formatPrice(price)}
            </span>
          </p>
        </div>
        <div className='flex mt-6 items-center  '>
          <AiTwotoneStar size={17} color='orange' />
          <AiTwotoneStar size={17} color='orange' />
          <AiTwotoneStar size={17} color='orange' />
          <AiTwotoneStar size={17} color='orange' />
          <AiOutlineStar size={17} color='orange' />
          <p className='ml-3'>({randomReviews}) Reviews</p>
        </div>
      </div>

      <ul key={transformProduct.id} className='mb-6 mt-8'>
        {!transformProduct.price ? (
          <EmptyState message='Producto no disponible' />
        ) : (
          Object.keys(transformProduct).map((key) => {
            return (
              <li key={key} className='m-2'>
                <strong>{key}:</strong> {product[key] || 'N/A'}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default ProductDetail;

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    brand: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.string,
    cpu: PropTypes.string,
    ram: PropTypes.string,
    os: PropTypes.string || PropTypes.arrayOf(PropTypes.string),
    displayResolution: PropTypes.string,
    battery: PropTypes.string,
    primaryCamera: PropTypes.string || PropTypes.arrayOf(PropTypes.string),
    dimentions: PropTypes.string,
    weight: PropTypes.string,
  }).isRequired,
};
