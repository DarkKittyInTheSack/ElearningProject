import React from "react";
import EmptyProfile from "../../components/EmptyProfile";

const Subcriptions = () => {
  return (
    <div className="container mx-auto my-5">
      <h2 className="font-sans font-serif font-bold text-4xl my-3">
        Subcriptions
      </h2>
      <span className="font-normal text-lg">
        Manage your Udemy subcriptions
      </span>
      <EmptyProfile/>
    </div>
  );
};

export default Subcriptions;
