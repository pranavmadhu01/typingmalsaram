import io from "socket.io-client";
// const socket = io('http://192.168.29.177:3001')
const socket = io("http://localhost:3001", {
  transports: ["websocket", "polling", "flashsocket"],
});
export default socket;
