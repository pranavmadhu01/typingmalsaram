import { useState } from "react";
import React from "react"
import { useNavigate } from "react-router-dom";
import "./Landing.css";
const Landing = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/race', {state: {name: name}})
  };
  return (
    <div className="landing-root">
      <form className="name">
        <input
          className="name-input"
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit" className="name-submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};
export default Landing;
