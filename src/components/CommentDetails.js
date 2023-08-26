import classes from "./CommentDetails.module.css";
import replyImg from "../assets/images/icon-reply.svg";
import { useState, Fragment } from "react";
import userImg from "../assets/images/avatars/image-juliusomo.png";
import deleteImg from "../assets/images/icon-delete.svg";
import editImg from "../assets/images/icon-edit.svg";
import add from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import ErrorModal from "./ErrorModal";

const CommentDetails = (props) => {
  const [showInput, setShowInput] = useState(false);
  const [showEditInput, setShowEditInput] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(props.score);
  const [enteredVal, setEnteredVal] = useState("");
  const [enteredEditVal, setEnteredEdit] = useState(props.content);
  // const [btnEditClick, setEnteredEditBtn] = useState(false);

  const showInputHandler = () => {
    setShowInput(!showInput);
  };
  const showEditInputHandler = () => {
    setShowEditInput(true);
  };

  const commentHandler = (e) => {
    setEnteredVal(e.target.value);
  };

  const sendCommentHandler = (e) => {
    e.preventDefault();
    const userDate = new Date();
    const day = userDate.getDay();
    const month = userDate.getMonth();
    const year = userDate.getFullYear();

    if (enteredVal === "") {
      return;
    }
    props.onAddReply(props.id, {
      id: Math.random(),
      score: 0,
      content: enteredVal,
      createdAt: `${day}/ ${month} / ${year}`,
      user: {
        image: {
          png: userImg,
        },
        username: "juliusomo",
      },
      replies: [],
    });
    setShowInput(false);
    setEnteredVal("");
  };

  const showModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
    console.log("click");
  };
  const increaseCounterHandler = () => {
    console.log("click");
    setCounter((val) => {
      return val + 1;
    });
  };

  const decreaseCounterHandler = () => {
    console.log("click");
    setCounter((val) => {
      if (val === 0) {
        return 0;
      }
      return val - 1;
    });
  };

  const addToCommentHandler = () => {
    console.log("sd");
  };

  const deleteHandler = () => {
    props.onDeleteComment(props.id);
  };
  const editHandler = (e) => {
    setEnteredEdit(e.target.value);
    console.log(e.target.value);
  };

  const editCommentHandler = (e) => {
    e.preventDefault();
    console.log(enteredEditVal);
    if (enteredEditVal === "") {
      return;
    }
    props.onEditComment(enteredEditVal, props.id);
    setShowEditInput(false);
  };

  return (
    <Fragment>
      {showModal && (
        <ErrorModal onRemove={deleteHandler} onClose={closeModalHandler} />
      )}
      <div className={`${classes.container}`}>
        <div className={classes.btnDiv}>
          <button onClick={increaseCounterHandler}>
            <img src={add} alt="plus" />
          </button>
          <p>{counter}</p>
          <button onClick={decreaseCounterHandler}>
            <img  src={minus} alt="minus" />
          </button>
        </div>
        <div className={classes.content}>
          <div className={classes["cont-div-one"]}>
            <div className={classes["cont-div-one-in"]}>
              <img className={classes.comImg} src={props.imagePer} alt="pic" />
              <h3>{props.username}</h3>
              <h4>{props.createdAt}</h4>
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
          <p>{props.content}</p>
        </div>
      </div>
      


 {/* this is the mobile view code i love mobile view */}
     
        <div className={classes.containerMobile}>
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
      {showInput && (
        <form onSubmit={sendCommentHandler}>
          <div className={classes.div}>
            <img src={userImg} alt="pic" />
            <input
              type="text"
              onChange={commentHandler}
              value={enteredVal}
              placeholder="Add a Comment..."
            />
            <button onClick={addToCommentHandler} type="submit">
              Reply
            </button>
          </div>
        </form>
      )}
      {showEditInput && (
        <form onSubmit={editCommentHandler}>
          <div className={classes.div}>
            <img src={userImg} alt="pic" />
            <input
              type="text"
              onChange={editHandler}
              value={enteredEditVal}
              placeholder="Add a Comment..."
            />
            <button type="submit">Update</button>
          </div>
        </form>
      )}
    </Fragment>
  );
};
export default CommentDetails;
