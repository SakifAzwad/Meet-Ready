// Import NextResponse with correct import statement
import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.NEXT_PAYMENT_SECRET_KEY);

export const POST = async (request) => {
  try {
    const { price } = await request.json();
    console.log(price);
    const amount = parseInt(price * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    console.log(paymentIntent);

    // Correct the response format
    return NextResponse.json({ secret: paymentIntent.client_secret }, { status: 200 });
  } catch (error) {
    console.error('Error processing payment intent:', error);
    return NextResponse.error({ error: 'Internal Server Error' }, { status: 500 });
  }
};


// import { NextResponse } from "next/server";

// const stripe = require("stripe")(process.env.NEXT_PAYMENT_SECRET_KEY)


// export const POST = async (request) => {

//   try {
//     const { price } = await request.json();
//     const amount = parseInt(price * 100);
//     console.log(price);

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: 'usd',
//       payment_method_types: ['card'],
//     });
//     console.log('payment intent',paymentIntent)
//     console.log('secret', paymentIntent.client_secret)
//     const secret = paymentIntent.client_secret
//     console.log('secret', secret)
//     res.status(200).json({secret})
//   } catch (error) {
//     console.error('Error processing payment intent:', error);
//     return new NextResponse.error({ error: 'Internal Server Error' }, { status: 500 });

//   }
// };

// export const POST = async(req, res) => {
//   const {price} = await req.json()
//   console.log(price)
//   const amount = parseInt(price * 100)

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: 'usd',
//       payment_method_types: ['card'],
//     });
//     console.log(paymentIntent)
//     res.json(paymentIntent)
// }