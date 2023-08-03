import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
// import About from './components/About';
import React from "react";
// import {no
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
  }
  return (<>
    {/* <Navbar title="TextZa" about="About" Mode={mode} toggleMode={toggleMode}/>
    <TextArea heading="Enter text to analyze"  mode={mode} />
     */}
     
      <Navbar title="TextZa" about="About" Mode={mode} toggleMode={toggleMode}/>
      <div className="container">
      <TextArea heading="Enter text to analyze"  mode={mode} />
   </div>
    {/* <Router >
    
      <div className="container">
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route exact path="/">
           
            </Route>
          </Switch>
        </div>
    </Router> */}
    </>
  );
}

export default App;
