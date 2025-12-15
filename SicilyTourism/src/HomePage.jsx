import { React, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CarouselElement from './Carousel';
import Destinations from './Destinations';
import DestinationDetail from './DestinationDetail';
import ContactForm from './ContactForm';

function HomePage() {

    return (<>
        <BrowserRouter>
            <header className='main-header'>
                <span className='website-title'>TRAVEL SICILY</span>
                <nav className='navbar'>
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/contact' className='nav-link'>Contacts</Link>
                </nav>
            </header>
            <CarouselElement />
            <Routes>
                <Route path='/' element={<Destinations />}></Route>
                <Route path='/destinations/:id' element={<DestinationDetail />}></Route>
                <Route path='/contact' element={<ContactForm />}></Route>
            </Routes>
            <footer className='main-footer'>
                <section className='footer-section'>
                    <h3>Connect with us</h3>
                    <ul className="social-links">
                        <li><a href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Facebook
                        </a>
                        </li>
                        <li><a href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Twitter
                        </a>
                        </li>
                        <li><a href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Instagram
                        </a>
                        </li>
                    </ul>
                </section>
                <section className='footer-section'>
                    <h3>Contact us</h3>
                    <p>Email: contact@travelsicily.com</p>
                    <p>Phone: +39 333 333 3333</p>
                </section>
                <section className='footer-section'>
                    <h3>Newsletter</h3>
                    <p>
                        Subscribe to our newsletter
                        for updates and offers.
                    </p>
                    <form>
                        <input type="email" placeholder="Your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </section>
            </footer>
        </BrowserRouter>
    </>)
}

export default HomePage