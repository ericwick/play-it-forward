import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const CURRENCY = 'USD';

const fromUSDToCent = (amount) => amount * 100;

const successfulPayment = (data) => {
	alert('Payment Successful');
};

const errorPayment = (data) => {
	alert('Payment Successful');
};

const onToken = (amount, description) => (token) => {
	axios
		.post('/donate/checkout', {
			description,
			source: token.id,
			currency: CURRENCY,
			amount: fromUSDToCent(amount)
		})
		.then(successfulPayment)
		.catch(errorPayment);
};

const Checkout = ({ name, description, amount }) => {
	return (
		<StripeCheckout
			name={name}
			description={description}
			amount={fromUSDToCent(amount)}
			token={onToken(amount, description)}
			currency={CURRENCY}
			stripeKey='pk_test_0CtxRdTpX9QoCHJQHrvNpSIX'
		/>
	);
};

export default Checkout;
