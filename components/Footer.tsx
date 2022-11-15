import type { NextPage } from 'next'
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import logo from "../public/img/konkretlogo.png"
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import PrivacyModal from './popups/PrivacyModal';
import ContactModal from '../components/popups/Contact';

const Footer: NextPage = () => {
  const [openPrivacyModal, setOpenPrivacyModal] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <div className={styles.roboto}>
      {openPrivacyModal &&
            <PrivacyModal 
            text="I hereby consent to the processing by Yepp LLC. my data, 
            i.e. the e-mail address, in order to send to this address informations related to the the deal, 
            the subject of which will be the transfer of property rights to real estate and possibly other 
            contracts related to such a transaction."
            onClose={() => setOpenPrivacyModal(false)}
            />
      }
      {openContactModal &&
            <ContactModal 
            onClose={() => setOpenContactModal(false)}
            />
      }      
      <footer className="footer">
        <div className="footer-logo-container">
          <div className="footer-logo">
            <Image alt="stayImage" layout='fill' objectFit='contain'  src={logo}></Image>
          </div>
        </div>
        <div className="footer-section" id="customer-service-section">
          <h4 className="footer-section-header">Customer Service</h4>
          <div className="footer-links">
              <div onClick={() => setOpenPrivacyModal(true)} className="footer-link">Privacy Policy</div>
              <div onClick={() => setOpenContactModal(true)} className="footer-link">Contact us</div>
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
          <p>Copyright © 2022 Yepp. All rights reserved.</p>
          <br /> <br className="mobile" />
          <p className="designer">Designed & Developed by Piotr Gerke.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;