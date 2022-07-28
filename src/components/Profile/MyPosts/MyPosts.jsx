import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post.jsx";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

const MyPosts = () => {
  return (<div>
    My posts
    <div>
      <div>
        <textarea></textarea>
        <div>
        <Button variant="warning">Отправить</Button>
        </div>
      </div >
    </div >
    <div className={s.posts}>
      <Post message='первый пост' like='100' />
      <Post message='второй  пост' like='32'/>
      <Post message='третий  пост' like='75' />
    </div>
  </div>)
}


export default MyPosts;