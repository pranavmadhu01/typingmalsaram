import Userdisplay from "../../components/Userdisplay/Userdisplay";
import Typingscreen from "../../components/Typingscreen/Typingscreen";
import React from "react";
import { useState, useEffect } from "react";
import socket from "../../socketConfig";
import { useLocation } from "react-router-dom";
import Timer from "../../components/Timer/TImer";
import logo from "../../images/TypingMalsaram.io.png";
import Results from "../../components/Results/Results";

const Home = () => {
  const { name } = useLocation().state;
  const [users, setUsers] = useState([]);
  const [started, setStarted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [finished, setFinished] = useState(false)
  const [winner, setWinner] = useState("")
  useEffect(() => {
    socket.emit("name", { name: name });
    socket.on("newuser", (data) => {
      setUsers(data);
    });
    socket.on("started", () => {
      setTimeout(() => setEnabled(true), 3000);
      setStarted(true);
    });
    socket.on("progress", (data) => {
      data = data.sort((a, b) => a.progress > b.progress);
      setUsers(data);
    });
    socket.on("finished", ({id, users}) => {
      const winner = users.filter((user) => user.id == id)[0].name.name
      setWinner(winner)
      setFinished(true)
    });
  }, []);
  const sendIndex = (progress) => {
    socket.emit("progress", progress);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      <Userdisplay data={users} currentUser={name} />
      <Typingscreen enabled={enabled} sendIndex={sendIndex} />
      <Timer started={started} />
      <img src={logo} alt="" className="footer-logo" />
      <Results finished={finished} winner={winner} setFinished={setFinished}/>
    </div>
  );
};

export default Home;
