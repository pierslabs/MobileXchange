import { productsApi } from '../api/products.api';
import { useQuery } from '@tanstack/react-query';

const useFetch = ({ url, label, stale }) => {
  const getData = async () => {
    const { data } = await productsApi.get(url);
    return data;
  };

  const {
    data = [],
    isLoading,
    error,
    status,
  } = useQuery({
    queryKey: [label],
    queryFn: getData,
    staleTime: stale ? 1000 * 60 * 60 : null, // 1h
  });
  return { data, isLoading, error, status };
};

export default useFetch;
