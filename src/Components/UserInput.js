import axios from "axios";
import React, { useState, useEffect } from "react";
import ListGroup from "./ListGroup";

function UserInput() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [searching, setSearching] = useState(false);
  const [text, setText] = useState("");
  const [list, setList] = useState({ items: [] });

  function makePostRequest() {
    setSearching(true);
    axios
      .post("http://localhost:5000/api/chests", { id: text })
      .then((response) => {
        setData(response.data);
        setList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
    setSearching(false);
  }

  return (
    <>
      <h1 className="page-title">Let's Get Your Chest Cycle</h1>
      <div className="form-group">
        <label htmlFor="formInput1" className="form-label">
          User-Tag
        </label>
        <input
          type="text"
          className="form-control"
          id="formInput1"
          placeholder="#92RULP26"
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button
          className={
            searching === false
              ? "btn btn-primary btn-lg"
              : "btn btn-primary btn-lg disabled"
          }
          onClick={makePostRequest}
        >
          Find
        </button>
        <h3 className="status-text">{searching === true && "Searching..."}</h3>
        <p className="error-text">{error === true && "There is an error"}</p>
        <h5 className="result-title">
          {!(data === null) && "Your Upcoming Chests"}
        </h5>
        <ListGroup items={list.items} />
      </div>
    </>
  );
}

export default UserInput;
