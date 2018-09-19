require("dotenv").config();
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
  app.get("/", (req, res) => {
    res.send({
      message: "Hello Stripe checkout server!",
      timestamp: new Date().toISOString()
    });
  });

  app.post("/donate/checkout", (req, res) => {
    console.log(req.body);
    stripe.charges.create(req.body, postStripeCharge(res));
  });

  return app;
};

module.exports = {
  checkout: app => payment(app)
};
