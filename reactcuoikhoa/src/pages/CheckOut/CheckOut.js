import { useSignals } from "@preact/signals-react/runtime";
import React from "react";

const CheckOut = () => {
  const clicked = useSignals(false);
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="container">
          <h2>checkout</h2>
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div className="col_left">
              <h1>Billing address</h1>
              <p>
                country<span>Required</span>
              </p>
              <select name="" id="">
                <option value="">VietNam</option>
                <option value="">China</option>
                <option value="">Thai Lan</option>
              </select>
              <p>
                Udemy is required by law to collect applicable transaction taxes
                for purchases made in certain tax jurisdictions.
              </p>
              <h2>Payment method</h2>
              <span>Secured connection</span>
              <button
                className="w-full border border-gray-400"
                onClick={() => {
                  const content = document.getElementById("dropdown_data_1");
                  if (!clicked.u) {
                    content.style.display = "block";
                    clicked.u = true;
                  } else {
                    content.style.display = "none";
                    clicked.u = false;
                  }
                }}
              >
                <div className="flex items-center text-lg font-bold justify-between px-2 py-3 bg-gray-200 border-b border-gray-400">
                  <p className="text-center uppercase px-3">
                    <i className="fa-solid fa-chevron-down text-xs pr-3 pl-2"></i>{" "}
                    Course Update and anything new
                  </p>
                  <span className="font-normal text-gray-700 text-sm">
                    4 lectures &#8226; 2min
                  </span>
                </div>
              </button>

              <button
                className="w-full border border-gray-400"
                onClick={() => {
                  const content = document.getElementById("dropdown_data_2");
                  if (!clicked.u) {
                    content.style.display = "block";
                    clicked.u = true;
                  } else {
                    content.style.display = "none";
                    clicked.u = false;
                  }
                }}
              >
                <div className="flex items-center text-lg font-bold justify-between px-2 py-3 bg-gray-200 border-b border-gray-400">
                  <p className="text-center uppercase px-3">
                    <i className="fa-solid fa-chevron-down text-xs pr-3 pl-2"></i>{" "}
                    PayPal
                  </p>
                  <span className="font-normal text-gray-700 text-sm">
                    4 lectures &#8226; 2min
                  </span>
                </div>
              </button>
              <ul
                className="px-2"
                id="dropdown_data_1"
                style={{ display: "none" }}
              >
                <li className=" py-2 ">
                  <div className="">
                    <label className=" block" htmlFor="">
                      Name on card
                    </label>
                    <input
                      className="text-xl bg-gray-50 border border-black block w-full p-3 mx-auto font-bold"
                      type="text"
                      placeholder="Name on card"
                    />
                  </div>
                </li>
                <li className=" py-2 ">
                  <div className="">
                    <label className=" block" htmlFor="">
                      Card number
                    </label>
                    <input
                      className="text-xl bg-gray-50 border border-black block w-full p-3 mx-auto font-bold"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                </li>
                <li className=" flex py-2 ">
                  <div className="">
                    <label className=" block" htmlFor="">
                      Expiry date
                    </label>
                    <input
                      className="text-xl bg-gray-50 border border-black block w-2/3 p-3 mx-auto font-bold"
                      type="text"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="">
                    <label className=" block" htmlFor="">
                      CVC/CVV
                    </label>
                    <input
                      className="text-xl bg-gray-50 border border-black block w-2/3 p-3 mx-auto font-bold"
                      type="text"
                      placeholder="CVC/CVV"
                    />
                  </div>
                </li>
                <li>
                  <div className="flex justify-center">
                    <input type="checkbox" id="" name="" className="w-4 " />
                    <p className="p-2.5 text-xl  text-left m-4">
                      Securely save this card for my later purchase
                    </p>
                  </div>
                </li>
              </ul>
              <ul
                className="px-2"
                id="dropdown_data_2"
                style={{ display: "none" }}
              >
                <li>
                  In order to complete your transaction, we will transfer you
                  over to PayPal's secure servers.
                </li>
                <li>
                  Unfortunately, PayPal does not support payments in VND
                  therefore your payment will be in USD.
                </li>
                <li>The amount you will be charged by Paypal is $13.49.</li>
              </ul>
            </div>
            <div className="col_right">
              <h1>Summary</h1>
              <p>Original Price:</p>
              <p>Discounts</p>
              <p>Total:</p>
              <p>
                By completing your purchase you agree to these Terms of Service.
              </p>
              <button>Complete Checkout</button>
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
