import React from 'react';
import PropTypes from 'prop-types';

//Stateless functional component
const Header = (props) => {
	return (
		<header className = "top">
		<h1>
			Catch	
			<span className = "ofThe">
				<span className = "of">of</span>
				<span className = "the">the</span>
			</span>
			day
		</h1>
		<h3 className = "tagline">{props.tagline}</h3>
		</header>
	)
};

Header.propTypes = {
	tagline: PropTypes.string.isRequired
};


export default Header
