import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { useEffect, useState } from "react";
import "./Typingscreen.css";

function Typingscreen({enabled, sendIndex}) {
  let len;

 
  let demostring = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const [index, setIndex] = useState(0)
  const [pending_text, setPT] = useState(demostring)
  const [finished_text, setFT] = useState("")
  const handlekeyboardinput = (event) => {
    if(!enabled) {
      return
    }
    const key = event.key
    if(key === demostring[index]) {
      setIndex(index+1)
    }
  };
  useEffect(() => {
    setFT(demostring.substring(0, index))
    setPT(demostring.substring(index, demostring.length))
    const progress = index/demostring.length
    sendIndex(progress)
  }, [index]);
  useEffect(() => {
    document.getElementById('focusele').focus()
  },[])

  return (
    <div
      tabIndex={0}
      className="typingscreen_wrapper"
      onKeyDown={handlekeyboardinput}
      id="focusele"
    >
      <span className="finished-text">{finished_text}</span>
      <span className={enabled? "pending": "blocked"}>{pending_text}</span>
    </div>
  );
}

export default Typingscreen;
