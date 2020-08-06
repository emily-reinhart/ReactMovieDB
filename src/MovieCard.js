import React from 'react';

export default function MovieCard ({ movie }) {
	return (
		<div className="card">
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title + ' poster'}
				className="card__image"
			/>
			<div className="card__content">
				<h2 className="card__title">{movie.title || movie.name}</h2>
				<p>
					<small>{movie.media_type.toUpperCase()}</small>
				</p>
				<p>
					<small>RELEASE DATE: {movie.release_date}</small>
				</p>
				<p>
					<small>RATING: {movie.vote_average}</small>
				</p>
				<p className="card__desc">{movie.overview}</p>
			</div>
		</div>
	);
}
