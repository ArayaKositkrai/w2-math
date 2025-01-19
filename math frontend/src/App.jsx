import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [a, setA] = useState("0");
  const [b, setB] = useState("0");
  const [c, setC] = useState("0");

  const aAddB = async () => {
    try {
      const response = await fetch("http://localhost:3000/aAddB", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ a: parseFloat(a), b: parseFloat(b) }),
      });
      if (response.ok) {
        const data = await response.json();
        setC(data.result);
        console.log("a :", a, "b :", b, "c :", data.result);
      } else {
        console.error("Error fetching data:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const a2AddB2 = () => {
    const a2 = parseFloat(a);
    const b2 = parseFloat(b);

    if (isNaN(a2) || isNaN(b2)) {
      console.error("a and b must be numbers");
      return;
    }

    axios
      .post("http://localhost:3000/a2AddB2", {
        a: a2,
        b: b2,
      })
      .then((response) => {
        setC(response.data.result);
        console.log("a² + b² result:", response.data.result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const aPowB = () => {
    const aPow = parseFloat(a);
    const bPow = parseFloat(b);

    if (isNaN(aPow) || isNaN(bPow)) {
      console.error("a and b must be numbers");
      return;
    }

    axios
      .post("http://localhost:3000/aPowB", {
        a: aPow,
        b: bPow,
      })
      .then((response) => {
        setC(response.data.result);
        console.log("a**b result:", response.data.result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="app-container">
      <h1>Math</h1>
      <div className="input-container">
        a:{" "}
        <input type="text" value={a} onChange={(e) => setA(e.target.value)} />{" "}
        &nbsp; b:{" "}
        <input type="text" value={b} onChange={(e) => setB(e.target.value)} />
      </div>
      <div className="button-container">
        <button onClick={aAddB}>c = a + b</button>&nbsp;
        <button onClick={a2AddB2}>
          c = a<sup>2</sup> + b<sup>2</sup>
        </button>
        &nbsp;
        <button onClick={aPowB}>
          c = a<sup>b</sup>
        </button>
      </div>
      <div className="output-container">
        c: <input type="text" value={c} readOnly />
      </div>
    </div>
  );
}

export default App;
