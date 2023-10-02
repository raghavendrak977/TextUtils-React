import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import { Switch, Route } from 'react-router-dom';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>
  {
   setAlert(
    {
      msg:message,
      type:type
      
    })

    setTimeout(
      ()=>
      {
        setAlert(null)
      },3000
    );
   
  }
  const toggleMode=()=>
  {
    if(mode=== 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode enabled","success")
     
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light mode enabled","success")
    }
  }
  return (
    <>
    {/* <Router> */}
   <Navbar title="TextUtils" about="about TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
   <Alert alert={alert}></Alert>

   <div className='container'>
        {/* <Routes> */}
          {/* <Route exact path="/about" element={ <About></About>}> */}
            {/* <About /> */}
             
          {/* </Route> */}

          {/* <Route exact path="/"  element={<Textforms mode={mode} showAlert={showAlert} />}> */}
          <Textforms mode={mode} showAlert={showAlert} />
          {/* </Route> */}
         
        {/* </Routes> */}



   </div>
   {/* </Router> */}
   </>
    
  );
}

export default App;
