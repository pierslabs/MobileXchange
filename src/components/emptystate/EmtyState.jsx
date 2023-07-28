import PropTypes from 'prop-types';
import { AiOutlineInbox } from 'react-icons/ai';

const EmptyState = ({ message }) => {
  return (
    <div className='flex flex-col items-center justify-center py-8 mt-32 text-gray-500 text-lg h-[60vh]'>
      <AiOutlineInbox size={100} />
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;

EmptyState.propTypes = {
  message: PropTypes.string.isRequired,
};
