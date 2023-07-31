/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import ProductItem from '../components/productItem/ProductItem';
import Search from '../components/search/Search';
import EmptyState from '../components/emptystate/EmtyState';
import useFetch from '../hooks/useFetch';
import Loader from '../components/loader/Loader';
import useObserver from '../hooks/useObserver';

const ListView = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch({
    url: '/product',
    label: 'products',
    stale: true,
  });
  const { observer } = useObserver();
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
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      observer.observe(card);
    });
  }, [products, filteredProducts]);

  return (
    <div>
      <Search setSearchText={setSearchText} searchText={searchText} />
      {isLoading && <Loader />}
      <div>
        {!filteredProducts.length && !isLoading && (
          <EmptyState
            message={`${
              error
                ? 'Error loading products'
                : `There are no products with brand or model "${searchText}"`
            }`}
          />
        )}
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto p-2'>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListView;
