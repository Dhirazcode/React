import React from 'react'
import {Link} from "react-router-dom";
import{HashLink} from "react-router-hash-link"


const Header = () => {
  return (
    <nav>
        <h1>Dhiraj Official</h1>
        <main>
        <HashLink to={"/#Home"}>Home</HashLink> 
        <HashLink to={"/#About"}>About</HashLink>
        <Link to ={"/contact"}>Contact</Link>
        <HashLink to ={"/#Brand"}>Brand</HashLink>
        
        <Link to ={"/Services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header;