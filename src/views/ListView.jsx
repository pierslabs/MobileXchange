import { useEffect, useState } from 'react';
import { productsApi } from '../api/products.api';
import ProductItem from '../components/productItem/ProductItem';
import Search from '../components/search/Search';
import EmptyState from '../components/emptystate/EmtyState';

const ListView = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  const filteredProducts = searchText
    ? products.filter((product) => {
        return (
          product.brand.toLowerCase().includes(searchText.toLowerCase()) ||
          product.model.toLowerCase().includes(searchText.toLowerCase())
        );
      })
    : products;

  useEffect(() => {
    productsApi.get('/product').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className='p-3'>
      <Search setSearchText={setSearchText} searchText={searchText} />
      {!filteredProducts.length && <EmptyState message='No hay productos' />}
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListView;
