import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import s from './Dialogs.module.css'






const Message = (props) =>{
   return(
            <div className={s.message}>
               {props.message}
            </div>
   )
}

const DialogsItem = (props) =>{
   let path = `/dialogs/` + props.id

   
   return( <div className={s.dialog}>
      <Link  to={path}>{props.name}</Link>
      </div>
      
   )
}

const Dialogs = (props) => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
            <DialogsItem name='Денис' id='1' />
            <DialogsItem name='Дима'id='2' />
            <DialogsItem name='Андрей' id='3'/>
         </div>
         <div className={s.messages}>
         <Message message="Привет"/>
         <Message message="Сообщение 2"/>
         <Message message="Сообщение 3"/>
         </div>
      </div>)
}



export default Dialogs;