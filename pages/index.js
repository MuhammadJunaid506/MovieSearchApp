import { useState , useEffect } from 'react';
// import axios from 'axios';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import MovieFilter from '../components/MovieFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, selectSearchQuery, selectSearchResults, setSearchQuery } from '../redux/slices/movieSlice';
import { FilterIcon } from '../components/MovieFilter';

const Home = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const searchResults = useSelector(selectSearchResults);
  // const page = useSelector((state) => state.movies.page);

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState('')
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);

  
  useEffect(() => {
    dispatch(fetchMovies(searchQuery, page));
  }, [dispatch, searchQuery, page]);

  const handleSearch = () => {
    dispatch(fetchMovies(searchQuery));
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    console.log(newPage)
    dispatch(fetchMovies(searchQuery, page));
  };

  console.log(page)

  // const fetchMovies = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.get(
  //       `https://api.themoviedb.org/3/discover/movie`,
  //       {
  //         params: {
  //           api_key: 'b41b79682c68b518f56a57060bd98381',
  //           query,
  //           page,
  //         },
  //       }
  //     );
  //     setMovies(response.data.results);
  //     setTotalPages(response.data.total_pages);
  //   } catch (error) {
  //     setError('Error fetching movies. Please try again.');
  //     console.error('Error fetching movies:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  // const { result: movies, } = useFetch({
  //   url: 'https://api.themoviedb.org/3/discover/movie',
  //   params: {
  //     include_adult: false,
  //     include_video: true,
  //     language: "en-US",
  //     page: 1,
  //     sort_by: "popularity.desc",
  //     api_Key: "b41b79682c68b518f56a57060bd98381", 
  //   },
  //   // apiKey: "b41b79682c68b518f56a57060bd98381", 
  //   // tok,
  // });

  
  if (loading) {
    return <p>Loading...</p>;
  }
  
  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  const handleToggleFilter = () => {
    setFilterOpen(!filterOpen);
  };
  
  // const handleSearch = (query) => {
  //   setPage(1);
  //   setError(null);
  //   fetchMovies(query, 1);
  // };

  // const handlePageChange = (newPage) => {
  //   setPage(newPage);
  //   fetchMovies(query, newPage);
  // };
 
  return (
    <div className="flex-1 text-center text-lg ">
      <div className='h-full flex-1 overflow-y-auto'>
        <nav className='h-10vh bg-black text-white shadow-md opacity-100 flex overflow-hidden items-center justify-between'>
        <hi className='text-28 font-bold font-lato p-5'>MOVIE APP</hi>
        <div className='flex items-center mr-2'>
        <SearchBar value={searchQuery} onSearch={handleSearch} onChange={(e) => dispatch(setSearchQuery(e.target.value))} />
        <FilterIcon onClick={handleToggleFilter} />
        </div>
        {filterOpen && <MovieFilter />}
        </nav>
      <main className='flex- p-10 text-center text-lg text-gray-700'>
        <div className='flex flex-wrap flex-1 bg-gray-300 p-10 border border-solid border-gray-300 rounded-md shadow-md text-left text-lg text-gray-700 items-center'>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <MovieList movies={searchResults} />
      </div>
      <Pagination onPageChange={handlePageChange} page={page} totalPages={totalPages} />
      </main>
      </div>
    </div>
  );
};

export default Home;
