import {useState} from "react";
const App=()=>{
  const [color,setColor]=useState("red")
  return(
    <>
    <h1>Welcome to react App </h1>
    <button onClick={()=>{setColor("yellow")}}>Change color</button>
    <button onClick={()=>{setColor("blue")}}>Change color</button>
    <button onClick={()=>{setColor("green")}}>Change color</button>


    <h2 style={{color:color}}>My Favorite Color :{color}</h2>
    </>
  )
}
export default App;