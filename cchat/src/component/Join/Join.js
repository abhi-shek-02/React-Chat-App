import React, { useState } from 'react'
import "./Join.css";
import logo from "../../image/logo192.png"
import { Link } from 'react-router-dom';

let user;
const Join = () => {

    const [name, setname] = useState("");
    console.log(name);
    

    const sendUser=()=>{
       user = document.getElementById('joinInput').value;
       document.getElementById('joinInput').value="";
    }
    return (
        <div className="JoinPage">
            <div className="JoinContainer">
            <img src={logo} alt="logo"/>
               <h1>Talk To Friend</h1>
               <input onChange={(e)=>setname(e.target.value)} placeholder="Enter Your Name" type="text" id="joinInput" />
               <Link onClick={(e)=>!name?e.preventDefault():null} to="/chat">    <button onClick={sendUser} className="joinbtn">Log In</button>   </Link>
            </div>
        </div>
    )
}

export default Join
export {user}