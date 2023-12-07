import React from 'react'
import pizzaLeft from '../assets/pizzaLeft.jpg'
import '../Styles/contact.css'
const Contact = () => {
    return (
        <div className='contact'>
            <div className="leftSide" style={{ backgroundImage: `url(${pizzaLeft})` }}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id='contact-form' method='POST'>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name='name'  placeholder='Enter full name...' autoComplete='off' />
                    <label htmlFor="email">Email</label>
                    <input type="email" name='name' placeholder='Enter your email...' autoComplete='off' />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder='Enter message' cols="10" rows="0"></textarea>
                    <button type='submit'>Send Message</button>
                </form>

            </div>
        </div>
    )
}

export default Contact
