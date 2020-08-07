import React from 'react';

export default function MovieCard ({ movie }) {
	return (
		<div className="card">
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.profile_path}`}
				alt={movie.title + ' poster'}
				className="card__image"
			/>
			<div className="card__content">
				<h2 className="card__title">{movie.title || movie.name}</h2>
				<p>
					<small style={{ fontWeight: '600', fontSize: '1.5rem' }}>{movie.media_type.toUpperCase()} </small>
				</p>
				<p>
					<small style={{ fontWeight: '600', fontSize: '1.5rem' }}>
						{movie.media_type === 'movie' ? (
							movie.release_date.split('-')[0]
						) : movie.media_type === 'tv' ? (
							movie.first_air_date.split('-')[0]
						) : null}
					</small>
				</p>
				<p>{movie.vote_average ? <small>RATING: {movie.vote_average}</small> : null}</p>
				<p className="card__desc">{movie.overview ? movie.overview : null}</p>
				{movie.known_for ? (
					<div>
						<p style={{ fontStyle: 'italic' }}>Known For: </p>
						{movie.known_for.map((item) => (
							<p className="actorFilms">
								{item.name || item.title}
								{' ('}
								{item.media_type === 'movie' ? (
									item.release_date.split('-')[0]
								) : (
									item.first_air_date.split('-')[0]
								)}
								{')'}
							</p>
						))}
					</div>
				) : null}
				{/* {movie.known_for ? (
					<div>
						<p>Known For: </p>
						<ul>
							<li>
								{movie.known_for[0].name || movie.known_for[0].title} -{' '}
								{movie.known_for[0].release_date || movie.known_for[0].first_air_date}
							</li>
							<li>
								{movie.known_for[1].name || movie.known_for[1].title} -{' '}
								{movie.known_for[1].release_date || movie.known_for[1].first_air_date}
							</li>
							<li>
								{movie.known_for[2].name || movie.known_for[2].title} -{' '}
								{movie.known_for[2].release_date || movie.known_for[2].first_air_date}
							</li>
							<li>
								{movie.known_for[3].name || movie.known_for[3].title} -{' '}
								{movie.known_for[3].release_date || movie.known_for[3].first_air_date}
							</li>
						</ul>
					</div>
				) : null} */}
			</div>
		</div>
	);
}
