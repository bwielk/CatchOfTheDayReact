import React from 'react';
import {getFunName} from '../helpers.js';

class StorePicker extends React.Component {
	goToStore(event){
		event.preventDefault();

	console.log("URL has been changed");

	console.log(this.storeInput.value);
	}

	render(){
		return (
			<form className = "store-selector" onSubmit = {this.goToStore.bind(this)}>
				<h2>Please Enter The Store</h2>
				<input type = "text" required placeholder = "Store Name" defaultValue = {getFunName()} ref = {(input) => {this.storeInput = input}}/>
				<button type = "submit">Visit the store</button>
			</form>
		);
	}
}

export default StorePicker;