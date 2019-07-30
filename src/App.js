import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = props => (
  <div className="App">
    <header className="App-header">
      <h4>Babyfoot Score !</h4>
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <table>
          <tbody>
            <tr>
              <th
                style={{ paddingRight: "50px", paddingBottom: "20px" }}
                scope="col"
              >
                Players
              </th>
              <th
                style={{
                  paddingRight: "50px",
                  paddingLeft: "50px",
                  paddingBottom: "20px"
                }}
                scope="col"
              >
                Current match score
              </th>
              <th
                style={{ paddingLeft: "50px", paddingBottom: "20px" }}
                scope="col"
              >
                Saisons Win
              </th>
            </tr>

            {props.players.map((player, id) => (
              <tr key={id}>
                <th
                  style={{ paddingRight: "50px", paddingBottom: "20px" }}
                  scope="row"
                >
                  {player}
                </th>
                <th
                  style={{ paddingRight: "50px", paddingBottom: "20px" }}
                  scope="row"
                >
                  {props.currentMatch[player]}
                </th>
                <th
                  style={{ paddingRight: "50px", paddingBottom: "20px" }}
                  scope="row"
                >
                  {props.saison[player] ? props.saison[player] : "0"}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </header>
  </div>
);

export default App;
