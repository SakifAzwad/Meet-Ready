/* eslint-disable @next/next/no-img-element */
"use client";

import { cartContext } from "@/utils/Cart/CartContext";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const { cart, price } = useContext(cartContext);
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ price }),
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Data", data);

        // Set the clientSecret state
        setClientSecret(data.secret);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      
    });

    if (error) {
      console.log("Payment error", error);
      setError(error.message);
    } else {
      console.log("Payment method", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
        },
      });

    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {

        setTransactionId(paymentIntent.id);
        // router.push({
        //   pathname: '/success',
        //   query: { data: transactionId } // Convert data to string if needed
        // });
      }
    }
  };
  return (
    
  <div className="text-center mx-auto  p-12 h-screen bg-gradient-to-r from-[#E7F1FE] via-[#ECF0FE] to-[#F5EEFF]">
    <h1 className="text-left pl-12 text-xl text-purple-800 font-semibold">
      Card Number
    </h1>
    <form onSubmit={handleSubmit}>
     <CardElement className="lg:mx-12 text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300 p-4 rounded-lg"
          options={{
            style: {
              base: {
                // fontSize: '16px',
                // fontFamily: 'Arial, sans-serif',
                // color: '#424770',
                // '::placeholder': {
                //   color: '#aab7c4',
                // },
              },
              // invalid: {
              //   color: '#9e2146',
              // },
            },
          }}
        />
{


}
     
     <button
        className=" mt-12 w-40  hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-purple-400 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
     
     
      <p className="text-red-500">{error}</p>
      {transactionId ? (
        <><img className="h-24 w-40 rounded-lg mx-auto mt-12" src="https://cdn.dribbble.com/users/11783/screenshots/3492735/media/74b79b4e206117a2fc38374584256347.gif" alt="" /><p className="text-green-600 pt-12 pb-12">Your transaction id: {transactionId}</p>
        <Link href="/dashboard" className="mt-4 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-purple-400 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base">
         Back to Dashboard
        </Link>
        </>
      ):(<></>)}
    </form>
  </div>
  
    
  );
};

export default CheckoutForm;
