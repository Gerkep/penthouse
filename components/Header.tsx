import styled from "styled-components";
import konkretLogo from "../public/img/konkretlogo.png";
import Image from "next/image";
import styles from '../styles/Home.module.css';
import Link from "next/link";
import { useState } from "react";

const Header = ({onPromotionClick}: any) => {
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
            links.forEach(link => {
                link.classList.remove("appear");
            })
            setMenuOpened(false);
        }
    }
    return (
        <HeaderContainer>
            <Logo>
                <Image alt="background" layout='fill' objectFit='contain'  src={konkretLogo}></Image> 
            </Logo>
            <Navbar>
                <NavbarLink className={styles.roboto}>Learn more</NavbarLink>
                <NavbarLink className={styles.roboto}>Contact us</NavbarLink>
                <NavbarButton onClick={onPromotionClick}>Promote & earn</NavbarButton>
                <div onClick={clickHamburger} className="hamburger-btn" id="hamburger-btn">
                <div className="hamburger"></div>
                </div>
                <div className="menu" id="menu">
                <div className="mobile-menu-items">
                    <button className="mobile-menu-link" onClick={onPromotionClick}>Share and earn</button>
                    <a href="#" className="mobile-menu-link">Learn more</a>
                    <p className="mobile-menu-link" id="link">
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
    display: flex;
    backdrop-filter: blur(10px);
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
    width: 90vw;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: end;
`

const NavbarButton = styled.button`
    display: none;
    @media only screen and (min-width: 768px) {
        padding: 1vw 5vw 1vw 5vw;
        border-radius: 5px;
        background-color: black;
        border: none;
        font-size: 1vw;
        cursor: pointer;
        display: block;
    }
`

const NavbarLink = styled.a`
    display: none;
    @media only screen and (min-width: 768px) {
        margin: 0 7vw 0 0vw;
        font-size: 1vw;
        cursor: pointer;
        display: block;
    }
`

const Hamburger = styled.div`
    width: 12vw;
    height: 12vw;
    margin-right: 4vw;
    @media only screen and (min-width: 768px) {
        display: none;
    }
`