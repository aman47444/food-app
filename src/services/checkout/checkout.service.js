import React from "react";
import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51Jpru1SEO5kEuOuewVyWqb1vhSI3jqFn00FEod1rM3yN0aiF4NeVxLJY9Kx8j5RHRPQEDiabuTusvcSMqEB901Cv007PlxbRhh"
);

export const cardToeknRequest = (card) => stripe.createToken({ card });

// this is the payment request gateway whete we will make fetch call using payment url or alid payment url
export const payRequest = (token, name, amount) => {
  return null;
};
