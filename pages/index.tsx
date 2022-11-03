import styled from 'styled-components';
import Header from '../components/Header';
import kenzoBackground from '../public/img/background.png';
import Image from 'next/image';
import BuyerModal from '../components/popups/BuyerModal';
import { useState } from 'react';
import PromotionModal from '../components/popups/PromotionModal';
import styles from '../styles/Home.module.css';
import { IoIosPin } from "react-icons/io";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { HiArrowsExpand, HiOutlineCubeTransparent } from "react-icons/hi";

export default function Home() {

  const [NFTBought, setNFTBought] = useState(true);
  const [openPromotionModal, setOpenPromotionModal] = useState(true);
  return (
    <>
      {NFTBought && <BuyerModal onClose={() => setNFTBought(false)}/>}
      {openPromotionModal && <PromotionModal onClose={() => setOpenPromotionModal(false)}/> }
      <Background>
          <Image alt="background" layout='fill' objectFit='cover'  src={kenzoBackground}></Image> 
      </Background>
      <Header onPromotionClick={() => setOpenPromotionModal(true)}/>
      <TitleSection>
        <PreTitle className={styles.roboto}>City Park Presents:</PreTitle>
        <MainTitle><LightText>Kenzo</LightText> Penthouse</MainTitle>
        <MainDescription className={styles.roboto}>Luxurious penthouse in heart of Poznań backed by blockchain.</MainDescription>
      </TitleSection>
      <ButtonsSection>
        <MainBtn style={{backgroundColor: "black"}}>Learn more</MainBtn>
        <MainBtn onClick={() => setNFTBought(true)} style={{backgroundColor: "white", color: "black"}}>Mint now</MainBtn>
      </ButtonsSection>
      <AboutContainer>
        <IoIosPin style={{width: "1.5vw", height: "1.5vw", marginLeft: "2vw"}}></IoIosPin>
        <AboutText className={styles.roboto}>Poznan, Poland</AboutText>
        <HiArrowsExpand style={{width: "1.5vw", height: "1.5vw", marginLeft: "3vw"}}></HiArrowsExpand>
        <AboutText className={styles.roboto}>2616 sq. ft. interior</AboutText>
        <HiOutlineCubeTransparent style={{width: "1.5vw", height: "1.5vw", marginLeft: "3vw"}}></HiOutlineCubeTransparent>
        <AboutText className={styles.roboto}>3 rooms</AboutText>
        <IoPartlySunnyOutline style={{width: "1.5vw", height: "1.5vw", marginLeft: "3vw"}}></IoPartlySunnyOutline>
        <AboutText className={styles.roboto}>897 sq. ft. terrace</AboutText>
      </AboutContainer>
      <MintContainer>
        <MintTitle>Mint this penthouse</MintTitle>
        <MintDescription className={styles.roboto}>The most luxurious penthouse NFT ever. Just mint, and get your keys.</MintDescription>
        <MintEssentials>
          <PriceLabel className={styles.roboto}>Price: 1696E</PriceLabel>
          <MintButton onClick={() => setNFTBought(true)}>Mint now</MintButton>
        </MintEssentials>
      </MintContainer>
    </>
  )
}

const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`
const TitleSection = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 35vw;
  padding: 12vw 7vw 12vw 7vw;
  @media only screen and (min-width: 768px) {
    margin-top: 11vw;
    padding: 4vw 7vw 4vw 2vw;
    width: 50%;
    margin-left: 4vw;
  }
`

const PreTitle = styled.p`
  font-size: 3vw;
  @media only screen and (min-width: 768px) {
    font-size: 1vw;
  }
`
const LightText = styled.div`
  font-weight: 200;
`

const MainTitle = styled.h1`
  font-size: 14vw;
  line-height: 15vw;
  margin-top: 3vw;
  @media only screen and (min-width: 768px) {
    font-size: 7vw;
    line-height: 8vw;
    margin-top: 0.5vw;
  }
`

const MainDescription = styled.p`
  font-size: 5vw;
  margin-top: 7vw;
  font-weight: 300;
  @media only screen and (min-width: 768px) {
    font-size: 1.5vw;
    margin-top: 2vw;
    width: 35vw;
  }
`
const ButtonsSection = styled.div`
  width: 100%;
  display: flex;
  padding-left: 7vw;
  position: relative;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const MainBtn = styled.button`
  width: 40vw;
  height: 10vw;
  margin: 10vw 5vw 10vw 0;
  font-size: 3vw;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`

const AboutContainer = styled.div`
    display: none;
    @media only screen and (min-width: 768px) {
    display: flex;
    padding: 1vw 4vw 1vw 1vw;
    height: 5vw;
    background-color: rgba(0, 0, 0, 0.75);
    position: absolute;
    align-items: center;
    border-top-right-radius: 10px;
    bottom: 0;
    left: 0;
    }
`
const AboutText = styled.p`
    margin-left: 0.5vw;
    font-size: 1vw;
`

const MintContainer = styled.div`
    display: none;
    @media only screen and (min-width: 768px) {
      display: block;
      top: 18vw;
      right: 10vw;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.75);
      width: 35vw;
      height: 20vw;
      border-radius: 10px;
      padding: 2vw;
    }
`

const MintTitle = styled.h2`
  font-size: 2.5vw;
`

const MintDescription = styled.p`
    font-size: 1.2vw;
    width: 80%;
    margin-top: 3vw;
    font-weight: 300;
`

const MintEssentials = styled.div`
    display: flex;
    width: 100%;
    margin-top: 3vw;
    align-items: center;
`

const PriceLabel = styled.p`
    font-size: 1vw;
`

const MintButton = styled.button`
    width: 15vw;
    height: 3vw;
    background-color: white;
    color: black;
    margin-left: 10vw;
    font-size: 1vw;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`

