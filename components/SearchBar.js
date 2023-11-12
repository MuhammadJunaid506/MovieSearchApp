import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, fetchMovies } from '../redux/slices/movieSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.movies.searchQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(searchQuery, 1));
  };

  const handleChange = (e) => {
    const query = e.target.value;
    debugger
    console.log(query)
    dispatch(setSearchQuery(query));
  };

  return (
    <form onSubmit={handleSubmit} className="m-4 p-1 rounded-xl bg-white">
      <input type="text" value={searchQuery} onChange={handleChange} placeholder="Search for movies..." className="text-black p-2 border-none" />
      <button type="submit" className="p-2 rounded-2xl bg-blue-500 text-white">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
