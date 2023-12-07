import React, { useState } from 'react'
import Logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom'


import '../Styles/Navbar.css'
const Navbar = () => {
    const [link, setLinks] = useState(false)
    const toggle = () => {
        setLinks(!link);
    }
    return (
        <div className='navbar'>
            <div className="leftSide" id={link ? "open" : 'close'}>
                <img src={Logo} alt="" />
                <div className="hiddenLinks">
                    <Link to='/'>Home</Link>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <button onClick={toggle}>

                    <i className="fa-solid fa-bars icon"></i>
                </button>
            </div>

        </div>
    )
}

export default Navbar
