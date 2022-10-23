import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={loading ? <Loading /> : <Landing />}></Route>
        <Route path="/race" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
