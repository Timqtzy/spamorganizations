import React from "react";
import EventRegistration from "../component/reg";
import Event from "../component/Event";
import "../App.css";
function Register() {
  return (
    <div className="font-poppins">
      <div className="flex items-center pb-24 s:pt-12 md:pt-28 lg:pt-28 ">
        <EventRegistration />
      </div>
    </div>
  );
}

export default Register;
