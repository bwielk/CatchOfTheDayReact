import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {

	constructor(){
		super();
		this.renderInventory = this.renderInventory.bind(this);
	}

	renderInventory(key){
		const fish = this.props.fishes[key];
		return (
			<div className = "fish-edit" key={key}>
				<input type = "text" name = "name" value = {fish.name} placeholder = "Fish Name"/>
				<input type = "text" name = "price" value = {fish.price}  placeholder = "Fish Price"/>
				<select name = "status" value = {fish.status} placeholder = "Fish Status">
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea type = "text" value = {fish.description} name = "description" placeholder = "Fish Description"></	textarea>
				<input type = "text" value = {fish.image} placeholder = "Fish Image" />
			</div>
		)
	}

	render(){
		return (
			<div>
			<p> Inventory</p>
			{Object.keys(this.props.fishes).map(this.renderInventory)}
			<AddFishForm addFish = {this.props.addFish}/>
			<button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
			</div>
		)
	}
}

export default Inventory;