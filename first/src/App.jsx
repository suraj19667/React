
import EmpData from "../EmpData";
const App=()=>{

//   const student=[
//     {
//       "rollno":123,
//       "name":"suraj",
//       "city":"Delhi",
//       "fees":4999
//     },
//      {
//       "rollno":123,
//       "name":"shyam",
//       "city":"Mumbai",
//       "fees":4999
//     },
//      {
//       "rollno":123,
//       "name":"ramesh",
//       "city":"Pune",
//       "fees":4999
//     },
//      {
//       "rollno":23,
//       "name":"rahul",
//       "city":"Hydrabad",
//       "fees":49393
//     },
//      {
//       "rollno":45,
//       "name":"ram",
//       "city":"Bhopal",
//       "fees":498099
//     }
//   ]

//   const ans=student.map((key)=>{
//     return(
//     <tr>

//       <td>{key.rollno}</td>
//       <td>{key.name}</td>
//       <td>{key.city}</td>
//       <td>{key.fees}</td>

//     </tr>
//   )
//   })
//     return(
//         <>
//     <table>
//       <tr>
//         <th>Roll NO</th>
//         <th>Name</th>
//         <th>City</th>
//         <th>Fees</th>
//       </tr>
//       {ans}
//     </table>
      
//     </>
//   )
// }
const ans=EmpData.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.empno}</td>
      <td>{key.name}</td>
      <td>{key.destignation}</td>
      <td>{key.salary}</td>

    </tr>
    </>
  )
});
return (
  <>
  <table>
   <tr>
    <th>Employ Number</th>
    <th>Employ Name</th>
    <th>Degisnation</th>
    <th>Salary</th>
   </tr>
   {ans}
  </table>
  </>
  
)

}
export default App;
