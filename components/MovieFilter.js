import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const MovieFilter = ({ onFilterChange }) => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
  
    const genres = [
      { id: 28, name: 'Action' },
      // Add more genres as needed
    ];
  
    const handleToggleFilter = () => {
      setFilterOpen(!filterOpen);
    };
  
    const handleGenreChange = (genreId) => {
      setSelectedGenre(genreId);
    };
  
    const applyFilters = () => {
      onFilterChange(selectedGenre);
      setFilterOpen(false);
    };
  
    return (
      <>
        {/* <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={handleToggleFilter}
        >
          Open Filter
        </button> */}
  
        {filterOpen && (
          <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 max-w-md mx-auto rounded-md">
              <span
                className="absolute top-4 right-4 cursor-pointer text-xl"
                onClick={handleToggleFilter}
              >
                &times;
              </span>
              <h3 className="text-xl font-semibold mb-4">Genres</h3>
              <div>
                {genres.map((genre) => (
                  <label key={genre.id} className="block mb-2">
                    <input
                      type="radio"
                      value={genre.id}
                      checked={selectedGenre === genre.id}
                      onChange={() => handleGenreChange(genre.id)}
                      className="mr-2"
                    />
                    {genre.name}
                  </label>
                ))}
              </div>
  
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-md mt-4"
                onClick={applyFilters}
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default MovieFilter;


export const FilterIcon = ({ onClick }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <FontAwesomeIcon icon={faFilter} size="lg" />
    </div>
  );
};

