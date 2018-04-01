import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {

	static propTypes = {
		fishes: PropTypes.object,
		orders: PropTypes.object
	}

	render(){
		const orderIds = Object.keys(this.props.orders);
		const total = orderIds.reduce((prevTotal, key) => {
			const fish = this.props.fishes[key];
			const count = this.props.orders[key];
			const isAvailable = fish && fish.status === 'available';
			if(isAvailable){
				return prevTotal + (count*fish.price || 0);
			}
			return prevTotal;
		}, 0);

	return (
		<div className = "order-wrap">
		<h2>Your order</h2>
		<p>{orderIds}</p>
		{total}
		</div>
		)
	}
}

export default Order;