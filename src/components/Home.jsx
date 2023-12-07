import React from 'react'
import { Link } from 'react-router-dom'
import BannerImg from '../assets/pizza.jpeg'
import '../Styles/home.css'
const Home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImg})` }}>
      <div className="headerContainer" >
        <h1>Pedro's Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to='/menu'>
          <button>
            ORDER NOW
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
