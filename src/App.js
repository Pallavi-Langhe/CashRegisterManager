import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [billInput, setBillInput] = useState(0);
  const [cashInput, setCashInput] = useState(0);
  const [displayStatement, setDisplayStatement] = useState("");

  var noteVal = [2000, 500, 100, 50, 20, 10, 5, 1];
  var non = [0, 0, 0, 0, 0, 0, 0, 0];

  //note values
  const [twoThousand, setTwoThousand] = useState(0);
  const [fiveHundred, setFiveHundred] = useState(0);
  const [hundred, setHundred] = useState(0);
  const [fifty, setFifty] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [ten, setTen] = useState(0);
  const [five, setFive] = useState(0);
  const [one, setOne] = useState(0);

  function billEventHandler(event) {
    setBillInput(event.target.value);
  }

  function cashEventHandler(event) {
    if (billInput === 0) {
      alert("Enter bill amount first!");
      event.target.value = "";
    } else {
      setCashInput(event.target.value);
    }
  }

  function billUpdater() {
    var diff = cashInput - billInput;

    for (let i = 0; i < 7; i++) {
      if (diff === 0) {
        non[i] = 0;
      } else {
        if (noteVal[i] > cashInput) {
          non[i] = 0;
        } else {
          non[i] = Math.floor(diff / noteVal[i]);
          diff = diff % noteVal[i];
        }
      }
    }
  }

  function clickEventHandler() {
    if (billInput > cashInput) {
      setDisplayStatement("Do you want to wash plates?");
    } else {
      billUpdater();

      setTwoThousand(non[0]);
      setFiveHundred(non[1]);
      setHundred(non[2]);
      setFifty(non[3]);
      setTwenty(non[4]);
      setTen(non[5]);
      setFive(non[6]);
      setOne(non[7]);
    }
  }

  return (
    <div className="App">
      <h1 className="themed">Cash Register Manager</h1>
      <h3>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </h3>

      <div>
        <h2>Bill Amount:</h2>
        <input onChange={billEventHandler}></input>
      </div>

      <div>
        <h2>Cash Given:</h2>
        <input onChange={cashEventHandler}></input>
      </div>

      <button onClick={clickEventHandler}>Check</button>

      <div>{displayStatement}</div>

      <table>
        <caption>Return Change</caption>
        <tbody>
          <tr>
            <th>No. of Notes</th>
            <td>{twoThousand}</td>
            <td>{fiveHundred}</td>
            <td>{hundred}</td>
            <td>{fifty}</td>
            <td>{twenty}</td>
            <td>{ten}</td>
            <td>{five}</td>
            <td>{one}</td>
          </tr>
          <tr>
            <th>Notes</th>
            <td>2000</td>
            <td>500</td>
            <td>100</td>
            <td>50</td>
            <td>20</td>
            <td>10</td>
            <td>5</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
