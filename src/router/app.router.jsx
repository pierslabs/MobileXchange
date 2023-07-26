import ProductApp from '../ProductApp';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import ListView from '../products/views/ListView';
import ProductView from '../products/views/ProductView';

export const router = createBrowserRouter([
  {
    path: '/products',
    element: <ProductApp />,
    children: [
      { path: 'list', element: <ListView /> },
      { path: 'product/:id', element: <ProductView /> },
      { path: '*', element: <Navigate to='list' /> },
    ],
  },
  {
    path: '/',
    element: <Navigate to='products/list' />,
  },
  {
    path: '*',
    element: <h1>Not found</h1>,
  },
]);
