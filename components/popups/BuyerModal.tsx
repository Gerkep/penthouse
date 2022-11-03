import styled from "styled-components";
import ModalTemplate from "./ModalTemplate";
import ModalTitle from "./ModalTitle";
import styles from '../../styles/Home.module.css';
import Image from "next/image";
import kenzoNFT from "../../public/img/kenzoNFT.jpg";
const BuyerModal = ({onClose}: any) => {
    
    return (
        <ModalTemplate onClose={onClose}>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "3vw"}}>
            <NFTContainer>
                <Image alt="background" layout='fill' objectFit='cover'  src={kenzoNFT}></Image> 
            </NFTContainer>
            </div>
            <ModalTitle>Congratulations!</ModalTitle>
            <Description className={styles.roboto}>You have sucessfully minted Kenzo Penthouse! Schedule a meeting with us whenever suits you, so we can provide you with more details on your property.</Description>
            {/* <form style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                <InputContainer>
                    <InputLabel>Promotor Address(optional)</InputLabel>
                    <PromotorInput placeholder="0x0..."></PromotorInput>
                </InputContainer> 
            </form>*/}
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            <SubmitBtn>Schedule a meeting</SubmitBtn>
            </div>
        </ModalTemplate>
    )
}

export default BuyerModal;

const Description = styled.p`
    text-align: center;
    font-size: 4vw;
    line-height: 6vw;
    color: #ABABAB;
    @media only screen and (min-width: 768px) {
        font-size: 1.2vw;
        line-height: 2vw;
        margin-top: 2vw;
    }
`

const NFTContainer = styled.div`
    width: 40vw;
    height: 40vw;
    position: relative;
    border: solid white 1px;
    border-radius: 10px;
    margin-bottom: 10vw;
    @media only screen and (min-width: 768px) {
        width: 15vw;
        height: 15vw;
        margin-bottom: 3vw;
    }
`
// const InputContainer = styled.div`
//     width: 90%;
//     margin-top: 12vw;
//     @media only screen and (min-width: 768px) {
//         margin-top: 3vw;
//     }
// `
// const InputLabel = styled.label`
//     color: #6A6A6A;
//     font-size: 3vw;
//     margin-left: 1vw;
//     @media only screen and (min-width: 768px) {
//         font-size: 1vw;
//         margin-left: 0.3vw;
//     }
// `
// c
// const PromotorInput = styled.input`
//     width: 100%;
//     height: 10vw;
//     color: white;
//     border-radius: 10px;
//     background-color: #1A1A1A;
//     border: 1px #1F1F1F solid;
//     margin-top: 2vw;
//     outline: none;
//     padding-left: 3vw;
//     font-size: 3vw;
//     @media only screen and (min-width: 768px) {
//         height: 3vw;
//         margin-top: 1vw;
//         padding-left: 1vw;
//         font-size: 1.5vw;
//     }
// `

const SubmitBtn = styled.button`
    margin-top: 8vw;
    width: 50vw;
    height: 10vw;
    background-color: white;
    font-size: 4vw;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    @media only screen and (min-width: 768px) {
        width: 20vw;
        height: 3vw;
        font-size: 1vw;
        margin-top: 3vw;

    }
`