import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import MovieFilter from '../components/MovieFilter';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMovies,
  selectSearchQuery,
  selectSearchResults,
  setSearchQuery,
  setPage,
  selectStatus,
  selectError,
  selectPage,
  selectTotalPages,
  selectLanguage,
  selectYear,
  selecttvideo,
  selecttAdult,
} from '../redux/slices/movieSlice';
import { FilterIcon ,LoadingSpinner } from '../components/Icons';

const Home = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const searchResults = useSelector(selectSearchResults);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const language = useSelector(selectLanguage);
  const includeAdult = useSelector(selecttAdult);
  const includeVideo = useSelector(selecttvideo);
  const year = useSelector(selectYear);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterMovie, setFilterMovie] = useState([...searchResults])

  useEffect(()=>{
    setFilterMovie(searchResults)
  },[searchResults])

  useEffect(() => {
    dispatch(fetchMovies({ page, searchQuery  }));
  }, [dispatch, searchQuery, page, language,year,includeAdult,includeVideo ]);

  const handlePageChange = (newPage) => {
    console.log(`Changing page to: ${newPage}`);
    dispatch(setPage(newPage));
    dispatch(fetchMovies({ page: newPage, searchQuery }));
  };

  const handleToggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  // const handleFilterChange = (filterName) => {
  //   dispatch(setFilter((prevFilters) => ({
  //     ...prevFilters,
  //     [filterName]: !prevFilters[filterName],
  //   })));
  
  //   dispatch((state) => {
  //     console.log(state.movies.filters[filterName]);
  //     dispatch(fetchMovies({ page, searchQuery, filters: state.movies.filters }));
  //   });
  // };
  

  const handleSubmit = (e) => {
    const query = e.target.value;
    e.preventDefault();
    dispatch(setSearchQuery(query))
    dispatch(fetchMovies({searchQuery: query}));
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setFilterMovie(
      searchResults.filter((item) => {
              return item?.title.toLowerCase().includes(query)
      })
  );
    // dispatch(setSearchQuery(query));
  };
  
  if (status === 'loading') {
    return <><LoadingSpinner/></>;
  }

  if (status === 'failed') {
    return <p>Error loading data: {error}</p>;
  }

  return (
    <div className="flex-1 text-center text-lg ">
      <div className="h-full flex-1 overflow-y-auto">
        <nav className="h-10vh bg-black text-white shadow-md opacity-100 flex overflow-hidden items-center justify-between">
          <hi className="text-28 font-bold font-lato p-5">MOVIE APP</hi>
          <div className="flex items-center mr-2">
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
            <FilterIcon onClick={handleToggleFilter} />
          </div>
          {filterOpen && <MovieFilter/>}
        </nav>
        <main className="flex- p-10 text-center text-lg text-gray-700">
          <div className="flex flex-wrap flex-1 bg-gray-300 p-10 border border-solid border-gray-300 rounded-md shadow-md text-left text-lg text-gray-700 items-center">
            <MovieList movies={filterMovie} />
          </div>
          <Pagination onPageChange={handlePageChange} page={page} totalPages={totalPages} />
        </main>
      </div>
    </div>
  );
};

export default Home;
