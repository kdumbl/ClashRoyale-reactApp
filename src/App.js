import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import UserInput from "./Components/UserInput";
import UserButton from "./Components/UserButton";
import ListGroup from "./Components/ListGroup";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchData() {
    setLoading(true);
    setError(null);

    // Fetch data from the backend
    fetch("http://localhost:5000/api/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }
  return (
    <>
      <UserInput />
      <UserButton />
      <ListGroup />

      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Get Chest Cycle</h1>
        <button
          onClick={fetchData}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Go!
        </button>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {data && (
          <div style={{ marginTop: "20px" }}>
            <h2>Fetched Data:</h2>
            <pre
              style={{
                backgroundColor: "#f4f4f4",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </>
  );
}
export default App;

//Backend connection that I had
/*
const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
In app component function

return (
    <div className="App">
      {
        <div className="products">
          {data?.map((data) => {
            return (
              <div key={data.id}>
                <h1>{data.test}</h1>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
  nice

*/
