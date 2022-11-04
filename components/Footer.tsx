import type { NextPage } from 'next'
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import logo from "../public/img/konkretlogo.png"
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Footer: NextPage = () => {
  return (
    <div className={styles.roboto}>
      <footer className="footer">
        <div className="footer-logo-container">
          <div className="footer-logo">
            <Image alt="stayImage" layout='fill' objectFit='contain'  src={logo}></Image>
          </div>
        </div>
        <div className="footer-section" id="customer-service-section">
          <h4 className="footer-section-header">Customer Service</h4>
          <div className="footer-links">
            <Link className="footer-link" href="https://www.victorgallery.pl/static/docs/privacy.39fe4d89656b.pdf">
              <p className="footer-link">Privacy Policy</p>
            </Link>
            <Link className="footer-link" href="https://www.victorgallery.pl/static/docs/terms.0f6bf7412160.pdf">
              <p className="footer-link">Terms & Conditions</p>
            </Link>
          </div>
        </div>
        <div className="contact" id="contact-service-section">
          <div className="contact-container">
            <HiPhone className="contact-illustration"/>
            <p className="telephone">+48 539 653 528</p>
          </div>
          <div className="contact-container">
          <HiMail className="contact-illustration"/>
            <p className="email">hello@yeppstudios.com</p>
          </div>
          <div className="contact-container">
          <HiLocationMarker className="contact-illustration"/>
            <p className="address">Poznań, Poland</p>
          </div>
        </div>
        <div className="contribution">
          <p>Copyright © 2022 Victor Gallery. All rights reserved.</p>
          <br /> <br className="mobile" />
          <p className="designer">Designed & Developed by Piotr Gerke.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;