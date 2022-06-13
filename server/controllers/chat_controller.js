module.exports = {
	chatMessage: (req, res, next) => {
		const db = req.app.get('db');
		const { newMessage } = req.body;
		console.log(req.body);
		// db.post_message(newMessage)
		//   .then(res.sendStatus(200))
		//   .catch(err => console.log(err, "didn't post message"));
	}
};
