import { useEffect, useState } from 'react';

import ProductItem from '../components/productItem/ProductItem';
import Search from '../components/search/Search';
import EmptyState from '../components/emptystate/EmtyState';
import useFetch from '../hooks/useFetch';
import Loader from '../components/loader/Loader';

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('show', entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
  }, [products, filteredProducts]);

  return (
    <div>
      <Search setSearchText={setSearchText} searchText={searchText} />
      {isLoading && <Loader />}
      <div className='mt-[150px]'>
        {!filteredProducts.length && !isLoading && (
          <EmptyState
            message={`${
              error ? 'Error al cargar los productos' : 'No hay productos'
            }`}
          />
        )}
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto mt-[150px] p-2'>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListView;
