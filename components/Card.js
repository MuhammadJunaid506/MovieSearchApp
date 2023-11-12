import React from 'react';

const DetailsCard = ({ movie }) => {
    const mov = Array.isArray(movie) ? movie : [];
  if (!movie) {
    return null;
  }

  return (
    <>
    {mov?.map((movie) => (
    <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-md">
      <h2 className="text-3xl font-semibold mb-4">{movie.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            className="mb-4 rounded-lg w-full"
          />
        </div>

        <div className="col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-3">
          <h3 className="text-xl font-semibold mb-2">Overview</h3>
          <p>{movie.overview}</p>
        </div>

        <div className="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <h3 className="text-xl font-semibold mb-2">Genres</h3>
          <ul>
            {/* {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))} */}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <h3 className="text-xl font-semibold mb-2">Release Date</h3>
          <p>{movie.release_date}</p>
        </div>

      </div>
    </div>
    ))}
    </>
  );
};

export default DetailsCard;
