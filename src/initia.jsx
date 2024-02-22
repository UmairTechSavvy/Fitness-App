
import axios from "axios";
import React, { useState, useEffect } from "react";
import './App.css';

const Initial = () => {

const [initialData , setInitialData] = useState([])



useEffect(()=>{

  const fetchData = async () =>{

    try{  

      const response = await axios.get("https://openlibrary.org/search.json")

setInitialData(response.data)
console.log(response.data)
}catch(error){

  console.log(error.message)
}


  }

  fetchData()


},[initialData])





}

export default Initial