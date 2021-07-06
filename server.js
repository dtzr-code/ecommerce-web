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

const path = require("path");

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
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
