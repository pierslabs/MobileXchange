import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

function ProductApp() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default ProductApp;
