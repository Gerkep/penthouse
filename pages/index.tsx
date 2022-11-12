import styled from 'styled-components';
import Header from '../components/Header';
import kenzoBackground from '../public/img/background.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css';
import { IoIosPin } from "react-icons/io";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { HiArrowsExpand, HiOutlineCubeTransparent } from "react-icons/hi";
import Footer from '../components/Footer';
import Link from 'next/link';
import neighbourhoodImage from "../public/img/neighbourhood.png";
import viewsImage from "../public/img/views.png";
import locationImage from "../public/img/location.png";
import kenzoFire from "../public/img/kenzoFire.png";
import roomsIcon from "../public/img/icons/rooms.png";
import locationIcon from "../public/img/icons/location.png";
import areaIcon from "../public/img/icons/area.png";
import terraceIcon from "../public/img/icons/terrace.png";
import floorIcon from "../public/img/icons/floor.png";
import pdfIcon from "../public/img/icons/pdf.png";
import cutleryIcon from "../public/img/icons/cutlery.png";
import swimmingpoolIcon from "../public/img/icons/swimmingpool.png";
import spaIcon from "../public/img/icons/spa.png";
import highlightsIcon from "../public/img/highlights.png";
import NFTImage from "../public/img/kenzoNFT.jpg";
import planImage from "../public/img/plan.png";
import livingRoom from "../public/img/kenzoLiving.png";
import highlightsMobile from "../public/img/highlightsMobile.png";
import SlideLeft from "../components/animations/SlideLeft";
import SlideRight from "../components/animations/SlideRight";
import Appearing from "../components/animations/Appearing";
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
      <TitleSection>
        <PreTitle className={styles.roboto}>City Park presents:</PreTitle>
        <MainTitle><LightText>Kenzo</LightText> Penthouse</MainTitle>
        <MainDescription className={styles.roboto}>Luxurious penthouse located in heart of Poznań backed by blockchain technology.</MainDescription>
      </TitleSection>
      <ButtonsSection>
        <Link href="https://hammerhead-doll-50e.notion.site/Penthouse-Kenzo-bb570472844e49a5b3b92b7721af3edc"><MainBtn style={{backgroundColor: "black"}}>Learn more</MainBtn></Link>
        <Link href="/buy"><MainBtn style={{backgroundColor: "white", color: "black"}}><b>Buy now</b></MainBtn></Link>
      </ButtonsSection>
      <MintContainer>
        <MintTitle>Buy Kenzo today</MintTitle>
        <MintDescription className={styles.roboto}>The most luxurious penthouse listed with NFT ever. Pay in crypto and get the keys ASAP.</MintDescription>
        <Link href="/buy"><MintButton><b>Buy now</b></MintButton></Link>
      </MintContainer>
      </div>
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
      <PageContent style={{marginTop: "100vh"}}>
        <Section>
          <SectionHeader>
            {mobile ?
              <Header2>Property Highlights</Header2>            
            :
              <SlideLeft>
              <Header2>Property Highlights</Header2>
              </SlideLeft>            
            }
            <SlideRight>
            <HeaderDescContainer>
            <HorizontalLine></HorizontalLine>
              <HeaderDescription className={styles.roboto}>
                  Lorem ipsum modulum cumulum gsaf u8o asdf wer naiuguh f adsfg;aerwgf aisudf bsajkh iuwe bkajlsdf uwioa nadkjfhaew vafsd 
              </HeaderDescription>
            </HeaderDescContainer>
            </SlideRight>
          </SectionHeader>
          <SectionContent>
            <HighlightContainer>
              <Image alt="background" layout='fill' objectFit='cover'  src={viewsImage}></Image> 
              <HighlightDescContainer className={styles.roboto}>
                <HighlightDescHeader>
                  Amazing Views
                </HighlightDescHeader>
                <HighlightDesc>
                   Lorem ipsum modulum aisudf bsajkh iuwe bkajlsdf uwioa nadkjfhaew afw vafsd fds dsafadg
                </HighlightDesc>
              </HighlightDescContainer>
            </HighlightContainer>
            <HighlightMidContainer style={{zIndex: "100"}}>
              <Image alt="background" layout='fill' objectFit='cover'  src={locationImage}></Image> 
              <HighlightDescContainer className={styles.roboto}>
                <HighlightDescHeader>
                  Great Location
                </HighlightDescHeader>
                <HighlightDesc>
                   Lorem ipsum modulum aisudf bsajkh iuwe bkajlsdf uwioa nadkjfhaew afw vafsd fds dsafadg
                </HighlightDesc>
              </HighlightDescContainer>
            </HighlightMidContainer>
            <HighlightContainer>
              <Image alt="background" layout='fill' objectFit='cover'  src={neighbourhoodImage}></Image> 
              <HighlightDescContainer className={styles.roboto}>
                <HighlightDescHeader>
                  Luxurious Neighbourhood
                </HighlightDescHeader>
                <HighlightDesc>
                   Lorem ipsum modulum aisudf bsajkh iuwe bkajlsdf uwioa nadkjfhaew afw vafsd fds dsafadg
                </HighlightDesc>
              </HighlightDescContainer>
            </HighlightContainer>
          </SectionContent>
        </Section>
        <Section>
          <SectionHeader>
            {mobile ?
              <Header2>KenzoPenthouse</Header2>            
            :
              <SlideLeft>
              <Header2>KenzoPenthouse</Header2>
              </SlideLeft>            
            }
            <SlideRight>
            <HeaderDescContainer>
            <HorizontalLine></HorizontalLine>
            <HeaderDescription className={styles.roboto}>
                Lorem ipsum modulum cumulum gsaf u8o asdf wer naiuguh f adsfg;aerwgf aisudf bsajkh iuwe bkajlsdf uwioa nadkjfhaew af 
            </HeaderDescription>
            </HeaderDescContainer>
            </SlideRight>
          </SectionHeader>
          <SectionContent>
            <PropertySection>
              <div>
                <KenzoDescription className={styles.roboto}>
                  Lorem ipsum modulum cumulum gsaf u8o asdf wer naiuguh f adsfg;aerwgf aisudf bsajkh iuwe bkajlsdf uwioa nadkjfhaew afw 
                  vafsd more text here sdfa ashgr sdghlw grteh wel aiuwe gadflh agregerth lerhguo rghiersu berfg dfgsrhs.
                </KenzoDescription>
                <KenzoProps className={styles.roboto}>
                  <Prop>
                    <PropImage>
                      <Image alt="background" layout='fill' objectFit='contain'  src={locationIcon}></Image> 
                    </PropImage>
                    <PropText>Poznań, Poland</PropText>
                  </Prop>
                  <Prop>
                    <PropImage>
                      <Image alt="background" layout='fill' objectFit='contain'  src={terraceIcon}></Image> 
                    </PropImage>
                    <PropText>897 sq. ft. terrace</PropText>
                  </Prop>
                  <Prop>
                    <PropImage>
                      <Image alt="background" layout='fill' objectFit='contain'  src={floorIcon}></Image> 
                    </PropImage>
                    <PropText>3rd floor</PropText>
                  </Prop>
                  <Prop>
                    <PropImage>
                      <Image alt="background" layout='fill' objectFit='contain'  src={roomsIcon}></Image> 
                    </PropImage>
                    <PropText>3 rooms</PropText>
                  </Prop>
                  <Prop>
                    <PropImage>
                      <Image alt="background" layout='fill' objectFit='contain'  src={areaIcon}></Image> 
                    </PropImage>
                    <PropText>2616 sq.ft interior</PropText>
                  </Prop>
                </KenzoProps>
                <Link href="https://hammerhead-doll-50e.notion.site/Penthouse-Kenzo-bb570472844e49a5b3b92b7721af3edc">
                  <PdfContainer>
                    <PropImage>
                      <Image alt="background" layout='fill' objectFit='contain'  src={pdfIcon}></Image> 
                    </PropImage>
                    <PdfText className={styles.roboto}>
                      Learn more<br /> about this property
                    </PdfText>
                  </PdfContainer>
                </Link>
              </div>
              {mobile ?
              <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <PropertyImage>
                    <Image alt="background" layout='fill' objectFit='cover'  src={kenzoFire}></Image> 
                </PropertyImage>     
              </div>
              :
                <PropertyImage>
                  <Image alt="background" layout='fill' objectFit='cover'  src={kenzoFire}></Image> 
                </PropertyImage>             
              }
            </PropertySection>
          </SectionContent>
        </Section>
          <SectionContent>
            <NFTSection>
              <SlideLeft>
                <SideImage>
                  <Image alt="background" layout='fill' objectFit='cover'  src={highlightsIcon}></Image> 
                </SideImage>
              </SlideLeft>
              <div>
                <NFTHeader>NFT Premium</NFTHeader>
                <TwoColumns>
                  <NFTImageContainer>
                    <Image alt="background" layout='fill' objectFit='cover'  src={NFTImage}></Image> 
                  </NFTImageContainer>
                  <div style={{paddingTop: "2vw"}}>
                    <HorizontalLine></HorizontalLine>
                    <NFTDescription className={styles.roboto}>
                      Lorem ipsum modulum cumulum gsaf u8o asdf wer naiuguh f adsfg;aerwgf aisudf bsajkh iuwe bkajlsdf uwioa nadkjfhaew afw vafsd more text here sdfa ashgr sdghlw.
                    </NFTDescription>
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
                  </div>
                  <BenefitsImageMobile>
                    <Image alt="background" layout='fill' objectFit='contain'  src={highlightsMobile}></Image> 
                  </BenefitsImageMobile>
                </TwoColumns>
              </div>
            </NFTSection>
          </SectionContent>
          <Section>
          <SectionContent>
            <PlanSection>
              <div>
                {mobile ?
                  <Header2>Plan and<br/> Room Dimensions</Header2>            
                :
                  <SlideLeft>
                  <Header2>Plan and<br/> Room Dimensions</Header2>
                  </SlideLeft>            
                }
                <PlanDescription className={styles.roboto}>
                  Lorem ipsum modulum cumulum gsaf u8o asdf wer naiuguh f adsfg;aerwgf aisudf bsajkh iuwe bkajlsdf uwioa nadk.
                </PlanDescription>
                <Dimensions>
                  <RoomDimension className={styles.roboto}>Adjoining room  ..........  26,24m<sup>2</sup></RoomDimension>
                  <RoomDimension className={styles.roboto}>Terrace  ...................... 83,40m<sup>2</sup></RoomDimension>
                  <RoomDimension className={styles.roboto}>Winter garden  ............  26,24m<sup>2</sup></RoomDimension>
                  <RoomDimension className={styles.roboto}>Room  ........................  48,71m<sup>2</sup></RoomDimension>
                  <RoomDimension className={styles.roboto}>Room  ......................... 31,97m<sup>2</sup></RoomDimension>
                  <RoomDimension className={styles.roboto}>Bathroom  ....................  9,52m<sup>2</sup></RoomDimension>
                  <RoomDimension className={styles.roboto}>Room with kitchen  ....  26,24m<sup>2</sup></RoomDimension>
                  <RoomDimension className={styles.roboto}>Winter garden  ............  21,82m<sup>2</sup></RoomDimension>
                  <TotalDimension className={styles.roboto}><b>Total interior space</b>  ............  <b>242,10m<sup>2</sup></b></TotalDimension>
                </Dimensions>
              </div>
              <SideImage>
                <Image alt="background" layout='fill' objectFit='cover'  src={planImage}></Image> 
              </SideImage>
              <PlanImageMobile>
                    <Image alt="background" layout='fill' objectFit='contain'  src={planImage}></Image> 
              </PlanImageMobile>
            </PlanSection>
          </SectionContent>
          </Section>
          <Appearing>
            <CTABackground>
              <Image alt="background" layout='fill' objectFit='cover'  src={livingRoom}></Image> 
              <CTAContainer>
                <CTAText>
                  Buy Kenzo Penthouse with Premium NFT now! 
                </CTAText>
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <Link href="/buy">
                  <CTAButton>
                    <b>Buy now</b>
                  </CTAButton>
                </Link>
                </div>
              </CTAContainer>
            </CTABackground>
          </Appearing>
          <div ref={ref}>
            <Footer />
          </div>
      </PageContent>
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
  color: white;
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
  color: white;
  @media only screen and (min-width: 768px) {
    font-size: 7vw;
    line-height: 8vw;
    margin-top: 0.5vw;
    letter-spacing: .3rem;
  }
`

const MainDescription = styled.p`
  font-size: 5vw;
  margin-top: 7vw;
  font-weight: 300;
  color: white;
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
  color: white;
  border: none;
  cursor: pointer;
  transition: ease-in 0.2s;
  &:hover{
    transform: scale(0.95);
  }
`

const AboutContainer = styled.div`
    display: none;
    @media only screen and (min-width: 768px) {
    display: flex;
    padding: 1vw 4vw 1vw 1vw;
    height: 5vw;
    background-color: rgba(0, 0, 0, 1);
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
    color: white;
`

const MintContainer = styled.div`
    display: none;
    @media only screen and (min-width: 768px) {
      display: block;
      top: 18vw;
      right: 10vw;
      position: absolute;
      background-color: black;
      width: 35vw;
      height: 18vw;
      border-radius: 10px;
      padding: 2vw;
    }
`

const MintTitle = styled.h2`
  font-size: 2.5vw;
  color: white;
`

const MintDescription = styled.p`
    font-size: 1.2vw;
    width: 85%;
    margin-top: 2vw;
    font-weight: 300;
    color: white;
`

const MintButton = styled.button`
    width: 15vw;
    height: 3vw;
    background-color: white;
    color: black;
    font-size: 1vw;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin-top: 2.5vw;
    margin-left: 15vw;
    transition: ease-in 0.2s;
    background-color: #e6be8a;
    &:hover{
      transform: scale(0.95);
    }
`
const PageContent = styled.div`
    z-index: 100;
    position: relative;
    background-color: black;
`
const Section = styled.div`
  padding: 20vw 0vw 20vw 0vw; 
  overflow: hidden;
  @media only screen and (min-width: 768px) {
      padding: 6vw 5vw 8vw 5vw;
  }
`
const Header2 = styled.h2`
    font-size: 8vw;
    text-align: center;
    color: white;
    letter-spacing: .3vw;
    @media only screen and (min-width: 768px) {
      font-size: 4vw;
      text-align: left;
      letter-spacing: .2vw;
    }
`
const HeaderDescContainer = styled.div`
    display: flex;
    margin-left: 5vw;
`
const SectionHeader = styled.div`
    width: 100%;
      @media only screen and (min-width: 768px) {
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
          ". ."; 
      }
`
const HorizontalLine = styled.div`
    display: none;
    @media only screen and (min-width: 768px) {
      border-top: 1px solid rgb(255, 255, 255);
      width: 7vw;
      margin-top: 2.5vw;
      display: block;
    }
`
const HeaderDescription = styled.p`
    display: none; 
    @media only screen and (min-width: 768px) {
      margin-left: 3vw;
      font-size: 1vw;
      margin-top: 2vw;
      line-height: 1.6vw;
      color: rgba(255, 255, 255, 0.75);
      width: 28vw;
      display: block;
    }
`

const SectionContent = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 15vw;
    justify-content: center;
    @media only screen and (min-width: 768px) { 
      margin-top: 4vw;
      flex-wrap: nowrap;
    }
`

const HighlightContainer = styled.div`
    width: 80vw;
    height: 110vw;
    margin-top: 10vw;
    position: relative;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    align-items: end;
    overflow: hidden;
    @media only screen and (min-width: 768px) { 
      width: 28vw;
      height: 30vw;
      margin-top: 0;
      margin: 2vw 0.5vw 0 0.5vw;
    }
`
const HighlightMidContainer = styled.div`
    width: 80vw;
    height: 110vw;
    margin-top: 10vw;
    position: relative;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    align-items: end;
    overflow: hidden;
    @media only screen and (min-width: 768px) { 
      width: 28vw;
      height: 30vw;
      margin: 2.5vw 0.5vw 0 0.5vw;
      transform: scale(1.1);
      box-shadow: 1px 1px 40px rgba(0, 0, 0, 0.75);
    }
`

const HighlightDescContainer = styled.div`
    position: relative;
    width: 70vw;
    background-color: rgba(0, 0, 0, 0.75);
    margin-bottom: 8vw;
    display: flex;
    flex-wrap: wrap;
    padding: 5vw 0 5vw 0;
    justify-content: center;
    @media only screen and (min-width: 768px) { 
      width: 21vw;
      margin-bottom: 2vw;
      padding: 1.5vw 0 2vw 0;
    }
`

const HighlightDescHeader = styled.h3`
    color: white;
    text-align: center;
    font-weight: 300;
    font-size: 5vw;
    @media only screen and (min-width: 768px) { 
      font-size: 1.5vw;
    }
`
const HighlightDesc = styled.p`
    text-align: center;
    color: white;
    margin-top: 4vw;
    font-size: 3vw;
    width: 80%;
    font-weight: 200;
    line-height: 4vw;
    color: rgba(255, 255, 255, 0.75);
    @media only screen and (min-width: 768px) { 
      margin-top: 1vw;
      font-size: 1vw;
      line-height: 1.4vw;
    }
`

const PropertySection = styled.div`
  @media only screen and (min-width: 768px) { 
      width: 100%;
      display: grid; 
      grid-template-columns: 1fr 1fr; 
      grid-template-rows: 1fr; 
      gap: 0px 0px; 
      grid-template-areas: 
        ". .";
  }
`

const PropertyImage = styled.div`
    position: relative;
    width: 60vw;
    margin-top: 10vw;
    height: 70vw;
    margin-left: 5vw;
    border-radius: 10px;
    overflow: hidden;
    @media only screen and (min-width: 768px) { 
      margin: 0 0 0 12vw;
      width: 30vw;
      height: 35vw;
    }
`

const KenzoDescription = styled.p`
    width: 100vw;
    padding: 0 10vw 0 10vw;
    text-align: center;
    color: white;
    line-height: 4vw;
    margin-bottom: 5vw;
    font-size: 3vw;
    @media only screen and (min-width: 768px) { 
      margin-left: 0vw;
      margin-bottom: 5vw;
      width: 30vw;
      font-size: 1vw;
      line-height: 1.6vw;
      padding: 0;
      text-align: left;
    }
`
const KenzoProps = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
      @media only screen and (min-width: 768px) { 
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
          ". ."
          ". ."
          ". ."; 
      }
`
const Prop = styled.div`
    display: flex;
    align-items: center;
    margin: 2vw 4vw 2vw 4vw;
    @media only screen and (min-width: 768px) { 
      font-size: 1vw;
      margin: 0 0 2vw 0;
    }
`
const PropImage = styled.div`
    position: relative;
    width: 4vw;
    height: 4vw;
    @media only screen and (min-width: 768px) { 
      width: 1.5vw;
      height: 1.5vw;
    }
`
const PropText = styled.p`
    color: white;
    margin-left: 3vw;
    font-size: 3vw;
    @media only screen and (min-width: 768px) {;
      font-size: 1vw;
      margin-left: 1.5vw;
    }
`

const PdfContainer = styled.div`
    margin: 0 auto;
    color: white;
    width: 30vw;
    background-color: #232323;
    display: flex;
    align-items: center;
    padding: 3vw 3vw 3vw 3vw;
    margin-top: 2vw;
    margin-left: 5vw;
    display: none;
    cursor: pointer;
    border-radius: 5px;
    transition: ease-in 0.2s;
    &:hover{
      transform: scale(0.95);
    }
    @media only screen and (min-width: 768px) { 
      padding: 1vw 1vw 1vw 1vw;
      width: 12vw;
      margin-left: 0;
      display: flex;
    }
`
const PdfText = styled.p`
    margin-left: 3vw;
    font-size: 2vw;
    line-height: 2.5vw;
    @media only screen and (min-width: 768px) {
      margin-left: 2vw;
      font-size: 0.7vw;
      line-height: 1.1vw;
    }
`

const NFTSection = styled.div`
  @media only screen and (min-width: 768px) {
      width: 100%;
      display: grid; 
      grid-template-columns: 0.8fr 1.2fr; 
      grid-template-rows: 1fr; 
      gap: 0px 0px; 
      grid-template-areas: 
        ". .";
        margin-top: 4vw;
  }
`
const NFTProps = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
      @media only screen and (min-width: 768px) {
        display: grid;
        width: auto;
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr; 
        grid-template-areas: 
          ". ."
          ". ."
          ". ."; 
        grid-template-areas: 
        ". ."
        ". ."
        ". ."; 
      }
`
const NFTProp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3vw;
  margin: 0 4vw 4vw 4vw;
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 0 0 2vw 0;
    font-size: 1vw;
  }
`
const SideImage = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
  display: block;
  position: relative;
  width: 100%;
  height: 31vw;
  }
`
const NFTHeader = styled.h2`
    font-size: 8vw;
    text-align: center;
    color: white;
    letter-spacing: .3vw;
    @media only screen and (min-width: 768px) {
      font-size: 4vw;
      text-align: left;
      margin-left: 8vw;
      letter-spacing: .2vw;
    }
`

const NFTImageContainer = styled.div`
    position: relative;
    margin: 0 auto;
    width: 30vw;
    height: 30vw;
    overflow: hidden;
    border: 1px white solid;
    font-size: 3vw;
    margin-bottom: 10vw;
    border-radius: 10px;
    box-shadow: 1px 1px 30px rgba(255, 255, 255, 0.5);
    @media only screen and (min-width: 768px) {
      box-shadow: none;
      width: 18vw;
      height: 18vw;
      font-size: 1vw;
      margin-left: 8vw;
      margin-bottom: 0vw;
      margin-top: 4vw;
      border: 1px white solid;
    }
`

const TwoColumns = styled.div`
  margin-top: 14vw;
  padding: 0;
  @media only screen and (min-width: 768px) {
    margin-top: 0;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      ". ."; 
  }
`

const NFTDescription = styled.p`
  width: 100vw;
  padding: 0 10vw 0 10vw;
  color: white;
  text-align: center;
  font-size: 3vw;
  margin-bottom: 14vw;
  @media only screen and (min-width: 768px) {
    margin-top: 2vw;
    padding: 0;
    width: 25vw;
    text-align: left;
    margin-bottom: 3vw;
    font-size: 1vw;
    line-height: 1.6vw;
  }
`
const BenefitsImageMobile = styled.div`
  position: relative;
  margin: 0 auto;
  width: 90vw;
  height: 70vw;
  overflow: hidden;
  margin-top: 5vw;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`
const PlanSection = styled.div`
  padding: 0;
  @media only screen and (min-width: 768px) {
    padding: 5vw 0 5vw 0;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      ". ."; 
  }
`
const PlanDescription = styled.p`
    width: 100vw;
    padding: 0 10vw 0 10vw;
    color: white;
    text-align: center;
    line-height: 4vw;
    margin-top: 10vw;
    font-size: 3vw;
    margin-bottom: 2vw;
    @media only screen and (min-width: 768px) {
      padding: 0;
      width: 40vw;
      font-size: 1vw;
      text-align: left;
      margin-bottom: 0;
      line-height: 1.6vw;
      margin-top: 3vw;
    }
`
const Dimensions = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 3vw;
    color: white;
    margin-top: 10vw;
    @media only screen and (min-width: 768px) {
      justify-content: start;
      font-size: 1vw;
      line-height: 1.6vw;
      margin-top: 2vw;
    }
`
const RoomDimension = styled.p`
    letter-spacing: .1vw;
    margin-top: 5vw;
    font-size: 3vw;
    color: white;
    margin-right: 2.5vw;
    @media only screen and (min-width: 768px) {
      margin-top: 1vw;
      font-size: 1vw;
    }
`
const TotalDimension = styled.p`
    letter-spacing: .1vw;
    margin-top: 7vw;
    color: white;
    margin-right: 2.5vw;
    @media only screen and (min-width: 768px) {
      margin-top: 2vw;
    }
`
const PlanImageMobile = styled.div`
  position: relative;
  margin: 0 auto;
  width: 90vw;
  height: 70vw;
  overflow: hidden;
  margin-top: 15vw;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`
const CTABackground = styled.div`
    width: 100%;
    height: 60vw;
    position: relative;
    margin: 0 auto;
    width: 90%;
    margin-top: 15vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
    @media only screen and (min-width: 768px) {
      height: 24vw;
      margin-top: 5vw;
    }
`
const CTAContainer = styled.div`
    width: 80%;
    height: 40vw;
    background-color: rgba(0, 0, 0, 0.75);
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    @media only screen and (min-width: 768px) {
      height: 16vw;
      width: 50%;
    }
`

const CTAText = styled.h2`
    text-align: center;
    margin: 0 auto;
    margin-top: 7vw;
    color: white;
    width: 80%;
    font-size: 5vw;
    @media only screen and (min-width: 768px) {
      margin-top: 2vw;
      font-size: 2.2vw;
    }
`
const CTAButton = styled.button`
    margin: 0 auto;
    padding: 2vw 10vw 2vw 10vw;
    background-color: white;
    color: black;
    border: none;
    border-radius: 15px;
    margin-top: 5vw;
    font-size: 3vw;
    cursor: pointer;
    transition: ease-in 0.2s;
    background-color: #e6be8a;
    &:hover{
      transform: scale(0.95);
    }
    @media only screen and (min-width: 768px) {
      margin-top: 2vw;
      font-size: 1vw;
      padding: 1vw 5vw 1vw 5vw;
    }
`