import juliu from "../assets/images/avatars/image-juliusomo.png";
import classes from "./Form.module.css";
import { useState } from "react";
// import DataJason from "./Data";

const Form = (props) => { 
  const [enteredVal, setEnteredVal] = useState(""); 
  const userDate=new Date()
  const day=userDate.getDay()
  const month=userDate.getMonth()
  const year=userDate.getFullYear()
    const commentHandler=(e)=>{  
            setEnteredVal(e.target.value)
    }
  const sendCommentHandler = (e) => {
    e.preventDefault()
    if (enteredVal==='') {
      return
    }
  props.onAddComment({
      id:Math.random() ,
      score:0,
      content:enteredVal,
      createdAt:`${day}/ ${month} / ${year}`,
      user:{
        image:{
          png:juliu
        },
        username: "juliusomo",
      },
      replies:[]
    
  }) 
  setEnteredVal('')
     // DataJason.comments.push({
    //   id:Math.random() ,
    //   score:0,
    //   content:enteredVal,
    //   createdAt:'today',
    //   user:{
    //     images:{
    //       png:juliu
    //     },
    //     username: "juliusomo",
    //   },
    //   replies:[]
    // })
  };

  return (
    // <form onSubmit={sendCommentHandler }>
    //   <div className={classes.div}>
    //     <img src={juliu} alt="pic" />
    //     <input type="text" onChange={commentHandler} value={enteredVal} placeholder="Add a Comment..." />
    //     <button type="submit">send</button>
    //   </div>
    // </form>
    <form onSubmit={sendCommentHandler}>
    <input
      className={classes.input}
      type="text"
      onChange={commentHandler}
      value={enteredVal}
      placeholder="Add a Comment..."
    />
    <div className={classes.div}>
      <img src={juliu} alt="pic" />
      <input
        className={classes.deskInp}
        type="text"
        onChange={commentHandler}
        value={enteredVal}
        placeholder="Add a Comment..."
      />
      <button type="submit">send</button>
    </div>
  </form>
  );
};
export default Form;
