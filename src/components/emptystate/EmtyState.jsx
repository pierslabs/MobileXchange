import PropTypes from 'prop-types';
import { AiOutlineInbox } from 'react-icons/ai';

const EmptyState = ({ message }) => {
  return (
    <div className='flex flex-col items-center justify-center py-8 text-gray-500 text-lg'>
      <AiOutlineInbox size={100} />
      <p data-testid='empty-state-message'>{message || 'No Data'}</p>
    </div>
  );
};

export default EmptyState;

EmptyState.propTypes = {
  message: PropTypes.string,
};
