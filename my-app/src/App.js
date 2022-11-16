import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {

  // const [currentTime, setCurrentTime] = useState(0);
  // const [name, setName] = useState('Default')
  

  // useEffect(() => {
  //   fetch('/time').then(res => res.json()).then(data => {
  //     setCurrentTime(data.time);
  //   });
  // }, []);
  const [user, setUser] = useState("");
  const login = (e) => {
  e.preventDefault();
  axios
      .post("/username", {
          // username: document.getElementById("username").value,
          'username': user,

        })
        .then((res) => {
            console.log( res.data);
        });
};



  return (
    // <div className="App">
    //   <header className="App-header">

    //     ... no changes in this part ...

    //     <p>The current time is {currentTime}.</p>
    //     <p>{name}</p>


    //     {/* This is the form */}
    //     <form onSubmit={handleSubmit}>
    //       <label>Enter your name:
    //       <input 
    //         type="text" 
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //       </label>
    //       <input type="submit" />
    //     </form>


    //   </header>
    // </div>
    <form onSubmit={login} method="post">
    <p>
       <label htmlFor="email">Email</label>
       <input onChange={(e) => setUser(e.target.value)} type="username"  id="username" name="username" />
   </p>
   <p>
      <input type="submit" className="w3-button w3-blue" value="Login" />
   </p>
</form>
  );
}

export default App;