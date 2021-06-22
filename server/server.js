const express = require("express");
const app = express();
require('dotenv').config({path:'/Users/dtzr/Documents/GitHub/ecommerce web/.env'})
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

// app.post('/api/webhook_endpoints', (req, res) => {
//   console.log(req)
//   const sig = req.headers['stripe-signature'];
//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(req.rawBody, sig, "whsec_XQqvljvf3NNG6pMkU5oQdTl1nkwFS4S");
//   }
//   catch (err) {
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }
//   // Handle the event
//   switch (event.type) {
//     case 'payment_intent.succeeded': {
//       const email = event['data']['object']['receipt_email'] // contains the email that will recive the recipt for the payment (users email usually)
//       console.log(`PaymentIntent was successful for ${email}!`)
//       break;
//     }
//     case 'checkout.session.completed': {
//       const session = event.data.object
       
//       console.log(`session was successful for ${email}!`)
//       break;
//     }
//     default:
//       // Unexpected event type
//       return res.status(400).end();
//   }

//   // Return a 200 response to acknowledge receipt of the event
//   res.json({received: true});
// })

app.listen(5000, () => console.log(`Listening on port ${5000}!`));
