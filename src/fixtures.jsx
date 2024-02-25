import axios from "axios";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import React,{useState,useEffect} from "react"
import './App.css'
import Logo from './logo.jpg'
import Images1 from './images.jpeg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Fixture = ()=>{




  return (
  
  
<div className="container">


<h1 className="first">Umair Fitness</h1>

<p className="para">Welcome to Umair fitness club where you will find everything you demand for regarding exercises</p>
<p className="para1">In this website you will also find health issues a person face while doing exercises from home or gym</p>
<p className="para2">You will also find some of the great food recipes a gym enthusiast should know</p>

<img src={Images1} className="pic1" />
  

<div className="foot">

<footer className="footer">

<div className="cont1">
  <div className="wlink">
<p className="number" ><a href="+92 313 2528571" target="_blank" rel="noopener noreferrer">Contact no: +92 313 2528571</a></p></div>

</div>

<div className="linkcon">

<h className="op1" ><a className="link11" href="https://www.instagram.com/m.u.h._.x?igsh=MTAzajE5enRpcnY4bw==" target="_blank" rel="noopener noreferrer"><h><FaInstagram /></h></a></h> </div>

<div className="linkcon1">
<h className="op2" ><a className="link22" href="https://www.facebook.com/umair.hasan.31521301?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><h><FaFacebook /></h></a></h></div>

<div className="linkcon2">
<h className="op3" ><a className="link33" href="https://www.linkedin.com/in/umair-hasan-0688aa2a3" target="_blank" rel="noopener noreferrer"><h><FaLinkedin /></h></a></h></div>






</footer>





</div>
    






  
  </div>
  )


}


export default Fixture
