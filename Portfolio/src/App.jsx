import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import myPhoto from './assets/images/my-photo.png'
function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <nav className='top-navbar'>
          <h2>Luca Baudo</h2>
          <ul className='links'>
            <li><Link to='/#home'>Home</Link></li>
            <li><Link to='/#about'>About</Link></li>
            <li><Link to='/#projects'>Projects</Link></li>
            <li><Link to='/#contacts'>Contacts</Link></li>
          </ul>
        </nav>
      </div>
      <div className='home' id='home'>
        <div className='presentation'>
          <div className='personal-info'>
            <span className='hello-span'>Hello <b className='point'>.</b></span>
            <span className='personal-name'><div className='line'></div>I'm Luca</span>
            <span className='personal-role'>Front-end Developer</span>
            <section className='info-buttons'>
              <button className='contact-me-btn'>Contact me</button>
              <button className='resume-btn'>My resume</button>
            </section>
          </div>
          <img src={myPhoto} alt="Personal Picture" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
