import React from "react";
import Header from "../components/Header";
import Seats from "../components/Seats";
//import "../styles/Book.css";

const Book = () => {
  return (
    <div>
      <Header />
      <div className="bookcont">
        <div className="bookingInfo"></div>

        <div className="seatsContainer">
          <Seats />
        </div>
      </div>
      {/* <button className="BookButton">Book</button> */}
    </div>
  );
};

export default Book;
