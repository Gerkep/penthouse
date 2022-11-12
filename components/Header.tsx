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
            <Link href="/">
            <Logo>
                <Image alt="background" layout='fill' objectFit='contain'  src={konkretLogo}></Image> 
            </Logo>
            </Link>
            <Navbar>
                <Link href="https://kenzopenthouse.notion.site/NFT-know-how-5174c407208344b193f834d159bda840"><NavbarLink className={styles.roboto}>Learn more</NavbarLink></Link>
                <NavbarLink onClick={onContactClick} className={styles.roboto}>Contact us</NavbarLink>
                <Link href="/buy"><NavbarButton onClick={onPromotionClick}>Buy now</NavbarButton></Link>
                <div onClick={clickHamburger} className="hamburger-btn" id="hamburger-btn">
                <div className="hamburger"></div>
                </div>
                <div className="menu" id="menu">
                <div className="mobile-menu-items">
                    <a href="https://kenzopenthouse.notion.site/NFT-know-how-5174c407208344b193f834d159bda840" className="mobile-menu-link">Learn more</a>
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
    grid-template-columns: 1.2fr 0.8fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      ". ."; 
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    align-items: center;
    @media only screen and (min-width: 768px) {
        padding: 1.5vw 2.5vw 1.5vw 0vw;
    }
`

const Logo = styled.div`
    width: 42vw;
    height: 15vw;
    position: relative;
    cursor: pointer;
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
        width: 15vw;
        height: 3vw;
        border-radius: 10px;
        color: white;
        background-color: black;
        border: none;
        font-size: 1vw;
        cursor: pointer;
        display: block;
        transition: ease-in 0.2s;
        &:hover{
          transform: scale(0.95);
        }
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
        transition: ease-in 0.2s;
        &:hover{
          transform: scale(0.95);
        }
    }
`