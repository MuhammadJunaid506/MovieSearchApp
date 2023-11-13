import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({ page, searchQuery, include_adult,include_video, language , year }) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: 'b41b79682c68b518f56a57060bd98381',
        page: page,
        query: searchQuery,
        include_adult: include_adult,
        include_video: include_video,
        language: language,
        year: year,
      },
    });
    return response.data;
  } catch (error) {
    throw Error('Error fetching movies. Please try again.');
  }
});

export const fetchMovieById = createAsyncThunk('movies/fetchMovieById', async (movieId) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params: {
        api_key: 'b41b79682c68b518f56a57060bd98381',
      },
    });
    return response.data;
  } catch (error) {
    throw Error('Error fetching movie details. Please try again.');
  }
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    searchQuery: '',
    searchResults: [],
    selectedMovie: null,
    status: 'idle',
    error: null,
    page: 1,
    totalPages: 1,
    include_adult: false,
    include_video: false,
    language: false,
    year:2023
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setlanguage: (state, action) => {
      state.language = action.payload;
    },
    setinclude_adult: (state, action) => {
      state.include_adult = action.payload;
    },
    setinclude_video: (state, action) => {
      state.include_video = action.payload;
    },
    setyear: (state, action) => {
      state.year = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchResults = action.payload.results;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedMovie = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery, setPage, setlanguage, setinclude_adult, setyear, setinclude_video } = moviesSlice.actions;
export const selectSearchQuery = (state) => state.movies.searchQuery;
export const selectSearchResults = (state) => state.movies.searchResults;
export const selectSelectedMovie = (state) => state.movies.selectedMovie;
export const selectPage = (state) => state.movies.page;
export const selectTotalPages = (state) => state.movies.totalPages;
export const selectStatus = (state) => state.movies.status;
export const selectError = (state) => state.movies.error;
export const selectLanguage = (state) => state.movies.language;
export const selecttAdult = (state) => state.movies.include_adult;
export const selecttvideo = (state) => state.movies.include_video;
export const selectYear = (state) => state.movies.year;

export default moviesSlice.reducer;
