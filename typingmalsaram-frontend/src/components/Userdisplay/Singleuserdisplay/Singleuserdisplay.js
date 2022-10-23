import React from "react";
import "./Singleuserdisplay.css";

function Singleuserdisplay({ name, progress, isOwner }) {
  const spaces = 40;
  let progressBar = ">";
  for (let i = 0; i < spaces; i++) {
    progressBar += " ";
  }

  const numbertodisplay = Math.floor(spaces * progress);
  console.log(progress);
  for (let i = 0; i < numbertodisplay; i++) {
    progressBar = progressBar.replace(">", "-");
    progressBar = progressBar.replace(" ", ">");
  }
  return (
    <div className="singleuserdisplay_wrapper">
      <span className="user_name">
        {name}
        {isOwner ? "*" : ""}
      </span>
      <div className="dot_progress_wrapper">
        <pre>|{progressBar}|</pre>
      </div>
    </div>
  );
}

export default Singleuserdisplay;
