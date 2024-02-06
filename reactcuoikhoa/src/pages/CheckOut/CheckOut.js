import { useSignals } from "@preact/signals-react/runtime";
import React from "react";

const CheckOut = () => {
  const clicked = useSignals(false);
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="container">
          <h2 className="text-5xl text-gray-950 font-bold p-8 mx-auto">
            Checkout
          </h2>
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div className="col_left">
              <div className="item_1">
                <h1 className="text-2xl text-gray-950 font-bold p-8 mx-auto">
                  Billing address
                </h1>
                <p className=" text-sm text-gray-950 font-bold p-4 ml-4">
                  country
                  <span className="text-sm text-slate-500 ps-60  ">
                    Required
                  </span>
                </p>

                <select
                  className=" text-gray-800 bg-gray-50 border border-gray-800 block w-1/2 p-4 ps-4 ml-8 font-bold"
                  name=""
                  id=""
                >
                  <option value="">VietNam</option>
                  <option value="">China</option>
                  <option value="">Thai Lan</option>
                </select>
                <p className="text-sm text-slate-500 p-4 ml-4">
                  Udemy is required by law to collect applicable transaction
                  taxes for purchases made in certain tax jurisdictions.
                </p>
              </div>
              <div className="item_2">
                <h2 className="text-2xl text-gray-950 font-bold p-4 ml-4">
                  Payment method
                  <span className="text-sm text-slate-500 ps-30 ml-40">
                    Secured connection
                  </span>
                </h2>

                <button
                  className="w-10/12 ml-8 border border-gray-400"
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
                  className="w-10/12 ml-8 border border-gray-400"
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
                  <li className=" w-9/12 ml-8 py-2 ">
                    <div className="">
                      <label
                        className=" text-sm text-gray-950 font-bold"
                        htmlFor=""
                      >
                        Name on card
                      </label>
                      <input
                        className="text-md bg-gray-50 border border-black block w-full p-2 mx-auto font-bold"
                        type="text"
                        placeholder="Name on card"
                      />
                    </div>
                  </li>
                  <li className=" w-9/12 ml-8  py-2 ">
                    <div className="">
                      <label
                        className=" text-sm text-gray-950 font-bold"
                        htmlFor=""
                      >
                        Card number
                      </label>
                      <input
                        className="text-md bg-gray-50 border border-black block w-full p-2 mx-auto font-bold"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                  </li>
                  <li className=" flex  ">
                    <div className="">
                      <label
                        className=" text-sm text-gray-950 font-bold ps-4 ms-14 "
                        htmlFor=""
                      >
                        Expiry date
                      </label>
                      <input
                        className="text-md bg-gray-50 border border-black block w-2/4 p-2 mx-auto font-bold"
                        type="text"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="">
                      <label
                        className="text-sm text-gray-950 font-bold ps-4 ms-14 "
                        htmlFor=""
                      >
                        CVC/CVV
                      </label>
                      <input
                        className="text-md bg-gray-50 border border-black block w-2/4 p-2 mx-auto font-bold"
                        type="text"
                        placeholder="CVC/CVV"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="flex  p-4 ms-2">
                      <input
                        type="checkbox"
                        id=""
                        name=""
                        className="w-4 p-3 m-2"
                      />
                      <p className=" text-md p-2 font-bold  ">
                        Securely save this card for my later purchase
                      </p>
                    </div>
                  </li>
                </ul>
                <ul
                  className=""
                  id="dropdown_data_2"
                  style={{ display: "none" }}
                >
                  <li className="text-md text-gray-950  p-4 ps-4 ms-4">
                    In order to complete your transaction, we will transfer you
                    over to PayPal's <br /> secure servers.
                  </li>
                  <li className="text-md text-gray-950  p-1 ps-4 ms-4 ">
                    <i
                      class="fa-solid fa-triangle-exclamation "
                      // style="color: #FFD43B;"
                    ></i>
                    Unfortunately, PayPal does not support payments in VND
                    therefore your payment will be in USD.
                  </li>
                  <li className="text-md text-gray-950 font-bold p-1 ps-4 ms-4">
                    The amount you will be charged by Paypal is $13.49.
                  </li>
                </ul>
              </div>
              <div className="item_3">
                <h2 className="text-2xl text-gray-950 font-bold p-4 ml-4">
                  Order details
                </h2>
                <p className="  text-sm font-bold p-4 ml-4">
                  The Complete Python Bootcamp From Zero to Hero in Python
                  <span className="text-slate-500 p-4 ml-4">₫1,999,000</span>
                </p>
              </div>
            </div>
            <div className="col_right bg-slate-100">
              <h1 className="text-2xl text-gray-950 font-bold p-8 mx-auto">
                Summary
              </h1>
              <div className="border-b  ">
                <p className=" text-sm text-gray-950 ps-8 mx-auto ">
                  Original Price:
                </p>
                <p></p>
              </div>
              <div className=" ">
                <p className="text-lg text-gray-950 font-bold ps-8 p-4 mx-auto">
                  Total:
                </p>
                <p className="text-sm text-slate-500 p-8 mx-auto">
                  By completing your purchase you agree to these Terms of
                  Service.
                </p>
                <button
                  type="submit"
                  className="text-xl bg-violet-600 border-black block w-2/4 p-3 ml-20 font-bold"
                >
                  Complete Checkout
                </button>
                <span className="text-sm text-slate-500 p-1 ml-20">
                  30-Day Money-Back Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
