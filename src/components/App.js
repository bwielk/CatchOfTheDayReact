import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			fishes: {},
			order: {}
		}
		this.addFish = this.addFish.bind(this);
		this.loadSampleFishes = this.loadSampleFishes.bind(this);
	}

	addFish(fish){
		const fishes = {...this.state.fishes};
		const timestamp = Date.now();
		fishes[`fish=${timestamp}`] = fish;
		this.setState({fishes: fishes});
	}

	loadSampleFishes(){
		this.setState({
			fishes: sampleFishes
		});
	}

	render(){
		return(
		<div className = "catch-of-the-day">
			<div className = "menu">
				<Header tagline = "Fresh Seafood Everyday in Your Local Market" />
			</div>
			<Order />
			<Inventory addFish = {this.addFish} loadSampleFishes = {this.loadSampleFishes}/>
 		</div>
		)
	}
}

export default App;