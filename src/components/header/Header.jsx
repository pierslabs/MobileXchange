import { Link } from 'react-router-dom';
import ShopppingBag from '../shopping-bag/ShopppingBag';

const Header = () => {
  return (
    <header className='flex justify-between  bg-gradient-to-r from-blue-500 to-purple-400 p-2 text-white text-center'>
      <h1 className='text-2xl  m-1'>
        <Link to='/'>MobileXchange</Link>
      </h1>
      <ShopppingBag />
    </header>
  );
};
export default Header;
