import React, { useState } from "react";

function App() {
  const [fact, setFact] = useState("");

  const fetchFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact("Failed to fetch fact. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Random Cat Fact</h1>
      <button onClick={fetchFact}>Get Fact</button>
      <p style={{ marginTop: "20px" }}>{fact}</p>
    </div>
  );
}

export default App;
