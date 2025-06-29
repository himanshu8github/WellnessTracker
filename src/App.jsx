import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Dashboard />
      </div>
    </>
  );
}

export default App;
