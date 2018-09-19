import React from "react";
import Checkout from "./Checkout";

function Payment(props) {
  return (
    <Checkout
      name={"Thank you for your donation!"}
      description={"checkout"}
      amount={props.amount}
    />
  );
}

export default Payment;
