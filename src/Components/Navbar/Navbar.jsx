import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Yaswanth</div>
            <Toggle/>
        </div>
        <div className="n-left">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <Link spy={true} to='Navbar' smoot={true} activeClass='activeClass'>
                       <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smoot={true} >
                       <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experience' smoot={true} >
                       <li>Experience</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smoot={true} >
                       <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Testimonial' smoot={true} >
                       <li>Testimonials</li>
                    </Link>
                   
                </ul>
            </div>
            <button className="button n-button">
            <Link spy={true} to='Contact' smoot={true} >
                      Contact
                    </Link>
            </button>
        </div>
    </div>
  )
}

export default Navbar