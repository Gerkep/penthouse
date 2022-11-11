import styled from "styled-components";
import konkretLogo from "../public/img/konkretlogo.png";
import Image from "next/image";
import styles from '../styles/Home.module.css';
import { useState } from "react";
import Link from "next/link";

const Header = ({onPromotionClick, onContactClick}: any) => {
    const [menuOpened, setMenuOpened] = useState(false);

    const clickHamburger = () => {
        const button = document.getElementById("hamburger-btn");
        const menu = document.getElementById("menu");
        const links = document.querySelectorAll(".mobile-menu-link");
        if(!menuOpened){
            button?.classList.add("open");
            menu?.classList.add("open");
            links.forEach(link => {
                link.classList.add("appear");
            })
            setMenuOpened(true);
        }else{
            button?.classList.remove("open");
            menu?.classList.remove("open");
            setMenuOpened(false);
        }
    }

    const contactClickHandle = () => {
        const button = document.getElementById("hamburger-btn");
        const menu = document.getElementById("menu");
        button?.classList.remove("open");
        menu?.classList.remove("open");
        onContactClick();
        setMenuOpened(false);
    }

    return (
        <HeaderContainer>
            <Logo>
                <Image alt="background" layout='fill' objectFit='contain'  src={konkretLogo}></Image> 
            </Logo>
            <Navbar>
                <Link href="https://hammerhead-doll-50e.notion.site/Penthouse-Kenzo-bb570472844e49a5b3b92b7721af3edc"><NavbarLink className={styles.roboto}>Learn more</NavbarLink></Link>
                <NavbarLink onClick={onContactClick} className={styles.roboto}>Contact us</NavbarLink>
                <NavbarButton onClick={onPromotionClick}>Buy now</NavbarButton>
                <div onClick={clickHamburger} className="hamburger-btn" id="hamburger-btn">
                <div className="hamburger"></div>
                </div>
                <div className="menu" id="menu">
                <div className="mobile-menu-items">
                    <a href="https://hammerhead-doll-50e.notion.site/Penthouse-Kenzo-bb570472844e49a5b3b92b7721af3edc" className="mobile-menu-link">Learn more</a>
                    <p onClick={() => contactClickHandle()} className="mobile-menu-link" id="link">
                        <b>Contact us</b>
                    </p>
                </div>
                </div>
            </Navbar>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    width: 100%;
    padding: 7vw 3vw 7vw 3vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      ". ."; 
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    align-items: center;
    @media only screen and (min-width: 768px) {
        padding: 1.5vw 2.5vw 1.5vw 2.5vw;
    }
`

const Logo = styled.div`
    width: 55vw;
    height: 15vw;
    position: relative;
    @media only screen and (min-width: 768px) {
        width: 20vw;
        height: 4.5vw;
    }

`

const Navbar = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: end;
    -webkit-justify-content: end;
`

const NavbarButton = styled.button`
    display: none;
    @media only screen and (min-width: 768px) {
        padding: 1vw 5vw 1vw 5vw;
        border-radius: 5px;
        color: white;
        background-color: black;
        border: none;
        font-size: 1vw;
        cursor: pointer;
        display: block;
    }
`

const NavbarLink = styled.button`
    display: none;
    color: white;
    @media only screen and (min-width: 768px) {
        margin: 0 7vw 0 0vw;
        font-size: 1vw;
        cursor: pointer;
        border: none;
        background-color: transparent;
        display: block;
    }
`