import { useState, useEffect } from 'react';
import './App.css';

const SaiBuilders = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const projects = [
    { title: 'The Grand Zenith', type: 'Residential', img: 'https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&w=800&q=80' },
    { title: 'Skyline Plaza', type: 'Commercial', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
    { title: 'Emerald Villas', type: 'Luxury Residential', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="app-wrapper">
      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            SAI <span className="text-gold">BUILDERS</span>
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
              </li>
            ))}
          </ul>

          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="reveal">Building Your <br /><span className="text-gold">Visionary</span> Reality</h1>
          <p>Excellence in construction and architectural design. We build spaces that inspire and endure.</p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Enquire Now</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about reveal">
        <div className="about-grid">
          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80" alt="Construction site" />
          </div>
          <div className="about-text">
            <h2 className="section-title">Established Excellence</h2>
            <p>At Sai Builders, we don't just build structures; we create landmarks. With over 15 years of experience in high-end residential and commercial projects, our commitment to quality and precision remains unmatched.</p>
            <div className="stats">
              <div className="stat-item">
                <span className="text-gold">150+</span>
                <p>Projects Done</p>
              </div>
              <div className="stat-item">
                <span className="text-gold">20+</span>
                <p>Awards</p>
              </div>
              <div className="stat-item">
                <span className="text-gold">15K</span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects reveal">
        <h2 className="section-title text-center">Featured Projects</h2>
        <div className="project-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card glass-card">
              <div className="project-img">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="text-gold">{project.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact reveal">
        <div className="contact-container glass-card">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Ready to start your next project with us? Contact our team for a consultation.</p>
            <div className="contact-details">
              <p>📍 123 Builder Avenue, High Street</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@saibuilders.com</p>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" rows={4} required></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Sai Builders. All rights reserved. Designed for Excellence.</p>
      </footer>
    </div>
  );
};

export default SaiBuilders;
