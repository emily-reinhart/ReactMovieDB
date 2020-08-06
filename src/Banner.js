import React from 'react';
import { useState } from 'react';

export default function Banner () {
	const [ trending, setTrending ] = useState([]);

	const getTrending = async () => {
		const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env
			.REACT_APP_API_KEY}&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			setTrending(data.results);
		} catch (err) {
			console.error(err);
		}
		// const trendingMovies = trending.filter((movie) => movie.poster_path).slice(0, 6);
		// console.log(trendingMovies);
	};

	getTrending();

	return (
		<div className="banner" style={{ marginTop: '45.33px' }}>
			{trending[0] ? (
				<div className="slider">
					<img
						className="slider__image"
						id="slider1"
						src={`https://image.tmdb.org/t/p/w500${trending[0].poster_path}`}
						alt=""
					/>
					<img
						className="slider__image"
						id="slider2"
						src={`https://image.tmdb.org/t/p/w500${trending[1].poster_path}`}
						alt=""
					/>
					<img
						className="slider__image"
						id="slider3"
						src={`https://image.tmdb.org/t/p/w500${trending[2].poster_path}`}
						alt=""
					/>
					<img
						className="slider__image"
						id="slider4"
						src={`https://image.tmdb.org/t/p/w500${trending[3].poster_path}`}
						alt=""
					/>
					<img
						className="slider__image"
						id="slider5"
						src={`https://image.tmdb.org/t/p/w500${trending[4].poster_path}`}
						alt=""
					/>
				</div>
			) : null}
			<h1 className="title">React Movie DB</h1>
			{/* <div className="fadein">
				<img id="f3" src="http://i.imgur.com/R7A9JXc.png" />
				<img id="f2" src="http://i.imgur.com/D5yaJeW.png" />
				<img id="f1" src="http://i.imgur.com/EUqZ1Er.png" />
			</div> */}
		</div>
	);
}
