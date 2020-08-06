import React from 'react';

export default function Header () {
	return (
		<div className="nav">
			<ul>
				<li style={{ float: 'left' }}>
					<a href="#home">RMDB</a>
				</li>

				<li>
					<a href="https://www.themoviedb.org">
						<img
							className="navLogo"
							src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
							alt=""
						/>
					</a>
				</li>
				<li>
					<a href="https://www.themoviedb.org">
						<span style={{ fontSize: '1.5rem' }}>Powered by</span>
					</a>
				</li>
				{/* <li>
					<form className="navForm">
						<input className="navInput" type="text" name="query" placeholder="Search..." />
						<div class="searchButton">
							<button className="navButton" type="submit">
								<i class="material-icons">search</i>
							</button>
						</div>
					</form>
				</li> */}
			</ul>
		</div>
	);
}
