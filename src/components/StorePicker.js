import React from 'react';
import PropTypes from 'prop-types';
import {getFunName} from '../helpers.js';

class StorePicker extends React.Component {
	myInput = React.createRef();
	static propTypes = {history: PropTypes.object};

	goToStore = (event) => {
		event.preventDefault();
		console.log("URL has been changed");
		const storeName = this.myInput.value.value;
		console.log("Going to ${this.myInput.value.value}");
		this.props.history.push(`/store/${storeName}`)
	}

	render() {
		return ( 
			<form className = "store-selector"
			onSubmit = {this.goToStore}>

			<h2 > Please Enter The Store </h2> 
			<input type = "text" 
			ref = {this.myInput}
			required placeholder = "Store Name"
			defaultValue = {getFunName()}
			/> 
			<button type = "submit" > Visit the store < /button> </form>
		);
	}
}

export default StorePicker;