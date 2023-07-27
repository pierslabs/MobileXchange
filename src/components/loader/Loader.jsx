import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loader = () => {
  return (
    <div className='flex h-[60vh] justify-center items-center '>
      <AiOutlineLoading3Quarters className='animate-spin  text-blue-500 text-4xl' />
    </div>
  );
};

export default Loader;
