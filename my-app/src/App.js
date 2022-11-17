import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {


  
  const [list, setList] = useState([])
  const [user, setUser] = useState("");
  const login = (e) => {
  e.preventDefault();
  axios
      .post("/username", {
          // username: document.getElementById("username").value,
          'username': user,

        })
        .then((res) => {
            // var d = res.data
            console.log(res.data);
            setList(res.data)
            console.log('hi')
            console.log(list)
            console.log(typeof res.data)

        });

};



  return (
    <div>
      <p>List: {list}</p>

    <form onSubmit={login} method="post">
    <p>
       <label>Ticker</label>
       <input onChange={(e) => setUser(e.target.value)} type="username"  id="username" name="username" />
   </p>
   <p>
      <input type="submit" className="w3-button w3-blue" value="Submit" />
   </p>
</form>
</div>
  );
}

export default App;