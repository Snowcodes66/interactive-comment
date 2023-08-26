import classes from "./Reply.module.css";
import userImg from "../assets/images/avatars/image-juliusomo.png";
import replyImg from "../assets/images/icon-reply.svg";
import deleteImg from '../assets/images/icon-delete.svg';
import editImg from '../assets/images/icon-edit.svg';
import ErrorModal from "./ErrorModal";
import add from '../assets/images/icon-plus.svg'
import minus from '../assets/images/icon-minus.svg'
import { useState,Fragment } from "react";

const Reply = (props) => {

   const [showInputRep, setShowInputRep]=useState(false)
   const [showModal, setShowModal] = useState(false);
   const [showEditInput, setShowEditInput] = useState(false);
   const [enteredEditReplyVal, setEnteredEditReplyVal] = useState(props.content);
   const [counter, setCounter]=useState(props.score)
   const [enteredVal, setEnteredVal] = useState("");

   const showInputHandler=()=>{
    setShowInputRep(!showInputRep)
   }
const showEditInputHandler=()=>{
  setShowEditInput(!showEditInput)
}
   const commentHandler=(e)=>{
           console.log(e.target.value)
           setEnteredVal(e.target.value)
   }

 const sendCommentHandler = (e) => {
   e.preventDefault()
   const userDate=new Date()
   const day=userDate.getDay()
   const month=userDate.getMonth()
   const year=userDate.getFullYear()

   props.onAddReplyRep(props.commentId,props.id,
    {
      id:Math.random() ,
      score:0,
      content:enteredVal,
      createdAt:`${day}/ ${month} / ${year}`,
      user:{
        image:{
          png:userImg
        },
        username: props.username,
      },
      replies:[]  
  }
   )

   setShowInputRep(false)
   console.log(enteredVal)
   setEnteredVal('')
 };
 const showModalHandler = () => {
  setShowModal(true);
};

const closeModalHandler=()=>{
  setShowModal(false)
  console.log('click')
}
const increaseCounterHandler=()=>{
  console.log('click')
  setCounter((val)=>{
    return val + 1  
  })
}
const decreaseCounterHandler=()=>{
  console.log('click')
 setCounter((val)=>{
  if (val===0) {
    return 0
  }
  return val - 1
 })
}

const deleteHandler=()=>{
  props.onDeleteReply(props.id,props.commentId)

}

const replyEditHandler=(e)=>{
setEnteredEditReplyVal(e.target.value)
}

const editReplyHandler=(e)=>{
  e.preventDefault()
  if (enteredEditReplyVal==='') {
    return
  }
  props.onEditReply(props.id, props.commentId, enteredEditReplyVal)
 
  setShowEditInput(false)
}


  return (
    <Fragment>      
       {showModal && <ErrorModal onRemove={deleteHandler} onClose={closeModalHandler}/>}
      <div className={`${classes.container}`}>
        <div className={classes.btnDiv}>
          <button onClick={increaseCounterHandler}><img src={add} alt="plus"/></button>
          <p>{counter}</p>
          <button onClick={decreaseCounterHandler}><img src={minus} alt="minus"/></button>
        </div>
        <div className={classes.content}>
          <div className={classes["cont-div-one"]}>
            <div className={classes["cont-div-one-in"]}>
              <img className={classes.comImg} src={props.imagePer} alt="pic" />
              <h3>{props.username}</h3>
              <h4>{props.createdAt}</h4>
            </div>
            { props.username !== "juliusomo" && <div className={classes["cont-div-one-inn"]}>
              <img onClick={showInputHandler} src={replyImg} alt="reply" />
              <p>Reply</p>
            </div>}
            { props.username === "juliusomo" && <div className={classes["cont-div-one-inn"]}>
              <img onClick={showModalHandler} src={deleteImg} alt="reply" /> <span>Delete</span>
              <img onClick={showEditInputHandler} src={editImg} alt="reply" /><span>Edit</span>              
            </div>}
          </div>
          <p>
           <span>@{props.replyTo}</span> {props.content}
          </p>
        </div>
      </div>
      

      {/* this is the mobile view code i love mobile view */}
     
        <div className={`${classes.containerMobile} ${classes.hidden}`}>
          <div className={classes["cont-div-one-in"]}>
            <img className={classes.comImg} src={props.imagePer} alt="pic" />
            <h3>{props.username}</h3>
            <h4>{props.createdAt}</h4>
          </div>
          <p className={classes.message}>{props.content}</p>
          <div className={classes["score-btn"]}>
            <div className={classes.btnDiv}>
              <button onClick={increaseCounterHandler}>
                <img src={add} alt="plus" />
              </button>
              <p>{counter}</p>
              <button onClick={decreaseCounterHandler}>
                <img src={minus} alt="minus" />
              </button>
            </div>
            <div className={classes["cont-div-one-inn"]}>
              {props.username !== "juliusomo" && (
                <div className={classes["cont-div-one-inn"]}>
                  <img onClick={showInputHandler} src={replyImg} alt="reply" />
                  <p>Reply</p>
                </div>
              )}
              {props.username === "juliusomo" && (
                <div className={classes["cont-div-one-inn"]}>
                  <img
                    onClick={showModalHandler}
                    src={deleteImg}
                    alt="delete"
                  />{" "}
                  <span>Delete</span>
                  <img
                    onClick={showEditInputHandler}
                    src={editImg}
                    alt="edit"
                  />
                  <span>Edit</span>
                </div>
              )}
            </div>
          </div>
        </div>     
        { showInputRep && <form onSubmit={sendCommentHandler }>
        <div className={classes.div}>
          <img src={userImg} alt="pic" />
          <input type="text" onChange={commentHandler} value={enteredVal} placeholder={ props.username} />
          <button type="submit">Reply</button>
        </div>
      </form>}
      {showEditInput && (
        <form onSubmit={editReplyHandler}>
          <div className={classes.div}>
            <img src={userImg} alt="pic" />
            <input
              type="text"
              onChange={replyEditHandler}
              value={enteredEditReplyVal}
              placeholder="Add a Comment..."
            />
            <button type="submit">Update</button>            
          </div>
        </form>)}
    </Fragment>
  );
};
export default Reply;
