import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Banner () {
	const [ trending, setTrending ] = useState([]);

	useEffect(() => {
		const getTrending = async () => {
			const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env
				.REACT_APP_API_KEY}&include_adult=false`;

			try {
				const res = await fetch(url);
				const data = await res.json();
				setTrending(data.results);
			} catch (err) {
				console.error(err);
			}
		};
		getTrending();
	}, []);

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2
		}
	};

	return (
		<div className="banner" style={{ marginTop: '45.33px' }}>
			<Carousel responsive={responsive} infinite={true} swipeable={true}>
				{trending.filter((movie) => movie.poster_path).splice(0, 15).map((movie) => (
					<div className="slide">
						<img
							style={{ width: '100%', transition: '.5s ease', backfaceVisibility: 'hidden' }}
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt=""
						/>
						<div className="overlay">
							<div className="text">
								<p className="movie__title">
									<a href={`http://www.themoviedb.org/${movie.media_type}/${movie.id}`}>
										{movie.title}
									</a>
								</p>
								<p className="movie__year">{movie.release_date.split('-')[0]}</p>
								<p className="movie__desc">{movie.overview.slice(0, 100)}...</p>
							</div>
						</div>
					</div>
				))}
			</Carousel>

			<h1 className="title">React Movie DB</h1>
		</div>
	);
}
