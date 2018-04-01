import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			fishes: {},
			order: {}
		}
		this.addFish = this.addFish.bind(this);
		this.loadSampleFishes = this.loadSampleFishes.bind(this);
		this.addToOrder = this.addToOrder.bind(this);
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

	addToOrder(key){
		const order = {...this.state.order};
		order[key] = order[key] + 1 || 1;
		this.setState({order : order});
	}

	render(){
		return(
		<div className = "catch-of-the-day">
			<div className = "menu">
				<Header tagline = "Fresh Seafood Everyday in Your Local Market" />
				<ul className = "list-of-fishes">
					{
						Object.keys(this.state.fishes).map(key => 
						<Fish key={key} index = {key} details = {this.state.fishes[key]} addToOrder={this.addToOrder}/>)
					}
				</ul>
			</div>
			<Order fishes = {this.state.fishes} orders = {this.state.order}/>
			<Inventory addFish = {this.addFish} loadSampleFishes = {this.loadSampleFishes}/>
 		</div>
		)
	}
}

export default App;