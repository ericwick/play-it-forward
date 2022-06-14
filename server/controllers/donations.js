module.exports = {
	paymentDonation: (req, res, next) => {
		const db = req.app.get('db');
		let {
			firstName,
			lastName,
			amount,
			teamName,
			email,
			city,
			state
		} = req.body;
		console.log(req.body);
		// db.new_donation([firstName, lastName, amount, teamName, email, city, state])
		//   .then(response => {
		//     res.status(200).json(response);
		//   })
		//   .catch(err => console.log(err));
	}
};
