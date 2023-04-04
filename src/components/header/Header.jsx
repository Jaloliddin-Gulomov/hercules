import React from 'react'
import logo from '../icons/logo.svg'
import style from './Header.css'
import location from '../icons/location.svg'
import contact from '../icons/contact.svg'
import clock from '../icons/clock.svg'

const Header = () => {
    return (
        <div> 
            <nav>
                <img src={logo} alt="Logo" />
                <div className='nav-children'>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    <div className='nav-child'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <select>
                            <option>UZ</option>
                            <option>EN</option>
                            <option>RU</option>
                        </select>
                        <i class="fa-regular fa-user"></i>
                        <div className='btn-wrapper'>
                            <button className='services'>Services</button>
                            <button className='market'>Market</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="hero">
                <div className='hero-child'>
                    <h1>The best way to avoid <br /> problems with vehicle is <br /> planning ahead</h1>
                    <p>The combined effort of the battery, starter, and alternator <br /> is what keeps your vehicle powered.</p>
                    <button className='contact-btn'>Contact Us</button>
                </div>
            </div>
            <div className='info'>
                <div className="contact">
                    <img src={contact} alt="icon" />
                    <div>
                        <h3>Contact</h3>
                        <p>+99891 999-99-99 <br /> companyname@info.com</p>
                    </div>
                </div>
                <div className="location">
                    <img src={location} alt="icon" />
                    <div>
                        <h3>Location</h3>
                        <p>440 S. Church Street, Suite <br /> 700, Charlotte, NC 28202</p>
                    </div>
                </div>
                <div className="open">
                    <img src={clock} alt="icon" />
                    <div>
                        <h3>Open hours</h3>
                        <p>Mon - Fri: 8:00am to 5:00pm <br /> Sut - Sun: Close</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header