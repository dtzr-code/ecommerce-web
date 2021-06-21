const express = require("express");
const app = express();
const stripe = require("stripe")(
  "sk_test_51J1YVxL3fRcUBWQKToy2c9zPxSAP5BwE1xnHP8Zl1VwB3Ckg7ATkUAAd6Hx45MKoZOZ5CATMLxAGhgeXH4ncYY8M00xNeo2KQ4"
);
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/", async (req, res) => {
  const { items, email } = req.body;

  const allitems = items.map((item) => ({
    description: item.description,
    quantity: item.quantity,
    price_data: {
      currency: "sgd",
      unit_amount: item.price * 100,
      product_data: {
        name: item.name,
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: allitems,
    customer_email: email,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ id: session.id });
});

app.listen(5000, () => console.log(`Listening on port ${5000}!`));
