import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loader from '../components/loader/Loader';
import Image from '../components/product-image/Image';
import ProductDetail from '../components/product-detail/ProductDetail';
import EmptyState from '../components/emptystate/EmtyState';
import ProductForm from '../components/product-form/ProductForm';

const ProductView = () => {
  const params = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useFetch({
    url: `/product/${params.id}`,
    label: `product-detail-${params.id}`,
    stale: true,
  });

  return (
    <div className='container mx-auto px-4 py-8 '>
      {isLoading && <Loader />}

      {!product && !isLoading && (
        <EmptyState
          message={`${
            error ? 'Error al cargar el producto' : 'No hay producto'
          }`}
        />
      )}
      {!isLoading && product && (
        <div>
          <Link
            to='/products/list'
            className='text-blue-500 hover:text-blue-600 '
          >
            Back to Product
          </Link>
          <div className='flex justify-around flex-wrap mt-10'>
            <div className='sm:w-96'>
              <Image url={product.imgUrl} alt={product.brand} />
            </div>
            <div className='min-w-[40%]'>
              <ProductDetail product={product} />
              <div className='border-b-2 border-orange-500 mt-10 '></div>
              <ProductForm product={product} />
              <div className='border-b-2 border-orange-500 mt-10'></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductView;
