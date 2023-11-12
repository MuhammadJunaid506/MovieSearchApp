'use client';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
const MovieList = ({ movies }) => {
  const mov = Array.isArray(movies) ? movies : [];
    return (
      <>
      {mov?.map((movie) => (
      <div className={styles.card}>
        <Link href={`/${movie.id}`}>
          {/* <li  className="border border-gray-300 p-4"> */}
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="mb-2 w-full"  key={movie.id}/>
            <p className="text-lg font-semibold">{movie.title}</p>
            <p>Release Date: {movie.release_date}</p>
          {/* </li> */}
        </Link>
      </div>
      ))}
      </>
    );
  };
  
  export default MovieList;
  