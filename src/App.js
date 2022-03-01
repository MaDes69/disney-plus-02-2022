//premiere page 


import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route} from  "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer"
import Detail from "./components/Detail"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element = {<Login/> } />
          <Route exact path="/home" element = {<Home/> } />
          <Route exact path="/detail/:id" element = {<Detail/>} />
        </Routes>
        {/* <Footer />  */}
      </Router>   
    </div>
  );
}

export default App;
