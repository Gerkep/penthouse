import styled from 'styled-components';
import Header from '../components/Header';
import kenzoBackground from '../public/img/background.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css';
import Loading from '../components/Loading';
import NFTImage from "../public/img/kenzoNFT.jpg"
import cutleryIcon from "../public/img/icons/cutlery.png";
import swimmingpoolIcon from "../public/img/icons/swimmingpool.png";
import spaIcon from "../public/img/icons/spa.png";

export default function Buy() {
  
  const [step, setStep] = useState(2);
  const ref = useRef<null | HTMLDivElement>(null);
  const handleScroll = () => {
    ref.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  const buy = () => {
    setStep(2);
  }

  return (
    <>
      <Loading />
      <div style={{position: "fixed", top: "0", left: "0", width: "100%", zIndex: "0"}}>
      <Background>
          <Image alt="background" layout='fill' objectFit='cover'  src={kenzoBackground}></Image> 
      </Background>
      <Header onContactClick={handleScroll} />
        {step === 1 ?
                <BuyContainer>
                <FirstColumn>
                    <MobileImage>
                        <NFTImageContainer>
                            <Image alt="background" layout='fill' objectFit='cover'  src={NFTImage}></Image> 
                        </NFTImageContainer>  
                    </MobileImage> 
                    <BuyHeader>Kenzo Penthouse</BuyHeader>
                    <Description className={styles.roboto}>
                        Lorem ipsum modulum cumulum gsaf u8o asdf wer naiuguh f adsfg;aerwgf aisudf bsajkh iuwe bkajlsdf uwioa nadkjfhaew afw vafsd more text here sdfa ashgr sdghlw.
                    </Description>
                    <NFTProps className={styles.roboto}>
                              <NFTProp>
                                <PropImage>
                                  <Image alt="background" layout='fill' objectFit='contain'  src={swimmingpoolIcon}></Image> 
                                </PropImage>
                                <PropText>Swimming pool</PropText>
                              </NFTProp>
                              <NFTProp>
                                <PropImage>
                                  <Image alt="background" layout='fill' objectFit='contain'  src={spaIcon}></Image> 
                                </PropImage>
                                <PropText>Spa</PropText>
                              </NFTProp>
                              <NFTProp>
                                <PropImage>
                                  <Image alt="background" layout='fill' objectFit='contain'  src={cutleryIcon}></Image> 
                                </PropImage>
                                <PropText>Restaurant</PropText>
                              </NFTProp>
                    </NFTProps>
                    <Total className={styles.roboto}>Total: <b>1696Ξ</b></Total>
                    <BuyButton onClick={() => buy()}><b>Buy now</b></BuyButton>
                    <Consent className={styles.roboto}>By buying I agree with <b>terms & conditions</b></Consent>
                </FirstColumn>
                <SecondColumn>
                    <NFTImageContainer>
                        <Image alt="background" layout='fill' objectFit='cover'  src={NFTImage}></Image> 
                    </NFTImageContainer>      
                </SecondColumn>    
                </BuyContainer>
                :
                <CongratsContainer>
                    <MobileImage>
                        <NFTImageContainer>
                            <Image alt="background" layout='fill' objectFit='cover'  src={NFTImage}></Image> 
                        </NFTImageContainer>  
                    </MobileImage> 
                    <CongratsHeader>Congratulations!</CongratsHeader>
                    <CongratsImageContainer>
                        <Image alt="background" layout='fill' objectFit='cover'  src={NFTImage}></Image> 
                    </CongratsImageContainer>   
                    <CongratsDesc className={styles.roboto}>
                        Lorem ipsum modulum cumulum gsaf u8o asdf wer naiuguh f adsfg;aerwgf aisudf bsajkh iuwe bkajlsdf uwioa nadkjfhaew afw vafsd more text here sdfa ashgr sdghlw.
                    </CongratsDesc>
                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                      <ContactButton><b>Contact us</b></ContactButton>
                    </div>
                </CongratsContainer>
        }
      </div>
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

const BuyContainer = styled.div`
    width: 95vw;
    padding: 0 7vw 0 7vw;
    background-color: rgba(0, 0, 0, 0.75);
    position: relative;
    margin: 0 auto;
    margin-top: 30vw;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
      @media only screen and (min-width: 768px) {
        text-align: left;
        width: 75vw;
        height: 40vw;
        padding: 0 4vw 0 4vw;
        margin-top: 10vw;
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
          ". ."; 
      }
`

const NFTImageContainer = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    width: 32vw;
    height: 32vw;
`

const SecondColumn = styled.div`
    display: none;
    @media only screen and (min-width: 768px) {
        display: flex;
        width: 100%;
        heiight: 100%;
        justify-content: end;
        align-items: center;
    }
`

const FirstColumn = styled.div`
    padding: 8vw 0 14vw 0;
    @media only screen and (min-width: 768px) {
        padding: 4vw 0 4vw 0;
    }
`

const BuyHeader = styled.h1`
    font-size: 7vw;
    color: white;
    margin-top: 4vw;
    @media only screen and (min-width: 768px) {
        font-size: 3vw;
        margin-top: 0;
    }
`

const Description = styled.p`
    margin: 0 auto;
    color: white;
    margin-top: 8vw;
    width: 70vw;
    font-size: 3vw;
    @media only screen and (min-width: 768px) {
        margin: 4vw 0 0 0;
        font-size: 1.2vw;
        width: 30vw;
    }
`

const NFTProps = styled.div`
    display: none;
    width: 100%;
      @media only screen and (min-width: 768px) {
        margin-top: 3vw;
        display: grid;
        width: auto;
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr; 
        grid-template-areas: 
          ". ."
          ". ."; 
        grid-template-areas: 
        ". ."
        ". .";
      }
`
const NFTProp = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 0 0 2vw 0;
    font-size: 1vw;
  }
`
const PropImage = styled.div`
    position: relative;
    @media only screen and (min-width: 768px) { 
      width: 1.5vw;
      height: 1.5vw;
    }
`
const PropText = styled.p`
    color: white;
    @media only screen and (min-width: 768px) {
      font-size: 1.2vw;
      margin-left: 1.5vw;
    }
`

const Total = styled.p`
    font-size: 4vw;
    margin-top: 10vw;
    color: white;
    @media only screen and (min-width: 768px) {
        font-size: 1.2vw;
        margin-top: 1.5vw;
    }
`

const BuyButton = styled.button`
    padding: 4vw 25vw 4vw 25vw;
    color: black;
    background-color: white;
    border: none;
    border-radius: 5px;
    margin-top: 3vw;
    cursor: pointer;
    font-size: 4vw;
    background-color: #e6be8a;
    @media only screen and (min-width: 768px) {
        padding: 1vw 6vw 1vw 6vw;
        font-size: 1vw;
        margin-top: 1vw;
    }
`
const Consent = styled.p`
    margin-top: 3vw;
    color: white;
    font-size: 3vw;
    @media only screen and (min-width: 768px) {
        margin-top: 1vw;
        font-size: 1vw;
    }
`
const MobileImage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    @media only screen and (min-width: 768px) {
        display: none;
    }
`

const CongratsContainer = styled.div`
    width: 95vw;
    padding: 0 7vw 0 7vw;
    background-color: rgba(0, 0, 0, 0.75);
    position: relative;
    margin: 0 auto;
    margin-top: 30vw;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
      @media only screen and (min-width: 768px) {
        display: block;
        text-align: left;
        width: 40vw;
        height: 40vw;
        padding: 3vw 4vw 3vw 4vw;
        margin-top: 10vw;
      }
`

const CongratsHeader = styled.h1`
    font-size: 7vw;
    color: white;
    margin-top: 4vw;
    @media only screen and (min-width: 768px) {
        font-size: 3vw;
        margin-top: 0;
        text-align: center;
        width: 100%;
    }
`
const CongratsImageContainer = styled.div`
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    width: 12vw;
    height: 12vw;
    margin-top: 3vw;
`

const CongratsDesc = styled.p`
    margin: 0 auto;
    color: white;
    margin-top: 8vw;
    width: 70vw;
    font-size: 3vw;
    @media only screen and (min-width: 768px) {
      margin-top: 3vw;
        font-size: 1.2vw;
        width: 30vw;
        text-align: center;
    }
`
const ContactButton = styled.button`
    padding: 4vw 25vw 4vw 25vw;
    color: black;
    background-color: white;
    border: none;
    border-radius: 5px;
    margin-top: 3vw;
    cursor: pointer;
    font-size: 4vw;
    background-color: #e6be8a;
    @media only screen and (min-width: 768px) {
        padding: 1vw 6vw 1vw 6vw;
        font-size: 1vw;
        margin-top: 3vw;
    }
`