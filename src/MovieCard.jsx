import React from 'react';

const MovieCard = ({ movie }) => {
  const posterUrl = movie.Poster && movie.Poster !== 'N/A'
    ? movie.Poster
    : 'https://via.placeholder.com/400x400.png?text=No+Image';

  return (
    <article className="movie">
      <div className="movie-image">
        <img src={posterUrl} alt={movie.Title} loading="lazy" />
      </div>

      <div className="movie-meta">
        <span className="movie-type">{movie.Type}</span>
        <h3>{movie.Title}</h3>
        <p className="movie-year">{movie.Year || 'Unknown'}</p>
      </div>
    </article>
  );
}

export default MovieCard;