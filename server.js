const express = require("express");
const app = express();
require("dotenv").config({
  path: "/Users/dtzr/Documents/GitHub/ecommerce web/.env",
});
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
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
    cancel_url: "http://localhost:3000",
  });

  res.json({ id: session.id });
});

if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

app.listen(process.env.PORT || 5000, () =>
  console.log(`Listening on port ${process.env.PORT}!`)
);
