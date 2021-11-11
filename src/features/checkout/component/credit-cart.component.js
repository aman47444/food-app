import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardToeknRequest } from "../../../services/checkout/checkout.service";

export const CreditCartComponent = ({ name = "Mo" }) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isInCompelete = Object.values(status).includes("incomplete");
    console.log(isInCompelete);
    const expiry = values.expiry.split("/");
    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.CVC,
      name: name,
    };
    const info = await cardToeknRequest(card);
  };
  return <LiteCreditCardInput onChange={onChange} />;
};
