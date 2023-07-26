import { BiShoppingBag } from 'react-icons/bi';

const ShopppingBag = () => {
  const itemCount = 10;

  return (
    <div className='relative m-2'>
      <BiShoppingBag className='text-2xl' />
      {itemCount > 0 && (
        <div className='w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs absolute -top-2 -right-2'>
          {itemCount}
        </div>
      )}
    </div>
  );
};

export default ShopppingBag;
