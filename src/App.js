import React, {useState} from 'react';
import s from './App.module.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header"
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Routes, Route, Link } from "react-router-dom";


const App = () =>{
return(
   <div className={s.wrapper}>
    <Header/>
    <Navbar/>
    <div className={s.content}>
    <Routes>
    <Route path='/profile' element={<Profile/>}/>
      <Route path='/dialogs' element={<Dialogs/>}/>
      
      </Routes>
    </div>
    </div>
  )
}






export default App;
