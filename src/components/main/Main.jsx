import React from 'react'
import '../main/Main.css'
import api from '../api/api.json'
import ProductCard from './product-card/ProductCard'
import comp from '../icons/computer.svg'
import carRepair from '../icons/carRepair.svg'
import timer from '../icons/timer.svg'
import truck from '../icons/truck.svg'
import withImage from '../images/with.png'
import cards from '../images/cards.png'
import compLogo from '../icons/compLogo.svg'
import complogo2 from '../icons/compLogo2.svg'

const Main = () => {
  return (
    <main>
      <h2>Auto repair services – Tires. <br /> Brakes. Oil. Everything</h2>
      <p>Auto repair services – Tires. Brakes. Oil. Everything</p>
      <div className='cards'>
        {
          api.map(product =>
            <ProductCard data={product} />
          )
        }
      </div>
      <button>Browse All</button>
      <section className="contact-card">
        <p>Owners continue to thrive.</p>
        <h2>When it comes to what we know about car <br /> care, few others can compete.</h2>
        <button>Contact Us</button>
      </section>
      <article>
        <div className="article-card">
          <img src={comp} alt="Icon" />
          <h3>INDUSTRY-LEADING TOOLS</h3>
          <p>Improve your collision center’s efficiency with our proprietary business management system and best-in-class solutions, helping you convert more customers, hit your KPIs.</p>
        </div>
        <div className="article-card">
          <img src={carRepair} alt="Icon" />
          <h3>UNBEATABLE BUYING POWER</h3>
          <p>Find great deals through Driven Brands’ expansive network, and receive discounts and rebates from our 50+ preferred vendors.</p>
        </div>
        <div className="article-card">
          <img src={timer} alt="Icon" />
          <h3>THOROUGH TRAINING AND EDUCATION</h3>
          <p>Attain the knowledge you and your team need to run a high-performing business with our robust training and education programs.</p>
        </div>
        <div className="article-card">
          <img src={truck} alt="Icon" />
          <h3>Consistent Revenue Growth</h3>
          <p>With a Central Review team that will help you write more accurate estimates and meet your top-line KPIs, you can be confident your business is more efficient than ever.</p>
        </div>
      </article>
      <section className='with-you'>
          <img src={withImage} alt="img" />
          <div className="with-child">
            <h2>We are with you every step of way.</h2>
            <p>Now it’s time for both of us to make sure it’s a good fit. We’ve developed a mutual evaluation process that lets us both learn more about each other and make an informed decision about your future.</p>
            <a href='?'>Automotive systems</a>
            <a href="?"> Customer service</a>
            <a href="?">Computer software</a> 
            <a href="?">Sales</a> 
            <a href="?">Operations</a> 
            <a href="?">Human resources</a>
            <button>Browse All</button>
          </div>
      </section>
      <section className='meet'>
        <h2>Meet with our clients feedback</h2>
        <img src={cards} alt="Iamge" />
      </section>
      <section className='company'> 
        <h2>Giving Back While Moving Your Auto Body Business Forward.</h2>
        <img src={compLogo} alt="logos" />
        <img src={complogo2} alt="logo" />
      </section>
    </main>
  )
}

export default Main