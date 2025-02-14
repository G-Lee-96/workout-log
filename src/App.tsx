// import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Workout from "./pages/Home/Workout/Workout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Workouts" element={<Workout />} />
        </Routes>
        <Navbar></Navbar>
      </Router>
    </>
  );
}

export default App;
