import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo.jpg'


const Nav = ()=>{

  return(

<nav className='navbar'>

<ul>

<li >
  
<img src={Logo}  className="llogo"/>
<Link to="/" className='nav2'>Home</Link>
<Link to="/Exercises" className='nav1' >Exercises</Link>
<Link to="/Health" className='nav3'>Health</Link>
<Link to="/Diet" className='nav4'>Diet</Link>



</li>

</ul>


</nav>


  )




}

export default Nav