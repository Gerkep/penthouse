import styled from "styled-components";
import ModalTemplate from "./ModalTemplate";
import ModalTitle from "./ModalTitle";
import styles from '../../styles/Home.module.css';

const PromotionModal = ({onClose}: any) => {
    return (
        <ModalTemplate onClose={onClose}>
            <ModalTitle>Promote & Earn</ModalTitle>
            <PromotionDescription className={styles.roboto}>Lorem ipsum doro laten asdf asfgdf gsd aegfrae fava linus taten loros fungus imus turus loma hans erand funs:</PromotionDescription>
            <Sum className={styles.roboto}>$20 000</Sum>
            <div style={{display: "flex", justifyContent: "center"}}>
                <ApplyButton>Apply now!</ApplyButton>
            </div>
        </ModalTemplate>
    )
}

export default PromotionModal;

const PromotionDescription = styled.p`
    text-align: center;
    font-size: 3vw;
    margin-top: 15vw;
    color: #ABABAB;
    @media only screen and (min-width: 768px) {
        margin-top: 3vw;
        font-size: 1.2vw;
        line-height: 2vw;
    }
`

const Sum = styled.p`
    font-size: 8vw;
    text-align: center;
    margin-top: 10vw;
    font-weight: 700;
    @media only screen and (min-width: 768px) {
        font-size: 4vw;
        margin-top: 4vw;
    }
`

const ApplyButton = styled.button`
    margin-top: 20vw;
    padding: 3vw 22vw 3vw 22vw;
    background-color: white;
    font-size: 3vw;
    color: black;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    @media only screen and (min-width: 768px) {
        font-size: 1.2vw;
        padding: 1vw 8vw 1vw 8vw;
        margin-top: 5vw;
    }
`