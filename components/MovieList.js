'use client';
import styles from '../styles/Home.module.css';

const MovieList = ({ movies }) => {
  const mov = Array.isArray(movies) ? movies : [];

  return (
    <>
      {mov?.map((movie) => (
        <div className={styles.cardpic} key={movie.id}>
          <a href={`/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="mb-2 w-full" />
            <p className="text-lg font-semibold">{movie.title}</p>
            <p>Release Date: {movie.release_date}</p>
          </a>
        </div>
      ))}
    </>
  );
};

export default MovieList;
