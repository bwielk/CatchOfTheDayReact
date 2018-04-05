import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	imageRef = React.createRef();

	createFish = (event) => {
		event.preventDefault();
		const fish = {
			name: this.nameRef.value.value,
			price: this.priceRef.value.value,
			status: this.statusRef.value.value,
			desc: this.descRef.value.value,
			image: this.imageRef.value.value
		}
		console.log("Fish is created");
		console.log(fish);
		this.props.addFish(fish);
		event.currentTarget.reset();
	}

	render(){
		return (
			<form ref={this.formRef} className = "fish-edit" onSubmit = {(e) => this.createFish(e)}>
				<input type = "text"  ref={this.nameRef} placeholder = "Fish Name" />
				<input type = "text" ref={this.priceRef} placeholder = "Fish Price" />
				<select name = "status" ref={this.statusRef}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea type = "text" ref={this.descRef} placeholder = "Fish Description"></	textarea>
				<input type = "text" ref={this.imageRef} placeholder = "Fish Image" />
				<button type = "submit"> Add the Item </button>
			</form>
		)
	}
}

AddFishForm.propTypes = {
	addFish: PropTypes.func.isRequired
}

export default AddFishForm;