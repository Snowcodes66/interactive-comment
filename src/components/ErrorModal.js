import { Fragment } from "react";
import ReactDom from 'react-dom'
import classes from "./ErrorModal.module.css";




const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const Modal = (props) => {
  return (
    <div className={classes["parent-del-div"]}>
      <div>
        <h3>Delete Comment</h3>
      </div>
      <div className={classes.para}>
        <p>
          Are you sure you want to delete this comment ? This will remove the
          comment and can't be undone
        </p>
      </div>
      <div className={classes.btn}>
        <button className={classes.cancel} onClick={props.onClose}>NO. CANCEL</button>
        <button className= {classes.delete}  onClick={props.onRemove}>YES, DELETE</button>
      </div>
    </div>
  );
};


const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<BackDrop onClose={props.onClose}/>, document.getElementById("backdrop-root"))}
      {ReactDom.createPortal(<Modal onClose={props.onClose } onRemove={props.onRemove} />, document.getElementById("overlay-root"))}
    </Fragment>
  );
};
export default ErrorModal;
