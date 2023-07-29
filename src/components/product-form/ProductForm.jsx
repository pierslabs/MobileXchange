import PropTypes from 'prop-types';

import useProductForm from './useProductForm';

const ProductForm = ({ product }) => {
  const {
    handleAddToCart,
    selectedOptions,
    handleColorSelection,
    handleStorageSelection,
    loading,
  } = useProductForm({ product });
  return (
    <form onSubmit={handleAddToCart} className='flex flex-col mt-8 gap-5'>
      <div>
        <label className='text-xl'>Ram:</label>
        <div className='flex justify-start mt-2 gap-2'>
          {product.internalMemory.map((option) => (
            <button
              key={option}
              type='button'
              className={`border p-2 transition-all duration-150 ${
                selectedOptions.storage === option
                  ? 'bg-orange-400 text-white'
                  : ''
              }`}
              onClick={() => handleStorageSelection(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className='text-xl'>Color:</label>
        <div className='flex justify-start mt-2 gap-2'>
          {product.colors.map((option) => (
            <button
              type='button'
              key={option}
              className={`border p-2 transition-all duration-150 ${
                selectedOptions.color === option
                  ? 'bg-orange-400 text-white'
                  : ''
              }`}
              onClick={() => handleColorSelection(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <button
        className={`mt-4 bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded transition-all duration-150 ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        type='submit'
        disabled={loading}
      >
        Add to Cart
      </button>
    </form>
  );
};

export default ProductForm;

ProductForm.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    internalMemory: PropTypes.arrayOf(PropTypes.string),
    colors: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
