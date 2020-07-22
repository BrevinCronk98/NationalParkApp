import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';

class Parks extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		distpatch(makeApiCall());
	}

	render() {
		const { error, isLoaded, parks } = this.props;
		if (error) {
			return <React.Fragment>Error: {error.message}</React.Fragment>;
		} else if (!isLoaded) {
			return <React.Fragment>Loading..........</React.Fragment>;
		} else {
			return (
				<React.Fragment>
					<h1>National Parks</h1>
					<ul>
						{parks.map((park, index) => {
							<li key={index}>
								<h2>{park.parkName}</h2>
								<h3>{park.parkLocation}</h3>
								<p>{park.parkDescription}</p>
								<p>{park.parkFauna}</p>
								<p>{park.parkFlora}</p>
								<p>{parrk.states}</p>
							</li>;
						})}
					</ul>
				</React.Fragment>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		parks: state.parks,
		isLoading: state.isLoading,
		error: state.error
	};
};

export default connect(mapStateToProps)(Parks);
