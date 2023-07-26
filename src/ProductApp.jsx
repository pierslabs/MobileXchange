import { Outlet } from 'react-router-dom';
import './App.css';

function ProductApp() {
  return (
    <div className='container mt-3'>
      <h1>
        Products App <small>Seguimiento ......</small>
      </h1>
      <hr />
      <Outlet />
    </div>
  );
}

export default ProductApp;
