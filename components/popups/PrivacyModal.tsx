import { useState } from "react";
import styled from "styled-components";
import ModalTemplate from "./ModalTemplate";
import ModalTitle from "./ModalTitle";
import { send } from "@emailjs/browser";
import { showNotification } from '@mantine/notifications';
import { SmallSpinner } from "../Loading";
import styles from '../../styles/Home.module.css';
import Link from "next/link";
import tick from "../../public/img/icons/tick.png"
import Image from "next/image";

const PrivacyModal = ({onClose, text}: any) => {

    return (
        <ModalTemplate onClose={onClose}>
            <div>
            <ModalTitle>Privacy Policy</ModalTitle>
                <Description className={styles.roboto}>
                   {text}
                </Description>
            </div>            
        </ModalTemplate>
    )
}

export default PrivacyModal;

const InputContainer = styled.div`
    width: 90%;
    margin-top: 4vw;
    @media only screen and (min-width: 768px) {
        margin-top: 2vw;
    }
`


const Description = styled.p`
    margin: 0 auto;
    color: white;
    text-align: center;
    margin-top: 8vw;
    width: 70vw;
    font-size: 3vw;
    @media only screen and (min-width: 768px) {
        margin-top: 4vw;
        font-size: 1.2vw;
        line-height: 1.8vw;
        width: 32vw;
    }
`