import { getQueriesForElement } from "@testing-library/react";
import React from "react";
// import doneIcon from "../images/done-icon.png";
import doneImg from "../images/done.jpg";

const ConfirmedBooking = () => {
  return (
    <div>
      {/* style={{background:"green"}} */}
      <div className="comfirm">
        <h1>
          Booking has been <span>confirmed!</span>
        </h1>

        <div className="done-img">
          <img src={doneImg} alt="done" />
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
