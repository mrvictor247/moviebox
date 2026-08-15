import React, { useEffect, useState } from 'react';

import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

// e7498ee5

const API_URL = 'https://www.omdbapi.com/?apikey=e7498ee5';

const movie1 = {
  Title: 'Amazing Spiderman Syndrome',
  Year: '2012',
  imdbID: 'tt2586634',
  Type: 'movie',
  Poster: 'N/A',
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${encodeURIComponent(title)}`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID || movie.Title} />
          ))}
        </div>
      ) : (
        <div className="container">
          <MovieCard movie={movie1} />
        </div>
      )}
    </div>
  );
};

export default App;
