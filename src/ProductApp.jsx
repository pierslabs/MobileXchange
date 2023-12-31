import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function ProductApp() {
  return (
    <div>
      <ToastContainer autoClose={2500} />
      <Header />
      <Outlet />
    </div>
  );
}

export default ProductApp;
