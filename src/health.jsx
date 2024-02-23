import React,{useState,useEffect} from 'react'
import axios from 'axios'
import HealthData from './h.json'

const Health = () =>{

  const [data , setData] = useState([])


useEffect(()=>{

setData(HealthData.gymh)


},[])



return (

<div>

<ul>

{
  data.map((result,index)=>(

<li key={index} className='list3'>

<h1 className='h3'>{result.issue}</h1>
<p className='p3'>DESCRIPTION: {result.description}</p>
<p  className='p4'>PREVENTION TIPS: {result.prevention_tips}</p>
<p>PAIN AREA: {result.pain_area}</p>
<p> video link: {" "}<a href={result.video_link} className='link3' target='_blank' rel='noopener noreferrer'>Watch Video</a></p>



</li>


  ))
}



</ul>




</div>


)


}

export default Health
