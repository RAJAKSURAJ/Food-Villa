import React from "react";
import "./App.css";
function Footer() {
  return (
    <div className="h-[400px] col-12 bg-black flex justify-around pt-10 rounded-lg mt-1">
      <div className="text-white row-span-1">
        <img
          className="h-20 "
          alt="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwui47ORPwJbHOG9SgNTvxcm7CGGPPdWQzIp0Eb2w5A&s"
        />
        <h1 className="ps-3">Food Villa</h1>
      </div>
      <div className="text-white row-span-1">
        <div>Company</div>
        <div className="py-1">About</div>
        <div className="py-1">Career</div>
        <div className="py-1">Team</div>
      </div>
      <div className="text-white  ">
        <h1>Contact us</h1>
        <div className="py-1">Help & Support</div>
        <div className="py-1">Partner with us</div>
      </div>
      <div className="text-white  ">
        <h1>We deliver to:</h1>
        <div className="py-1">Mumbai</div>
        <div className="py-1">Banglore</div>
        <div className="py-1">Hyderabad</div>
        <div className="py-1">Delhi</div>
        <div className="py-1">Pune</div>
      </div>
    </div>
  );
}

export default Footer;
