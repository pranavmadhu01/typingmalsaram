import React from "react";
import { useState } from "react";
import Singleuserdisplay from "./Singleuserdisplay/Singleuserdisplay";
import "./Userdisplay.css";
function Userdisplay({ data, currentUser }) {
  const max = 57;
  console.log(data);
  data = data.sort((a, b) => a.progress < b.progress);
  console.log(data);
  let userList = [];
  return (
    <div className="userdisplay_wrapper">
      {data.map((user) => (
        <Singleuserdisplay
          name={user.name.name}
          progress={user.progress}
          key={user.name.name}
          isOwner={currentUser===user.name.name}
        />
      ))}
    </div>
  );
}

export default Userdisplay;
