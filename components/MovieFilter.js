"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  setlanguage,
  setinclude_adult,
  setinclude_video,
  setyear,
  selectLanguage,
  selectYear,
  selecttvideo,
  selecttAdult,
} from "../redux/slices/movieSlice";

const MovieFilter = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const includeAdult = useSelector(selecttAdult);
  const includeVideo = useSelector(selecttvideo);
  const year = useSelector(selectYear);

  const handleFilterChange = (filterName, value) => {
    console.log(".....", filterName, value);
    switch (filterName) {
      case "language":
        dispatch(setlanguage(value));
        dispatch(fetchMovies({ language: value }));
        break;
      case "includeAdult":
        dispatch(setinclude_adult(value));
        dispatch(fetchMovies({ include_adult: value }));
        break;
      case "includeVideo":
        dispatch(setinclude_video(value));
        dispatch(fetchMovies({ include_video: value }));
        break;
      case "year":
        dispatch(setyear(value));
        dispatch(fetchMovies({ year: value }));
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="origin-top-right absolute top-20 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div
            className="py-2 px-4"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-gray-700">Language:</label>
              <input
                type="text"
                value={language}
                onChange={(e) => handleFilterChange("language", e.target.value)}
                className="border rounded-md p-1 w-2/3 text-sm text-gray-700"
              />
            </div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-gray-700">Include Adult:</label>
              <input
                type="checkbox"
                checked={includeAdult}
                onChange={(e) =>
                  handleFilterChange("includeAdult", e.target.checked)
                }
              />
            </div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-gray-700">Include Video:</label>
              <input
                type="checkbox"
                checked={includeVideo}
                onChange={(e) =>
                  handleFilterChange("includeVideo", e.target.checked)
                }
              />
            </div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-gray-700">Year:</label>
              <input
                type="number"
                value={year}
                onChange={(e) => handleFilterChange("year", e.target.value)}
                className="border rounded-md p-1 w-2/3 text-sm text-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieFilter;
