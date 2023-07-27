import { useState } from 'react';

import ProductItem from '../components/productItem/ProductItem';
import Search from '../components/search/Search';
import EmptyState from '../components/emptystate/EmtyState';
import useFetch from '../hooks/useFetch';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const ListView = () => {
  const { products, isLoading, error } = useFetch({
    url: '/product',
    label: 'products',
  });
  const [searchText, setSearchText] = useState('');

  const filteredProducts = searchText
    ? products.filter((product) => {
        return (
          product.brand.toLowerCase().includes(searchText.toLowerCase()) ||
          product.model.toLowerCase().includes(searchText.toLowerCase())
        );
      })
    : products;

  return (
    <div className='p-3'>
      <Search setSearchText={setSearchText} searchText={searchText} />
      {isLoading && (
        <AiOutlineLoading3Quarters className='animate-spin  text-blue-500 text-4xl' />
      )}
      {!filteredProducts.length && !isLoading && (
        <EmptyState
          message={`${
            error ? 'Error al cargar los productos' : 'No hay productos'
          }`}
        />
      )}
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListView;
