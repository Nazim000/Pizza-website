import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/error.css'
const Error = () => {
    return (
        <div className='errorPage'>
            <h2>NO PAGE FOUND</h2>
            <Link to='/'><button>Go to Home</button></Link>
        </div>
    )
}

export default Error
