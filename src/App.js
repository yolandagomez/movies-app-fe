import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [fruit, setFruit] = useState("");

  const handleFruitDropdownChange = (selectedFruit) => {
    setFruit(selectedFruit);
  };

  return (
    <div className="App">
      <h1>Movies App</h1>
      <div>
        <div>
          <h2>Main header</h2>
          <Dropdown
            onChange={handleFruitDropdownChange}
            options={["orange", "pear", "lemon"]}
            value={fruit}
          />
          <Dropdown options={["tennis", "soccer", "basketball"]} />
          <Dropdown options={["1", "2", "3"]} />

          <div>
            <img src="http://placekitten.com/800/200"></img>
          </div>
        </div>
        <div>
          <h2>
            All movies displayed<i class="far fa-heart"></i>
          </h2>
          <span class="square"></span>
          <span class="square">
            <img src="http://placekitten.com/200/200"></img>
            <div>
              <button>
                <i class="far fa-heart"></i>
              </button>
              <button>Add to Watch List</button>
              <button>Not interested</button>
            </div>
          </span>
          <span class="square">
            <img src="http://placekitten.com/200/200"></img>
          </span>
          <span class="square">
            <img src="http://placekitten.com/200/200"></img>
          </span>
          <span class="square">
            <img src="http://placekitten.com/200/200"></img>
          </span>
          <span class="square">
            <img src="http://placekitten.com/200/200"></img>
          </span>
          <span class="square">
            <img src="http://placekitten.com/200/200"></img>
          </span>
          <span class="square">
            <img src="http://placekitten.com/200/200"></img>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
