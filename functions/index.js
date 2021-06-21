const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51J4qy1L81YLCE0iV7NXVDHX082JM9K3G2fvGT8L1hjxG6jt98JTGfgQvIDWHY3fbmAkNNk2wBT8f9Q88EB3EhTYj00PQy0Ehpn')

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true}))
app.use(express.json());

// - API routes

app.get('/', (request, response)=> response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
   
    // console.log("Payment Request Received for this amount >>>", total)
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


// - Listen command
exports.api = functions.https.onRequest(app)

//example endpoint
// http://localhost:5001/clone-e15f0/us-central1/api

