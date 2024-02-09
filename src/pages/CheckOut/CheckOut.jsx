import { useSignals } from "@preact/signals-react/runtime";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { fetchCoursesRecoil } from "../../redux/recoil/coursesRecoil";
import { getLocalStore } from "../../utils/local";
import { CoursesService } from "../../services/CoursesService";

const CheckOut = () => {
  const clicked = useSignals(false);
  const user = getLocalStore("user_info");
  const courses = useRecoilValue(fetchCoursesRecoil);
  const [successData, setSuccessData] = useState('')
  const [failData, setFailData] = useState('')

  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="container mx-auto">
          <h2 className="text-5xl text-gray-950 font-bold p-8">Checkout</h2>
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div className="col_left mb-5">
              <div className="item_1 px-8">
                <h1 className="text-2xl text-gray-950 font-bold pt-8">
                  Billing Address
                </h1>
                <div className="flex justify-between my-3 items-center w-full">
                  <p className=" text-sm text-gray-950 font-bold">Country</p>
                  <span className="text-sm text-right text-slate-500 font-bold w-1/2">
                    Required
                  </span>
                </div>

                <select
                  className=" text-gray-800 bg-gray-50 border border-gray-800 block w-1/2 p-4 ps-4 font-bold"
                  name=""
                  id=""
                >
                  <option value="">VietNam</option>
                  <option value="">China</option>
                  <option value="">Thai Lan</option>
                </select>
                <p className="text-sm text-slate-500 my-4">
                  Udemy is required by law to collect applicable transaction
                  taxes for purchases made in certain tax jurisdictions.
                </p>
              </div>
              <div className="item_2 px-8">
                <div className="flex justify-between my-3 items-center w-full">
                  <p className=" text-2xl text-gray-950 font-bold">
                    Payment method
                  </p>
                  <span className="text-sm text-right text-slate-500 font-bold w-1/3">
                    Secured connection
                  </span>
                </div>

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
                      Course Update
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
                  className=" my-4 w-10/12"
                  id="dropdown_data_2"
                  style={{ display: "none" }}
                >
                  <li className="text-md text-gray-950 my-3">
                    In order to complete your transaction, we will transfer you
                    over to PayPal's secure servers.
                  </li>
                  <li className="text-md text-gray-950 mb-3">
                    <i
                      class="fa-solid fa-triangle-exclamation me-2"
                      // style="color: #FFD43B;"
                    ></i>
                    Unfortunately, PayPal does not support payments in VND
                    therefore your payment will be in USD.
                  </li>
                  <li className="text-md text-gray-950 font-bold">
                    The amount you will be charged by Paypal is $13.49.
                  </li>
                </ul>
              </div>
              <div className="item_3 px-8">
                <h2 className="text-2xl text-gray-950 font-bold">
                  Order details
                </h2>
                <div className="flex w-full justify-between items-center font-bold">
                  <p className=" w-10/12 text-sm">{courses.tenKhoaHoc}</p>
                  <span className="text-slate-500">₫200</span>
                </div>
              </div>
            </div>
            <div className="col_right bg-slate-100 px-8">
              <h1 className="text-2xl text-gray-950 font-bold py-8">Summary</h1>
              <div className="border-b  ">
                <p className=" text-sm text-gray-950 pb-5">Original Price:</p>
                <p></p>
              </div>
              <div className=" ">
                <p className="text-lg text-gray-950 font-bold my-3">Total:</p>
                <p className="text-sm text-slate-500 w-full text-center">
                  By completing your purchase you agree to these Terms of
                  Service.
                </p>
                <button
                  type="submit"
                  className="text-xl bg-violet-600 border-black block w-3/4 p-3 my-2 mx-auto font-bold"
                  onClick={() => {
                    CoursesService.subscribeCourse({
                      maKhoaHoc: courses.maKhoaHoc,
                      taiKhoan: user.taiKhoan,
                    })
                      .then((result) => {
                        setFailData('')
                        setSuccessData('You has been subscribe this courses')
                      })
                      .catch((err) => {
                        setFailData('Sorry, you cannot subscribe this courses')
                        setSuccessData('')
                      });
                  }}
                >
                  Complete Checkout
                </button>
                <span className="text-sm text-slate-500 block mx-auto mt-1 mb-3 w-full text-center">
                  30-Day Money-Back Guarantee
                </span>
                <span className="font-normal text-green-600 w-full text-center text-sm inline-block" id="checkout_notification">{successData}</span>
                <span className="font-normal text-red-600 w-full text-center text-sm inline-block" id="checkout_notification_fail">{failData}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
