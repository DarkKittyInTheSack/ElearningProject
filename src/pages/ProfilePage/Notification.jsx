import React from "react";
import { Card, Checkbox } from "antd";

const Notification = () => {
  return (
    <div>
      <Card
        title={
          <div className="font-bold text-2xl text-center pb-5">
            <p>Notification</p>
            <span className="font-normal text-base">
              Turn promotional email notifications from learnit on or off
            </span>
          </div>
        }
        bordered={false}
        style={{ width: "100%", borderRadius: "0px" }}
      >
        <ul className="font-bold text-base w-2/3 mx-auto">
          <li>
            <h2>I want to receive:</h2>
          </li>

          <li>
            <div className="block p-3 border border-black my-2">
              <Checkbox className="font-bold text-lg">
                Promotions, courses recomendations, and helpful resources from
                learnit.
              </Checkbox>
            </div>
            <div className="block p-3 border border-black my-2">
              <Checkbox className="font-bold text-lg">
                Announcements courses from instructors whose couses I'm enrols
                in
              </Checkbox>
              <span className="mx-auto font-normal text-base block px-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae odio ipsam commodi magni maxime fuga, accusamus
                tenetur incidunt soluta totam!
              </span>
            </div>

            <div className="block p-3 border border-black my-5">
              <Checkbox className="font-bold text-lg">
                Don't send me any promotional email
              </Checkbox>
              <span className="mx-auto font-normal text-base block px-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae odio ipsam commodi magni maxime fuga, accusamus
                tenetur incidunt soluta totam!
              </span>
            </div>

            <button className=" bg-black p-3 text-lg text-white my-5 block font-bold">
              Save
            </button>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Notification;
