import React, { useCallback, useContext, useState } from "react";
import Posts from "./posts";
import { CreateData } from "../store/postCrt-store";

import "../index.css";
import WelMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {

  
  const { listArr } = useContext(CreateData);
const [Jokequestion ,setJokeQuestion]=useState([])
const [JokeData,setJokeData]=useState([])
const [loading,setLoading]=useState(false)
  async function GetJoke() {
    setLoading(true)
    let Url = "https://official-joke-api.appspot.com/random_joke";
    await fetch(Url)
      .then((response) => {
        return response.json();
      })
      .then((ron) => {
       const {setup}=ron;
       const {punchline}=ron
 setJokeQuestion(punchline)
 setJokeData(setup)
setLoading(false)
      })

      .catch((err) => {
        console.log("ERROR_404 found", err);
      });
  }
 
  return (

    <>
    
    {loading && <LoadingSpinner></LoadingSpinner> }
      { loading==false   &&listArr.length === 0 && (
        < WelMsg loading={loading} JokeData={JokeData} Jokequestion={Jokequestion} GetJoke={GetJoke}></WelMsg>
      )}

      {listArr.map((post) => (
        <Posts key={post.id} post={post}></Posts>
      ))}
    </>
  ); 
};

export default PostList;
