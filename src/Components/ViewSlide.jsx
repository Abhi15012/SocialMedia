import React, { useContext, useRef } from 'react'
import { CreateData } from '../store/postCrt-store'


const ViewSlide = () => {



  const title=useRef("")
  const Body=useRef("")
const tags=useRef("")
const getId=useRef("")

  const {AddPost}=useContext(CreateData)
  
  const UploadBar=(event)=>{

    event.preventDefault();
const Title1=title.current.value;
   const body1=Body.current.value;
const Tags= tags.current.value.split(" ");
const UserId=getId.current.value;

// console.log()

fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body : JSON.stringify({
    title:Title1,
    body:body1 ,
    userId:UserId,
    tags: Tags,
  })
})
.then(res => res.json())
.then((resObj)=>AddPost(resObj));

title.current.value=""
Body.current.value=""
tags.current.value=""
getId.current.value=""
  }

  return (
    <form className='Form' onSubmit={UploadBar} >
    <div>
    
    <div className="mb-3">

<label htmlFor="heading" className="Text">UserId</label>
<input type="number" ref={getId} className="form-control Text" id="text"  />
</div>


     
  <div className="mb-3">

    <label htmlFor="heading" className="Text">Exited to Share about!!</label>
    <input type="text" ref={title} className="form-control Text" id="text"  />
  </div>
  <div className="mb-3">
    <label htmlFor="body"  className="form-label"><i>More about it.. </i></label>
    <textarea type="text"
     rows="5" id="body"
     className="form-control body" ref={Body}  />
  </div> 
  <div className="mb-3">
    <label htmlFor="heading" className="Text">Your hashtags..</label>
    <input type="text" ref={tags}className="form-control Text" id="text"  />
  </div>
  
  <button type="submit" className="btn btn-success" >Share</button>

    </div>
    </form>
  )

}

export default ViewSlide
