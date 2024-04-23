import React from 'react'
import { NavLink } from "react-router-dom";
import { navaritems } from '../data';



const Navbar = () => {
  return (
    <nav className='fixednavbar'>
        <div className='nav'>
        <h2>Homegroom</h2>
        <div className='navelements'>
        <ul>
            {navaritems.map((items)=>{
                const{id,item,url}=items;
            return(
                <li key={id}><NavLink to={url}>{item} </NavLink></li>
             )
            })}
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar
