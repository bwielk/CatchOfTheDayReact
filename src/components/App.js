import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../Rebase';
import PropTypes from 'prop-types';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			fishes: {},
			order: {}
		}
		//this.addFish = this.addFish.bind(this);
		//this.loadSampleFishes = this.loadSampleFishes.bind(this);
		//this.addToOrder = this.addToOrder.bind(this);
		//this.updateFish = this.updateFish.bind(this);
		//this.removeFish = this.removeFish.bind(this);
		//this.removeOrder = this.removeOrder.bind(this);
	}

	componentWillMount(){
		const { params } = this.props.match;
		this.ref = base.syncState(`${params.storeId}/fishes`, {
			context: this,
			state: 'fishes'
		});

		//checks if there is anything in the localStorage
		const localStorageRef = localStorage.getItem(`order-${params.storeId}`);
		if(localStorageRef){
			this.setState({
				order: JSON.parse(localStorageRef)
			});
		}
	}

	componentWillUnmount(){
		base.removeBinding(this.ref);
	}

	componentWillUpdate(nextProps, nextState){
		const { params } = this.props.match;
		console.log("Something has changed");
		localStorage.setItem(`order-${params.storeId}`, JSON.stringify(nextState.order));
	}

	addFish =(fish)=> {
		const fishes = {...this.state.fishes};
		const timestamp = Date.now();
		fishes[`fish=${timestamp}`] = fish;
		this.setState({fishes: fishes});
	};

	removeFish =(key)=> {
		const fishes = {...this.state.fishes};
		fishes[key] = null;
		this.setState({fishes});
	};

	updateFish =(key, updatedFish)=> {
		const fishes = {...this.state.fishes};
		fishes[key] = updatedFish;
		this.setState({fishes});
	};

	loadSampleFishes =()=> {
		this.setState({
			fishes: sampleFishes
		});
	}

	addToOrder =(key)=> {
		const order = {...this.state.order};
		order[key] = order[key] + 1 || 1;
		this.setState({order : order});
	};

	removeOrder =(key)=> {
		const order = {...this.state.order};
		delete order[key];
		this.setState({order});
	};

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
			<Order 
			fishes = {this.state.fishes} 
			orders = {this.state.order}
			params = {this.props.params}
			removeOrder = {this.removeOrder}
			/>
			<Inventory 
				updateFish = {this.updateFish} 
				fishes = {this.state.fishes} 
				addFish = {this.addFish} 
				loadSampleFishes = {this.loadSampleFishes}
				removeFish = {this.removeFish}
			/>
 		</div>
		)
	}
}

export default App;