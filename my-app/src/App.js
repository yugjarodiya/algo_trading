import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [currentTime, setCurrentTime] = useState(0);
  const [name, setName] = useState('Default')
  

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("making request")

   fetch("/result", {
        method:"POST",
        cache: "no-cache",
        headers:{
            "content_type":"application/json",
        },
        body:JSON.stringify(name)
        }
    ).then(response => {
    return response.json()
  })
  .then(json => {
    console.log(json[0])
    //this.setState({playerName: json[0]})
  })
  }

  return (
    <div className="App">
      <header className="App-header">

        ... no changes in this part ...

        <p>The current time is {currentTime}.</p>
        <p>{name}</p>


        {/* This is the form */}
        <form onSubmit={handleSubmit}>
          <label>Enter your name:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </label>
          <input type="submit" />
        </form>


      </header>
    </div>
  );
}

export default App;