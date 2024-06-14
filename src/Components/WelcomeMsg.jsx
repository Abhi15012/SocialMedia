import { PiMaskSadFill } from "react-icons/pi";
import { FaFaceLaughSquint } from "react-icons/fa6";
import { useState } from "react";
const WelMsg=({Jokequestion,JokeData,GetJoke})=>{
 
return<>
{JokeData.length!== 0 ? <><div className="ask">{JokeData}</div><p className="ans">{Jokequestion}</p> <button  className="btn btn-info laugh" onClick={GetJoke}>Laugh More <FaFaceLaughSquint /></button></>:<div className="WelMsg">

<h1 style={{'color': 'red'}}>No Posts<PiMaskSadFill /></h1>
<p>{GetJoke}</p>
<button  className="btn btn-info joke" onClick={GetJoke}>Read a joke</button>

</div>}
</>}


export default WelMsg