import { useContext, useEffect, useState } from 'react';
import { ProductAppContext } from '../../context/ProductAppContext';
import { productsApi } from '../../api/products.api';
import { toast } from 'react-toastify';

const useProductForm = ({ product }) => {
  const { handleCart } = useContext(ProductAppContext);

  const [selectedOptions, setSelectedOptions] = useState({
    storage: null,
    color: null,
  });

  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log('selectedOptions', selectedOptions);

    if (!selectedOptions.storage || !selectedOptions.color) {
      toast.error('Please select storage and color', {
        position: 'top-center',
      });
      setLoading(false);
      return;
    }

    try {
      const { data } = await productsApi.post('/cart', {
        id: product.id,
        storageCode: selectedOptions.storage,
        colorCode: selectedOptions.color,
      });
      handleCart(data.count);
      toast.success('Product added to cart', {
        position: 'top-center',
      });
    } catch (error) {
      toast.error('Error adding product to cart', {
        position: 'top-center',
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStorageSelection = (option) => {
    setSelectedOptions({ ...selectedOptions, storage: option });
  };
  const handleColorSelection = (option) => {
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
