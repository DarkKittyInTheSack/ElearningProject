import React from "react";

const LearningReminder = () => {
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-2xl mb-10 mt-5">Learning Reminders</h2>

      <ul className="mb-5 mt-3">
        <li>
          <h2 className="font-bold text-lg my-3 text-gray-600">
            Calendar events
          </h2>
        </li>
        <li>
          <p className="font-normal text-base">
            Learning a little each day adds up. Research shows that students who
            make learning a habit are more likely to reach their goals.
            <br />
            Set time aside to learn and get reminders using your learning
            scheduler.
          </p>
          <span className="font-normal text-sm text-gray-600 block my-3">
            Requires Google Calendar, Apple Calendar, or Outlook
          </span>
        </li>
        <li>
          <button className="font-bold text-base bg-purple-500 p-3 text-white">
            Schedule Learning time
            <i className="fa-solid fa-circle-plus mx-2"></i>
          </button>
        </li>
      </ul>

      <ul className="my-7">
        <li>
          <h2 className="font-bold text-lg my-3 text-gray-600">
            Push Notifications
          </h2>
        </li>
        <li>
          <p className="font-normal text-base">
            Don’t want to schedule time blocks? Set a learning reminder to get
            push notifications from the learnit mobile app.
          </p>
        </li>
        <li>
          <p className="font-bold text-sm mt-5">
            Text me a link to download the app
          </p>
          <div className="border border-black w-1/2 my-2">
            <select
              name=""
              id=""
              className="py-3 font-normal text-base outline-none w-full"
            >
              <option value="" className="w-full rounded-none">
                Lorem ipsum dolor sit amet.
              </option>
            </select>
          </div>
          <div className="my-2 flex">
            <input
              type="text"
              className="p-3 border border-black"
              placeholder="123456789"
            />
            <button className="font-bold text-base bg-black text-white p-3">
              Send
            </button>
          </div>
          <span className="font-normal text-xs text-gray-500">
            By providing your phone number, you agree to receive a one-time
            automated text message with a link to get app. Standard messaging
            rates may apply.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default LearningReminder;
