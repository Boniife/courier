import React from "react";
import "./Track.css";
import NavBar from "../Navbar/Navbar";
import Footer from "../Main/Footer";
import Bar from "../Navbar/Bar";
const Track = () => {
  return (
    <>
      <div className="track-page">
        <NavBar />
        <Bar />
        <div className="track-div">
          <h2>Shipment Details/Information</h2>
          <h6>
            Blue Dart Online tracking is the fastest way to find out where your
            shipment is. We offer Real time Update of your shipment
          </h6>
          <p>
            This Information serve as poof for the hipment listed above, Thank
            you for giving u this opportunity to serve you.
          </p>
          <h5>Blue Dart Sincerely Thank you For Your Patronage </h5>
          <h5> Email:</h5>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Track;
