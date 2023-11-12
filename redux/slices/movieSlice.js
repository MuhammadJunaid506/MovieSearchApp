// moviesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (query) => {
  const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
    params: {
      api_key: 'b41b79682c68b518f56a57060bd98381',
      query: query, 
    },
  });
  return response.data.results;
});

export const fetchMovieById = createAsyncThunk('movies/fetchMovieById', async (movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params: {
        api_key: 'b41b79682c68b518f56a57060bd98381',
      },
    });
    return response.data;
  });

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    searchQuery: '',
    searchResults: [],
    selectedMovie: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchResults = action.payload;
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

export const { setSearchQuery } = moviesSlice.actions;
export const selectSearchQuery = (state) => state.movies.searchQuery;
export const selectSearchResults = (state) => state.movies.searchResults;
export const selectSelectedMovie = (state) => state.movies.selectedMovie;

export default moviesSlice.reducer;
