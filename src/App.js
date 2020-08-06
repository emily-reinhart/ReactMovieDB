import React, { Fragment } from 'react';
import './index.css';
import SearchMovies from './SearchMovies';
import Header from './Header';
import Banner from './Banner';

class App extends React.Component {
	render () {
		return (
			<Fragment>
				<Header />
				<Banner />
				<div className="container">
					<SearchMovies />
				</div>
			</Fragment>
		);
	}
}
export default App;
