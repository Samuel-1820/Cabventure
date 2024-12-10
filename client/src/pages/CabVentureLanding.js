import React, { useState } from 'react';
import './CabVentureLandingPage.css';
import DefaultLayout from "../components/DefaultLayout";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { Link } from "react-router-dom";
import CarPng from "./car1.png";





const CabVentureLandingPage = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setSelectedFAQ(selectedFAQ === index ? null : index);
  };

  return (
    <DefaultLayout>
      <div className="container">
      <header className="header welcome-section">
  <div className="welcome-container">
    <div className="hero-section">
      <h1 className="hero-heading">Welcome to CabVenture</h1>

      <p className="hero-subheading">Your premier destination for seamless transportation solutions</p>
      
      <p className="hero-description">
        Experience the ultimate convenience and comfort with CabVenture - your trusted partner for hassle-free car rentals. Whether you're exploring a new city or embarking on a road trip adventure, we've got you covered. With a diverse fleet of vehicles, dedicated customer support, and unbeatable prices, CabVenture ensures a memorable journey from start to finish.
      </p>
      <button className="cta-button">
        <Link to="/Home">Book Your Ride</Link>
      </button>
    
    
    </div>
    <div className="car-image-container">
    <img
                src={CarPng}
                alt=""
                className="car-image"
                style={{ width: '50%' }} // Added inline style to reduce the size by 50%
              />
              </div>
  </div>
</header>

<section className="section about-us-section">
          <h2>About Us</h2>
          <div className="about-us-content">
            <div className="about-us-text">
              <p>
                At CabVenture, we are committed to providing reliable and affordable car rental services. Our mission is to make your journey comfortable and hassle-free with a wide range of vehicles to choose from. Whether you're on a business trip, family vacation, or a solo adventure, CabVenture is your go-to solution for all your transportation needs.
              </p>
              <p>
                Our team is dedicated to ensuring that you have the best experience possible. We offer 24/7 customer support, flexible rental plans, and the best prices in the market. With CabVenture, you can rest assured that you're in safe hands.
              </p>
            </div>
            <div className="about-us-image">
              <img src="https://assets.visme.co/templates/blockinfographics/fullsize/i_Car-Service-Process-Flow-Diagram_full.jpg" alt="About Us"  />
            </div>
          </div>
        </section>
        <section id="services" className="section" >
          <h2>Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-black hover:bg-primary duration-300 text-orange-500 rounded-lg">
              <FaCameraRetro className="text-5xl text-primary group-hover:text-orange-500 duration-300" />
              <h1 className="text-2xl font-bold text-orange-500">Best Price</h1>
              <p>Unbeatable prices for unforgettable city tours!</p>
              <a href="#" className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-orange-500 duration-300">Learn more</a>
            </div>
            <div className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-black hover:bg-primary duration-300 text-orange-500 rounded-lg">
              <GiNotebook className="text-5xl text-primary group-hover:text-orange-500 duration-300" />
              <h1 className="text-2xl font-bold text-orange-500">Fast and Safe</h1>
              <p>Explore cities with speed and safety, guided by Cabventure's expert team.</p>
              <a href="#" className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-orange-500 duration-300">Learn more</a>
            </div>
            <div className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-black hover:bg-primary duration-300 text-orange-500 rounded-lg">
              <SlNote className="text-5xl text-primary group-hover:text-orange-500 duration-500" />
              <h1 className="text-2xl font-bold text-orange-500">Experience Drivers</h1>
              <p>Experience the city with confidence, guided by our seasoned drivers at Cabventure.</p>
              <a href="#" className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-orange-500 duration-300">Learn more</a>
            </div>
          </div>
        </section>
        <section className="section reviews-section">
          <h2>Customer Reviews</h2>
          <div className="review-slider">
            <div className="review-card">
              <img src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="Jane Doe" className="review-image" />
              <p className="review-name">Jane Doe</p>
              <p className="review-text">"Great service and friendly staff!"</p>
            </div>
            <div className="review-card">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="John Smith" className="review-image" />
              <p className="review-name">John Smith</p>
              <p className="review-text">"Affordable prices and clean cars."</p>
            </div>
            <div className="review-card">
              <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Alice Johnson" className="review-image" />
              <p className="review-name">Alice Johnson</p>
              <p className="review-text">"Will definitely rent again from CabVenture!"</p>
            </div>
          </div>
        </section>
        
        <div className="collaboration-section">
          <div className="blue-container">
            <h1 className="collaboration-heading">Let's collaborate on your upcoming car rental venture</h1>
            <h2 className="collaboration-heading">Reach out to us for any assistance!!</h2>

            <Link to="/contact" className="cta-button">Contact</Link>
          </div>
        </div>

        <section className="section">
          <h2>FAQ</h2>
          <div className="faq-item" onClick={() => toggleFAQ(0)}>
            <strong>Q: What documents do I need to rent a car?</strong>
            {selectedFAQ === 0 && <p>A: You will need a valid driver's license, a credit card, and proof of insurance.</p>}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(1)}>
            <strong>Q: Can I rent a car for someone else?</strong>
            {selectedFAQ === 1 && <p>A: Yes, but the person who will be driving needs to meet our rental requirements and be present at the time of rental.</p>}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(2)}>
            <strong>Q: What is your cancellation policy?</strong>
            {selectedFAQ === 2 && <p>A: You can cancel your reservation up to 24 hours before the pickup time without any charges.</p>}
          </div>
        </section>

        <section className="section">
          <h2>Contact Us</h2>
          <p>Email: CabVenture@gmail.com</p>
          <p>Phone: +91 1234567890</p>
          <p>Address: Chitkara  University, Punjab</p>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 CabVenture. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://privacy.uber.com/center">Privacy Policy</a> | 
              <a href="https://www.uber.com/us/en/safety/">Security</a> | 
              <a href="/Home">Book Again</a> | 
              <a href="https://www.uber.com/legal/en/document/?name=general-terms-of-use&country=india&lang=en">Terms of Service</a>
            </div>
            <p>Follow us on: 
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> | 
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a> | 
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
            </p>
          </div>
        </footer>
      </div>
    </DefaultLayout>
  );
};

export default CabVentureLandingPage;
