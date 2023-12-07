import React from 'react'
import aboutImg from '../assets/multiplePizzas.jpeg'
import '../Styles/about.css'
const About = () => {
    return (
        <div className='about'>
            <div className="aboutTop" style={{ backgroundImage: `url(${aboutImg})` }}></div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>
                    Step into our cozy pizza shop, where the aroma of freshly baked crust and savory toppings beckons. Our skilled chefs meticulously craft each pizza with premium ingredients, ensuring a burst of flavor in every bite. Whether you're a fan of classic Margherita or adventurous specialty pies, our diverse menu caters to all tastes. Join us for a quick solo bite, a casual gathering, or enjoy the convenience of takeout and delivery. At our pizza shop, every slice is a perfect combination of tradition, taste, and satisfaction.</p>
            </div>

        </div>
    )
}

export default About
