import PropTypes from 'prop-types';

const ProductDetail = ({ product }) => {
  const transformProduct = {
    brand: product.brand,
    model: product.model,
    price: product.price,
    cpu: product.cpu,
    ram: product.ram,
    os: product.os,
    displayResolution: product.displayResolution,
    battery: product.battery,
    primaryCamera: product.primaryCamera,
    dimentions: product.dimentions,
    weight: product.weight,
  };

  return (
    <div>
      <ul key={product.id} className='mb-6'>
        {Object.keys(transformProduct).map((key) => {
          return (
            <li key={key}>
              <strong>{key}:</strong> {product[key] || 'N/A'}
            </li>
          );
        })}
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
    os: PropTypes.string,
    displayResolution: PropTypes.string,
    battery: PropTypes.string,
    primaryCamera: PropTypes.string,
    dimentions: PropTypes.string,
    weight: PropTypes.string,
  }).isRequired,
};
