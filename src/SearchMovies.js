import React, { Fragment } from 'react';
import { useState } from 'react';
import MovieCard from './MovieCard';

export default function SearchMovies () {
	const [ query, setQuery ] = useState('');
	const [ movies, setMovies ] = useState([]);

	const searchMovies = async (e) => {
		e.preventDefault();

		//search/movie; search/person; search/tv; search/multi
		const url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env
			.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			setMovies(data.results);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<Fragment>
			<form className="form" onSubmit={searchMovies}>
				<label className="label" htmlFor="query">
					Search:
				</label>
				<input
					className="input"
					type="text"
					name="query"
					placeholder="Search for a movie, show, or person..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className="button" type="submit">
					Search
				</button>
			</form>
			<div className="card-list">
				{movies.filter((movie) => movie.poster_path).map((movie) => <MovieCard movie={movie} key={movie.id} />)}
			</div>
		</Fragment>
	);
}
