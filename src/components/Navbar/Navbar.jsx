import React from "react";
import s from "./Navbar.module.css";
import { Routes, Route, Link } from "react-router-dom";



const Navbar = () =>{
    return(
        <nav className={s.nav}>
      <div className={s.item}> 
      <Link to="/profile">Profile</Link></div>
        <div className={`${s.item} ${s.active}`}>  
      <Link to="/dialogs">Messages</Link>
        </div>
        <div className={`${s.item} ${s.active}`}>  
      <Link to="/dialogs">Messages</Link>
        </div>
        <div className={`${s.item} ${s.active}`}>  
      <Link to="/dialogs">Messages</Link>
        </div>
        <div className={s.item}> 
      <a>Messages</a>
        </div>
    </nav>
    )
}


export default Navbar;