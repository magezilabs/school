import React from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Grid */}
      <div className="footer-container">
        {/* Social Media Column */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.bing.com/ck/a?!&&p=5230f2ff824256e57097d18d74d1e7373eb79fc1a36127e17c07550ceb5f3f08JmltdHM9MTc0MTEzMjgwMA&ptn=3&ver=2&hsh=4&fclid=10cdf3d5-0f11-6895-3ab7-e7240e326905&psq=cornerstone+leadership+academy+x&u=a1aHR0cHM6Ly90d2l0dGVyLmNvbS9jb3JuZXJzdG9uZWxlYWRlcnNoaXBhY2FkZW15&ntb=1" target="_blank" rel="noopener noreferrer" className='X'>
              <FaXTwitter />
            </a>
            <a href="https://www.bing.com/ck/a?!&&p=804ab61421b637a525f07a606d21a54391ad933d6ae0267dfc3ef6ca9b477b8eJmltdHM9MTc0MTEzMjgwMA&ptn=3&ver=2&hsh=4&fclid=10cdf3d5-0f11-6895-3ab7-e7240e326905&psq=cornerstone+leadership+academy+facebook&u=a1aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0Nvcm5lcnN0b25lTGVhZGVyc2hpcEFjYWRlbXlUYW56YW5pYS8&ntb=1https://www.bing.com/ck/a?!&&p=52ca9dcebbd1ca28ff214043aa6d15efa331fbc79fcf852e27192bd05270bcabJmltdHM9MTc0MTEzMjgwMA&ptn=3&ver=2&hsh=4&fclid=10cdf3d5-0f11-6895-3ab7-e7240e326905&psq=cornerstone+leadership+academy+facebook&u=a1aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0Nvcm5lcnN0b25lTGVhZGVyc2hpcEFjYWRlbXlVZ2FuZGEv&ntb=1" target="_blank" rel="noopener noreferrer" className='facebook'>
              <FaFacebookF />
            </a>
            <a href="https://wa.me/process.env.NEXT_PUBLIC_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className='whatsapp'>
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Contact Information Column */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: <a href="mailto:cornerstoneleadershipacademy@gmail.com">cornerstoneleadershipacademy@gmail.com</a></li>
            <li>Phone: <a href="tel:+256774068314">+1 (256) 774068314</a></li>
            <li>Address: Ekitangaala Ranch, Nakasongola District, Uganda</li>
          </ul>
        </div>

        {/* Additional Links Column (Optional) */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/enrol">Enrol Now</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cornerstone Leadership Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
