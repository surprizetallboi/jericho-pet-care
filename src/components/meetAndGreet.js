import React from "react";
import "./meetAndGreet.css";

export default function MeetAndGreet() {
  return (
    <div className="meetAndGreet">
      <div className="MAGLargeText">ASK ABOUT MY AVAILABILITY</div>
      <h2 className="MAGSmallText">Booking a meet & greet is free</h2>
      <a href="tel:+1-682-583-4058" className="phoneNum">
        <button class="button-1">
          682-583-4058
        </button>
      </a>
    </div>
  );
}
