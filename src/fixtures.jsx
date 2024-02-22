import axios from "axios";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import React,{useState,useEffect} from "react"
import './App.css'
import Logo from './logo.jpg'
import Images1 from './images.jpeg'


const Fixture = ()=>{




  return (
  
  
<div className="container">


<img src={Logo}  className="llogo"/>
<h1 className="first">Umair Fitness</h1>

<p className="para">Welcome to Umair fitness club where you will find everything you demand for regarding exercises</p>

<img src={Images1} className="pic1" />
  
  
  </div>
  )


}


export default Fixture
