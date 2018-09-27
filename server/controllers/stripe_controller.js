const stripeCheckout = require("stripe");
const stripe = stripeCheckout(process.env.STRIPE_SECRET);

const postStripeCharge = res => (stripeRes, stripeErr) => {
  if (stripeErr) {
    res.status(500).json({ error: stripeErr });
  } else {
    res.status(200).json({ success: stripeRes });
  }
};

const payment = app => {
  app.post("/donate/checkout", (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res));
  });

  return app;
};

module.exports = {
  checkout: app => payment(app)
};
