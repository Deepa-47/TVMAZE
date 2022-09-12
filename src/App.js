import React, { useEffect, useState } from "react";
import "./App.css";
import Actor from "./components/Actor";
import Shows from "./components/Shows";
import Header from "./components/Header";

function App() {
  const [actorData, setActorData] = useState([]);
  const [showData, setShowData] = useState([]);
  const [showActorData, setShowActorData] = useState([]);
  const [input, setInput] = useState("");
  const [radio, setRadio] = useState("");

  useEffect(() => {
    if (radio === "actor") {
      fetch(`https://api.tvmaze.com/search/people?q=${input}`).then(
        (result) => {
          result.json().then((response) => {
            setActorData(response);
          });
        }
      );
      //console.log(actorData)
    } else {
      if (input !== "") {
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(
          (result) => {
            result.json().then((response) => {
              setShowData(response);
            });
          }
        );
      }
      //console.log(showData)
    }
  }, [input]);

  useEffect(() => {
    if (actorData.length !== 0) {
      if (input === "") {
        setShowActorData([]);
      } else {
        fetch(
          `https://api.tvmaze.com/people/${actorData[0]?.person?.id}/castcredits?embed=show`
        ).then((result) => {
          result.json().then((response) => {
            setShowActorData(response);
          });
        });
        console.log(showActorData);
      }
    }
  }, [actorData, input]);

  const updateInputHandler = (event) => {
    setRadio(event.target.value);
    setActorData([]);
    setShowData([]);
    setShowActorData([]);
    setInput("");
  };
  return (
    <div className="App">
      <Header/>
      <form>
        <div className="inputDiv">
          <input className="radioInput"
            type="radio"
            value="actor"
            name="tv"
            onChange={updateInputHandler}
          />
          <label>Actor</label>
          <input
          className="radioInput"
            type="radio"
            value="show"
            name="tv"
            onChange={updateInputHandler}
          />
          <label>Show</label>
        </div>
        <div className="searchDiv">
          <input
            className="searchInput"
            type="search"
            placeholder="eg. akon"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>
      {radio === "actor" ? (
        showActorData.length !== 0 ? (
          <Actor data={showActorData} />
        ) : (
          <h2>No data</h2>
        )
      ) : radio == "show" ? (
        showData.length !== 0 ? (
          <Shows data={showData} />
        ) : (
          <h2>No data</h2>
        )
      ) : (
        <h2>No data</h2>
      )}
    </div>
  );
}

export default App;
