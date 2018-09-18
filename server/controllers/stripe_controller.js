// module.exports = {
//   payment: (req, res, next) => {
//     return stripe.charges
//       .create({
//         amount: req.body.amount,
//         currency: "usd",
//         source: req.body.tokenId,
//         description: "Test payment"
//       })
//       .then(response => res.status(200).json(response));
//   },
//   createCharge: async (req, res, next) => {
//     console.log(req.body, "REQ BODY");
//     try {
//       let { status } = await stripe.charges.create({
//         amount: 2000,
//         currency: "usd",
//         description: "An example charge",
//         source: req.body
//       });
//       console.log(status, "STATUS");
//       res.status(200).json({ status });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
// };
