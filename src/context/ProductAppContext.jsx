import PropTypes from 'prop-types';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const ProductAppContext = createContext(null);

const ProductAppProvider = ({ children }) => {
  const initialCartValue = parseInt(localStorage.getItem('cart')) || 0;
  const [cartProducts, setCartProducts] = useState(initialCartValue);
  const [lastProductViewed, setLastProductViewed] = useState(null);

  const handleCart = useCallback((product) => {
    setCartProducts((prevCart) => {
      return (prevCart += product);
    });
  }, []);

  const handleProductViewed = useCallback((productId) => {
    setLastProductViewed(productId);
  }, []);

  const values = useMemo(() => {
    return {
      cartProducts,
      handleCart,
      handleProductViewed,
      lastProductViewed,
    };
  }, [cartProducts, handleCart, handleProductViewed, lastProductViewed]);

  useEffect(() => {
    localStorage.setItem('cart', cartProducts.toString());
  }, [cartProducts]);

  return (
    <ProductAppContext.Provider value={values}>
      {children}
    </ProductAppContext.Provider>
  );
};

export default ProductAppProvider;

ProductAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
