import React, { Fragment } from 'react';
import { useState } from 'react';
import MovieCard from './MovieCard';

export default function SearchMovies () {
	const [ query, setQuery ] = useState('');
	const [ movies, setMovies ] = useState([]);
	const [ showScroll, setShowScroll ] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		}
		else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};
	window.addEventListener('scroll', checkScrollTop);
	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const searchMovies = async (e) => {
		e.preventDefault();

		//search/movie; search/person; search/tv; search/multi
		const url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env
			.REACT_APP_API_KEY}&language=en-US&page=1&query=${query}&include_adult=false`;

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
			<i
				className="material-icons scrollTop"
				onClick={scrollTop}
				style={{ display: showScroll ? 'flex' : 'none' }}
			>
				keyboard_arrow_up
			</i>

			<form className="form" onSubmit={searchMovies}>
				<label className="label" htmlFor="query">
					Search:
				</label>
				<input
					className="input"
					type="text"
					name="query"
					placeholder="Search for a movie or tv show..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className="button" type="submit">
					Search
				</button>
			</form>
			<div className="card-list">
				{movies
					.filter((movie) => movie.poster_path || movie.profile_path)
					.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
			</div>
		</Fragment>
	);
}
