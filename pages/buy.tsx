import styled from 'styled-components';
import Header from '../components/Header';
import kenzoBackground from '../public/img/background.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css';
import Loading from '../components/Loading';

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
    width: 70vw;
    height: 35vw;
    background-color: black;
    position: relative;
    margin: 0 auto;
    margin-top: 15vw;
`