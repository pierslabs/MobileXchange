import { useNavigate } from 'react-router-dom';

const ProductView = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/products/list')}>Click</button>
    </div>
  );
};

export default ProductView;
