import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import UserInput from "./Components/UserInput";
import UserButton from "./Components/UserButton";
import ListGroup from "./Components/ListGroup";

function App() {
  return (
    <div>
      <UserInput />
      <UserButton />
      <ListGroup />
    </div>
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

*/
