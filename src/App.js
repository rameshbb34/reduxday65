import { useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import IndianActors from "./components/IndianActors";

function App() {
  let dispatch = useDispatch();
  let storeObj = useSelector((store) => {
    return store;
  });
  let inputRef = useRef();
  return (
    <div className="App">
      <input ref={inputRef}></input>
      <button
        onClick={() => {
          dispatch({ type: "addActor", data: inputRef.current.value });
        }}
      >
        Add Actors
      </button>
      <h1>{storeObj.actors}</h1>
      <IndianActors />
    </div>
  );
}

export default App;
