import React from "react";
import { useSelector } from "react-redux";

function TollywoodActors() {
  let storeObj = useSelector((store) => {
    return store;
  });
  return (
    <div>
      <h1>TollywoodActors</h1>
      <h2>{storeObj.actors}</h2>
    </div>
  );
}

export default TollywoodActors;
