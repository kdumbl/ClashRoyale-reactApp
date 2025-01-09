import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import UserInput from "./Components/UserInput";
import UserButton from "./Components/UserButton";
import ListGroup from "./Components/ListGroup";

function App() {
  return (
    <div className="container">
      <div className="form-container">
        <UserInput />
      </div>
      <div className="image-container">
        <img src="/images/ddddd.jpg" alt="img" className="big-image" />
        <img src="/images/gems.png" alt="img" className="big-image" />
      </div>
    </div>
  );
}
export default App;
