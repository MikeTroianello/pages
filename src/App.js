import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [catFact, setCatfact] = useState("");

  useEffect(() => {
    axios.get("https://catfact.ninja/fact").then((fact) => {
      console.log("FACT", fact);
      setCatfact(fact.data.fact);
    });
  }, []);

  return (
    <div className="App">
      <h1>Cat Fact:</h1>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
