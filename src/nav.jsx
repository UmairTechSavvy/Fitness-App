import React from 'react'
import { Link } from 'react-router-dom'


const Nav = ()=>{

  return(

<nav>

<ul>

<li >
<Link to="/" className='nav2'>Home</Link>
<Link to="/Exercises" className='nav1' >Exercises</Link>
<Link to="/Health" className='nav3'>Health</Link>



</li>

</ul>


</nav>


  )




}

export default Nav