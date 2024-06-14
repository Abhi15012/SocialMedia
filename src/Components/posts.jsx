import React, { useContext } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { CreateData } from '../store/postCrt-store';
const Posts = ({post}) => {
let {tags,reactions}= post

const {DeletePost}=useContext(CreateData)

  return (
    <div>
      <div className="card" style= {{"width": "18rem"}}>
 
  <div className="card-body">
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
   {reactions}
    <span className="visually">Likes</span>
  </span>
  <span className="badge rounded-pill text-bg-danger delete" onClick={()=>(DeletePost(post.id))}><FaDeleteLeft /> Delete</span>
    <h5 className="Card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    <div className="like" > <FcLike /></div>
   
    {tags.map((tag)=>(
      <span key={Math.floor(Math.random()*1000)}className="badge rounded-pill text-bg-info tag" >{tag}</span >

))}


  </div>
  
</div>
    </div>
  )
}

export default Posts;
