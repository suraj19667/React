
// import { useState } from "react"
// const App=()=>{
//   const [name,setName]=useState("")
//   const [city,setCity]=useState("")
//   const handleSubmit=()=>{
//     console.log({name:name,city:city})
//   }
//   return(
//   <>
//   <h1>Application Form</h1>

//   Enter Name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
//   <br/>
//   Enter City: <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
//   <br/>
//   <button onClick={handleSubmit}>Click</button>
//   </>
//   )
// }
// export default App;
import { useState } from "react";
const App=()=>{
 const [input,setInput]=useState({})

 const handleInput=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  setInput(values=>({...values,[name]:value}))
  console.log(input)
 }
  return(
    <>
    Enter Rollno:<input type="text" name="rollno" onChange={handleInput}/>
    <br/>
    Enter Name:<input type="text" name="name" onChange={handleInput}/>
    <br/>
    Enter city:<input type="text" name="city" onChange={handleInput}/>
    <br/>
    Enter Fees:<input type="text" name="fees" onChange={handleInput}/>
    <br/>
    <button>click</button>
    </>

  )
}
export default App;