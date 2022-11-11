import styled from 'styled-components';
import Header from '../components/Header';
import kenzoBackground from '../public/img/background.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css';
import Loading from '../components/Loading';
import NFTImage from "../public/img/kenzoNFT.jpg"

export default function Home() {

  const [openPromotionModal, setOpenPromotionModal] = useState(false);

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if(window.innerWidth <= 768){
      setMobile(true);
    }
  }, [])
  
  const ref = useRef<null | HTMLDivElement>(null);
  const handleScroll = () => {
    ref.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  return (
    <>
      <Loading />
      <div style={{position: "fixed", top: "0", left: "0", width: "100%", zIndex: "0"}}>
      <Background>
          <Image alt="background" layout='fill' objectFit='cover'  src={kenzoBackground}></Image> 
      </Background>
      <Header onContactClick={handleScroll} onPromotionClick={() => setOpenPromotionModal(true)}/>
      <BuyContainer>
        <FirstColumn>
            <BuyHeader>Kenzo Penthouse</BuyHeader>
        </FirstColumn>
        <SecondColumn>
            <NFTImageContainer>
                <Image alt="background" layout='fill' objectFit='cover'  src={NFTImage}></Image> 
            </NFTImageContainer>      
        </SecondColumn>    
      </BuyContainer>
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
    width: 75vw;
    height: 40vw;
    padding: 0 3vw 0 3vw;
    background-color: rgba(0, 0, 0, 0.75);
    position: relative;
    margin: 0 auto;
    margin-top: 10vw;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      ". ."; 
`

const NFTImageContainer = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    width: 35vw;
    height: 35vw;
`

const SecondColumn = styled.div`
    display: flex;
    width: 100%;
    heiight: 100%;
    justify-content: end;
    align-items: center;
`

const FirstColumn = styled.div`
    padding: 3vw 0 3vw 0;
`

const BuyHeader = styled.div`
    font-size: 3vw;
    color: white;
`