import React from 'react'
import peter from '../assets/img/carship.jpg'

import "../assets/vendor/bootstrap/css/bootstrap.min.css" ;
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import  "../assets/vendor/aos/aos.css";
import  "../assets/vendor/glightbox/css/glightbox.min.css";
import   "../assets/vendor/swiper/swiper-bundle.min.css";
import '../assets/css/main.css'
import NavBar from './NavBar';

export default function Home() {
  return (
    <div>

<NavBar/> 

<section id="hero" className="hero section dark-background">

      <img src={peter} alt="" />

      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h2>Welcome To CarDealerShip WebSite</h2>
            <p  >you can purchase anykind of cars and bikes </p>
          </div>
          <div className="col-lg-5" >
            <form action="forms/newsletter.php" method="post" className="php-email-form">
              <div className="sign-up-form">
                <input type="email" name="drivinglicense" />
                <input type="submit" value="Login" /></div>
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your Login request has been sent. Thank you!</div>
            </form>
          </div>
        </div>
      </div>

    </section>





    </div>
  )
}
