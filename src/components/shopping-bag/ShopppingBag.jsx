import { useContext } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { ProductAppContext } from '../../context/ProductAppContext';

const ShopppingBag = () => {
  const { cartProducts } = useContext(ProductAppContext);

  return (
    <div className='relative m-2'>
      <BiShoppingBag className='text-2xl' />
      {cartProducts > 0 && (
        <div className='w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs absolute -top-2 -right-2'>
          {cartProducts}
        </div>
      )}
    </div>
  );
};

export default ShopppingBag;
