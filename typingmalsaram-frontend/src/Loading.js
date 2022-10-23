import React from "react";
import "./Loading.css";
import logo from "./images/TypingMalsaram.io.png";

function Loading() {
  return (
    <div className="loading_wrapper">
      <h1 className="shimmer">
        <span style={{ color: "#05BFCE" }}>Typi</span>
        <span style={{ color: "#0060FF" }}>ng</span>
        <span style={{ color: "#FECD0F" }}>Malsa</span>
        <span style={{ color: "#EE1800" }}>ram</span>
        <span style={{ color: "#95BF15" }}>.</span>
        <span style={{ color: "#215B67" }}>io</span>
      </h1>
      {/* <img src={logo} alt="" /> */}
    </div>
  );
}

export default Loading;
