"use client";
import CheckoutForm from "@/components/CheckoutFrom/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import React from 'react'
// // todo add pk
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PAYMENT_GATEWAY_PK);

const Payment = ({amount}) => {
  const appearance = {
    theme: 'stripe',
  };
  return (
    <div>
      <Elements stripe={stripePromise} options={{ appearance }}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
