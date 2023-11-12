// pages/movie/[id].js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Card from '../../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieById, selectSelectedMovie } from '../../redux/slices/movieSlice';

const MovieDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const selectedMovie = useSelector(selectSelectedMovie);
  const movie = selectedMovie ? [selectedMovie] : []
  console.log(id)

  useEffect(() => {
    console.log(id)
    dispatch(fetchMovieById(id));
  }, [dispatch, id]);
  console.log(movie)

  return (
    <div className="flex-1 text-center text-lg ">
      <div className='h-full flex-1 overflow-y-auto'>
        <nav className='h-10vh bg-black text-white shadow-md opacity-100 flex overflow-hidden items-center justify-between'>
        <hi className='text-28 font-bold font-lato p-5'>MOVIE APP</hi>
        {/* <SearchBar value={searchQuery} onSearch={handleSearch} onChange={(e) => dispatch(setSearchQuery(e.target.value))} /> */}
        </nav>
      <main className='flex- p-10 text-center text-lg text-gray-700'>
        <div className='flex flex-wrap flex-1 bg-gray-300 p-10 border border-solid border-gray-300 rounded-md shadow-md text-left text-lg text-gray-700 items-center'>
      <Card movie={selectedMovie ? [selectedMovie] : []} />
      {/* {movie?.map((item, index) => (
      <div key={index}>
        <img src={`https://image.tmdb.org/t/p/w200${item?.poster_path}`} alt={item.title} className="mb-2 w-full" />
        <p className="text-lg font-semibold">{item.title}</p>
        <p>Release Date: {item.release_date}</p>
      </div>
          ))} */}
      </div>
      {/* <Pagination onPageChange={handlePageChange} page={page} totalPages={totalPages} /> */}
      </main>
      </div>
    </div>
  );
};

export default MovieDetails;
