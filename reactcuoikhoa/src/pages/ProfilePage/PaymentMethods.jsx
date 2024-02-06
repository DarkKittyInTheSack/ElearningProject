import React from "react";
import EmptyPaymentMethod from "../../components/EmptyPaymentMethod";
import {Checkbox} from 'antd'

const PaymentMethods = () => {
  return (
    <div className="container mx-auto">
      <h2 className="font-sans font-serif font-bold text-4xl my-3">
        Payment Methods
      </h2>
      <Checkbox className=" bg-gray-100 px-3 w-full py-5 font-normal text-sm my-5">Show my payment methods for checkout steps</Checkbox>
      <EmptyPaymentMethod />
    </div>
  );
};

export default PaymentMethods;
