// import Header from "./Header.jsx"
// import Middle from "./Middle.jsx"
// import Footer from './Footer.jsx'
// const App=()=>{
//   return(
//         <>
//       <Header/>
//       <Middle/>
//       <Footer/>

//     </>
    
//   );
// }
// export default App;

import College from "./College";
const clgname="Sage University Bhopal";
const address="Katara, Bhopal";
const fees=50000;
const App=()=>{
  return(
    <>
    <h1 align="center">Welcome !!!</h1>
    <College clg={clgname} add={address} fs={fees}/>
    </>
  )
}
export default App;