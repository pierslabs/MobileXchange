import PropTypes from 'prop-types';

const Search = ({ setSearchText, searchText }) => {
  return (
    <div className='flex justify-end ml-auto m-3'>
      <input
        type='text'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder='Buscar productos...'
        className='border p-2 rounded'
      />
    </div>
  );
};

export default Search;

Search.propTypes = {
  setSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
