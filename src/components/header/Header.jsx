import { Link, NavLink } from 'react-router-dom';
import ShopppingBag from '../shopping-bag/ShopppingBag';
import { useContext } from 'react';
import { ProductAppContext } from '../../context/ProductAppContext';

const Header = () => {
  const { lastProductViewed } = useContext(ProductAppContext);
  return (
    <header className='flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-400 px-6 py-2 text-white text-center fixed w-full z-50  top-0 left-0'>
      <h1 className='text-2xl  m-1'>
        <Link to='/'>MobileXchange</Link>
      </h1>

      <div className='flex justify-between items-baseline gap-5 w-auto'>
        <NavLink
          to='/products/list'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'text-blue-700' : ''
          }
        >
          Products
        </NavLink>
        {lastProductViewed && (
          <NavLink
            to={`/products/product/${lastProductViewed}`}
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'text-blue-500' : ''
            }
          >
            Last Product
          </NavLink>
        )}
        {!lastProductViewed && <p>Last Product</p>}

        <ShopppingBag />
      </div>
    </header>
  );
};
export default Header;
