import PropTypes from 'prop-types';

const Search = ({ setSearchText, searchText }) => {
  return (
    <div className='bg-white flex justify-center md:justify-end fixed  p-6 sm:pt-6 -mt-[100px] z-10 border w-full'>
      <input
        type='text'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder='Buscar productos...'
        className='border p-2 rounded border-orange-500 '
      />
    </div>
  );
};

export default Search;

Search.propTypes = {
  setSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
