import CommentDetails from "./CommentDetails";
import juliu from '.././assets/images/avatars/image-juliusomo.png'
import classes from "./Comment.module.css";
import DataJason from "./Data";
import Reply from "./Reply";
import Form from "./Form";
import { Fragment,useState } from "react";

const Comment=()=>{
const[data, setData]=useState(DataJason)
// const[replyCom, setReplyCom]=useState(DataJason)
// const[delCom, setDelCom]=useState(DataJason)
// const[delCom, setDelCom]=useState(false)
const [showEdit, setShowEdit]=useState(false)
const [showEditReply, setShowEditReply]=useState(false)


const addComment=(newCmt)=>{
  const userDate=new Date()
  const day=userDate.getDay()
  const month=userDate.getMonth()
  const year=userDate.getFullYear()

  setData((prevData)=>{
    console.log({...prevData})
    return {
      ...prevData,
      comments:[
        ...prevData.comments,
       {
        id: Math.random(),
        content:newCmt.content,
        createdAt:`${day}/ ${month} / ${year}`,
        score: 0,
        user: {
          image: {
            png: juliu,
            webp: "",
          },
          username: "juliusomo",
        },
        replies: [],    
      }   
      ]
    }
    
  })
}


const deleteComment=(id)=>{
    const objInd=data.comments.filter((dataInd)=>{
      return dataInd.id !== id
    })
    setData((prevData)=>{
      return {
        ...prevData,
        comments:objInd
      }
    }) 
}

const deleteReply=( replyId, id)=>{
 const newArr=data.comments.map((data)=>{
  if (data.id===id) {
   const updatedReply=data.replies.filter((replyData)=>{
    return replyData.id !== replyId
   })
   console.log(updatedReply, data)
   return {
    ...data,
    replies:updatedReply
   }
  }
  console.log(data)
  return data
 })
 setData((prevData=>{
  return{
    ...prevData,
    comments:newArr
  }
 }))
}
const editCommentHandler=(val, id)=>{
  setShowEdit(true)
  console.log('click')
  const newArr=data.comments.map((data)=>{
    if (data.id===id) {
      return {
        ...data, 
        content:val
      }
    }
    return data
  })
  setData((prevData)=>{
    return {
      ...prevData,
      comments:newArr
    }
  })
}
 
const editReplyHandler=(replyId, commentId, valReply)=>{
  setShowEditReply(true)
  const newArr=data.comments.map((data)=>{
      if (data.id===commentId) {
        const newRep=data.replies.map((dataRep)=>{       
          if (dataRep.id === replyId) {
            return {
              ...dataRep,
              content:valReply
            }
          }         
               
          return dataRep
        })
        return{
          ...data,
          replies:newRep
        }
      }
      return data
  })
  setData((prevData)=>{
    return {
      ...prevData,
      comments:newArr
    }
  })
}

const addReplyHandler=(commentId, valReply)=>{
  const newComm=data.comments.map((data)=>{
    if (data.id===commentId) {
      const updatedArr=[...data.replies, valReply]
      return{
        ...data,
        replies:updatedArr
      }
    }
    console.log(data)
    return data
  })
  setData((prevData)=>{
    return {
      ...prevData,
      comments:newComm
    }
  })
}

const addReplyHandlerRep=(commentId, replyId , valReply)=>{
  const newComm=data.comments.map((dataCom)=>{
    if (dataCom.id===commentId) {
      const newArr=[...dataCom.replies,valReply]
      return  {
        ...dataCom,
        replies:newArr
      }
    }
    return dataCom
  })
  setData((prevData)=>{
    return{
      ...prevData,
      comments:newComm
    }
  })
}

 const commentItem = data.comments.map((dataCom) => {
  return (
    <Fragment>
    <div> 
      <CommentDetails
        key={dataCom.id}
        id={dataCom.id}
        content={dataCom.content}
        createdAt={dataCom.createdAt} 
        score={dataCom.score}
        username={dataCom.user.username}
        imagePer={dataCom.user.image.png} 
        onAddComment={addComment}     
        onDeleteComment={deleteComment}    
        onEditComment={editCommentHandler}   
        showEditInput={showEdit}
        onAddReply={addReplyHandler}
        // onAddReply={addReply}  
      />
      {dataCom.replies.length !== 0
        ? dataCom.replies.map((data) => {
          return (
              <Reply
                key={data.id}
                id={data.id}
                content={data.content}
                createdAt={data.createdAt}
                score={data.score}
                username={data.user.username}
                imagePer={data.user.image.png}
                 onAddReplyRep={addReplyHandlerRep}
                 onDeleteReply={deleteReply} 
                 commentId={dataCom.id}
                 onEditReply={editReplyHandler}
                 showEditInputReply={showEditReply}
                 replyTo={dataCom.user.username}
              />              
            );
          })
        : []}     
    </div>
    </Fragment>
  );
});

  return (
    <Fragment>
      <div className={classes.div}>{commentItem}</div>
      <Form onAddComment={addComment} />
    </Fragment>
  );
};
export default Comment;
