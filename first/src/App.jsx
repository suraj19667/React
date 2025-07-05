
import { useState } from "react"
const App=()=>{
  const [name,setName]=useState("")
  const [city,setCity]=useState("")
  const handleSubmit=()=>{
    console.log({name:name,city:city})
  }
  return(
  <>
  <h1>Application Form</h1>

  Enter Name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
  <br/>
  Enter City: <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
  <br/>
  <button onClick={handleSubmit}>Click</button>
  </>
  )
}
export default App;
