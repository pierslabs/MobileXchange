import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loader from '../components/loader/Loader';
import Image from '../components/product-image/Image';
import ProductDetail from '../components/product-detail/ProductDetail';

const ProductView = () => {
  const params = useParams();

  const {
    products = [],
    isLoading,
    error,
  } = useFetch({
    url: `/product/${params.id}`,
    label: `product-detail-${params.id}`,
    stale: true,
  });

  console.log(products, isLoading, error);

  return (
    <div className='container mx-auto px-4 py-8 '>
      {isLoading && <Loader />}
      <Link to='/products/list' className='text-blue-500 hover:text-blue-600'>
        Back to Products
      </Link>
      <div className='flex justify-evenly  '>
        <div className='sm:w-96'>
          <Image url={products.imgUrl} alt={products.name} />
        </div>

        <ProductDetail product={products} />
      </div>
    </div>
  );
};

export default ProductView;
