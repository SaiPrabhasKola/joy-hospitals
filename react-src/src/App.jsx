import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Baby, Stethoscope, Activity, Heart, Calendar, Clock, ChevronDown } from 'lucide-react';
import AdolescentHealth from './AdolescentHealth';
import HighRiskPregnancy from './HighRiskPregnancy';
import NewBornCare from './NewBornCare';
import Menopause from './Menopause';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Simple routing handler
  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Handle hash changes for anchor links on home page
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <img src="./logo.jpg" alt="Joy Hospitals" style={{ height: '90px', objectFit: 'contain' }} />
          </div>
          <div className="desktop-menu">
            <a href="#home" onClick={() => navigateTo('home')}>Home</a>
            <a href="#about" onClick={() => navigateTo('home')}>About</a>
            <div className="dropdown">
              <a href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'pointer' }}>Services <ChevronDown size={14} style={{ display: 'inline' }} /></a>
              <div className="dropdown-content">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('adolescent-health'); }}>Adolescent Health</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('high-risk-pregnancy'); }}>High Risk Pregnancy</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('new-born-care'); }}>New Born Care</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('menopause'); }}>Menopause</a>
              </div>
            </div>
            <a href="#testimonials" onClick={() => navigateTo('home')}>Testimonials</a>
            <a href="#contact" className="btn-primary" onClick={() => navigateTo('home')}>Contact Us</a>
          </div>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#home" onClick={() => navigateTo('home')}>Home</a>
            <a href="#about" onClick={() => navigateTo('home')}>About</a>
            <a href="#services" onClick={() => navigateTo('home')}>Services</a>
            <a href="#" onClick={() => navigateTo('adolescent-health')}>Adolescent Health</a>
            <a href="#" onClick={() => navigateTo('high-risk-pregnancy')}>High Risk Pregnancy</a>
            <a href="#" onClick={() => navigateTo('new-born-care')}>New Born Care</a>
            <a href="#" onClick={() => navigateTo('menopause')}>Menopause</a>
            <a href="#testimonials" onClick={() => navigateTo('home')}>Testimonials</a>
            <a href="#contact" onClick={() => navigateTo('home')}>Contact Us</a>
          </div>
        )}
      </nav>



      {
        currentPage === 'home' ? (
          <>
            {/* Hero Section */}
            <section id="home" className="hero">
              <div className="hero-video-container">
                <div className="hero-bg" style={{
                  backgroundImage: `url('https://res.cloudinary.com/dnitpu7mp/image/upload/v1772518967/hero-bg_xrderc.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: -1
                }}></div>
                <div className="hero-overlay"></div>
              </div>
              <div className="container hero-content">
                <h2>Her Care Clinic</h2>
                <h1>A One-Stop Institution To Address All Female-Related Ailments</h1>
                <p>Leading the future of care with compassion and expertise.</p>
                <div className="hero-buttons">
                  <a href="#contact" className="btn-primary">Book Appointment</a>
                  <a href="#services" className="btn-secondary">Our Services</a>
                </div>
              </div>
            </section>

            {/* Why Her Care */}
            <section id="about" className="section bg-light">
              <div className="container">
                <div className="section-header">
                  <h2>Why Her Care?</h2>
                  <div className="divider"></div>
                </div>
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="icon-box"><Heart /></div>
                    <h3>Compassionate Care</h3>
                    <p>We treat every patient like family, ensuring comfort and understanding.</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><Stethoscope /></div>
                    <h3>Expert Treatment</h3>
                    <p>Years of experience in Obstetrics, Gynaecology, and Infertility treatments.</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon-box"><Activity /></div>
                    <h3>Advanced Technology</h3>
                    <p>Equipped with modern facilities for Laparoscopy and Sonography.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Services */}
            <section id="services" className="section">
              <div className="container">
                <div className="section-header">
                  <h2>Our Services</h2>
                  <div className="divider"></div>
                </div>
                <div className="services-grid">
                  <ServiceCard icon={<Baby />} title="Obstetrics" desc="Comprehensive care for expectant mothers." />
                  <ServiceCard icon={<Stethoscope />} title="Gynaecology" desc="Treatment for all women's health issues." />
                  <ServiceCard icon={<Activity />} title="Infertility & IUI" desc="Helping you start your family journey." />
                  <ServiceCard icon={<Heart />} title="Laparoscopy" desc="Minimally invasive surgical procedures." />
                  <ServiceCard icon={<Activity />} title="Cancer Screening" desc="Early detection and preventive care." />
                  <ServiceCard icon={<Baby />} title="Sonography" desc="Advanced imaging for accurate diagnosis." />
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="section bg-light">
              <div className="container">
                <div className="section-header">
                  <h2>Happy Stories</h2>
                  <div className="divider"></div>
                </div>
                <div className="testimonials-grid">
                  <TestimonialCard
                    name="Bhakti Ail"
                    text="Dr. Monica patiently listens to your problem and takes care of even the minutest details. Really detail oriented and delights her patients with her calm and caring attitude."
                  />
                  <TestimonialCard
                    name="Dr. Komal Keni"
                    text="She is one of the best gyneacs that I can recommend. Thank you Dr Monica for taking care of my sister's problem so sensitively and carefully."
                  />
                  <TestimonialCard
                    name="Baijnath Prasad Sahu"
                    text="Never felt like we go to a doctor, we always feel like we are going to our family member. She gives a lot of time to every patient."
                  />
                </div>
              </div>
            </section>
          </>
        ) : currentPage === 'adolescent-health' ? (
          <AdolescentHealth />
        ) : currentPage === 'high-risk-pregnancy' ? (
          <HighRiskPregnancy />
        ) : currentPage === 'new-born-care' ? (
          <NewBornCare />
        ) : currentPage === 'menopause' ? (
          <Menopause />
        ) : (
          <AdolescentHealth />
        )
      }

      {/* Contact / Footer */}
      <footer id="contact" className="footer">
        <div className="container footer-content">
          <div className="footer-col">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <Phone size={18} />
              <span>+91 12345 67890</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>info@hercareclinic.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>Vile Parle East, Mumbai</span>
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
          </div>
          <div className="footer-col">
            <h3>Clinic Hours</h3>
            <div className="contact-item">
              <Calendar size={18} />
              <span>Mon - Sat</span>
            </div>
            <div className="contact-item">
              <Clock size={18} />
              <span>10:00 AM - 08:00 PM</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dr. Monika Agrawal. All rights reserved.</p>
        </div>
      </footer>
    </div >
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, text }) {
  return (
    <div className="testimonial-card">
      <p>"{text}"</p>
      <h4>- {name}</h4>
    </div>
  );
}

export default App;
