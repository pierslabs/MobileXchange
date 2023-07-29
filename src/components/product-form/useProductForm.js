import { useEffect, useState } from 'react';
import { productsApi } from '../../api/products.api';
import { toast } from 'react-toastify';

const useProductForm = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    storage: null,
    color: null,
  });

  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log('selectedOptions', selectedOptions);

    try {
      const { data } = await productsApi.post('/cart', {
        id: product.id,
        storageCode: selectedOptions.storage,
        colorCode: selectedOptions.color,
      });
      toast.success('Product added to cart');
    } catch (error) {
      toast.error('Error adding product to cart');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStorageSelection = (option) => {
    console.log('handleStorageSelection');
    setSelectedOptions({ ...selectedOptions, storage: option });
  };
  const handleColorSelection = (option) => {
    console.log('handleColorSelection');
    setSelectedOptions({ ...selectedOptions, color: option });
  };

  useEffect(() => {
    if (product.internalMemory.length === 1) {
      setSelectedOptions((prevSelected) => ({
        ...prevSelected,
        storage: product.internalMemory[0],
      }));
    }

    if (product.colors.length === 1) {
      setSelectedOptions((prevSelected) => ({
        ...prevSelected,
        color: product.colors[0],
      }));
    }
  }, [product, loading]);
  return {
    selectedOptions,
    handleAddToCart,
    handleStorageSelection,
    handleColorSelection,
    loading,
  };
};

export default useProductForm;
