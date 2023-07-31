import { Link, NavLink } from 'react-router-dom';
import ShopppingBag from '../shopping-bag/ShopppingBag';
import { useContext, useState } from 'react';
import { ProductAppContext } from '../../context/ProductAppContext';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const { lastProductViewed } = useContext(ProductAppContext);
  const [visible, setVisible] = useState(true);

  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <nav
      className='
      flex flex-wrap
      items-baseline
      justify-between
      w-full
      py-3
      px-4
      bg-zinc-900
      opacity-90  text-white sticky top-0 z-10'
    >
      <div>
        <Link to='/'>MobileXchange</Link>
      </div>

      <button onClick={handleVisible}>
        <GiHamburgerMenu
          className=' top-3
         text-2xl text-gray-500 cursor-pointer md:hidden '
        />
      </button>

      <div
        className={`${
          visible ? 'hidden' : ''
        } w-full md:flex md:items-base md:w-auto gap-7 `}
        id='menu'
      >
        <ul
          className='
        pt-4
        text-base text-gray-500
        flex
        justify-between 
        md:pt-0 
        gap-5'
        >
          <li>
            <NavLink
              to='/products/list'
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'text-blue-700' : ''
              }
            >
              {' '}
              Products
            </NavLink>
          </li>
          <li>
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
          </li>
          <li>
            <ShopppingBag />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
