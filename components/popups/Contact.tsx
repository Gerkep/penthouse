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

const ContactModal = ({onClose}: any) => {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const templateParams = {
          email: `${email}`,
          message: `${message}`,
        };
            send("service_frl23bb","template_cucsdep", templateParams, process.env.NEXT_PUBLIC_EMAILJS_USER_KEY)
            .then(function(response) {
                setLoading(false);
                setSent(true);
            }, function(error) {
                console.log('FAILED...', error);
                setLoading(false);
                showNotification({
                    id: 'email error',
                    disallowClose: true,
                    autoClose: 4000,
                    title: "Email was not sent",
                    message: 'Error occurred while sending email. Please contact us!',
                    color: 'red',
                })
            });  
      }

    return (
        <ModalTemplate onClose={onClose}>
            {sent ?
            <div>
            <Tick>
                <Image alt="background" layout='fill' objectFit='contain'  src={tick}></Image> 
            </Tick>  
            <ModalTitle>Email sent</ModalTitle>
                <Description className={styles.roboto}>
                    You can expect more details on the purchase process soon. Keep an eye on your inbox.
                </Description>
                <Link href="/">
                <SubmitBtn onClick={() => onClose()}>
                        <b>Back to home</b>
                </SubmitBtn>
                </Link>
            </div>            
            :
            <div>
            <ModalTitle>Contact us</ModalTitle>
            <form onSubmit={(e) => sendEmail(e)} style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                <InputContainer>
                    <InputLabel className={styles.roboto}>Your Email</InputLabel>
                    <EmailInput type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="yourmail@gmail.com"></EmailInput>
                </InputContainer> 
                <InputContainer>
                    <InputLabel className={styles.roboto}>Message</InputLabel>
                    <MessageInput required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Hello..."></MessageInput>
                </InputContainer> 
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    <SubmitBtn>
                        {loading ?
                        <SmallSpinner></SmallSpinner>
                        :
                        <b>Send</b>
                        }
                    </SubmitBtn>
                </div>
            </form>
            </div>
            }
        </ModalTemplate>
    )
}

export default ContactModal;

const InputContainer = styled.div`
    width: 90%;
    margin-top: 4vw;
    @media only screen and (min-width: 768px) {
        margin-top: 2vw;
    }
`
const InputLabel = styled.label`
    color: #6A6A6A;
    font-size: 3vw;
    margin-left: 1vw;
    @media only screen and (min-width: 768px) {
        font-size: 1vw;
        margin-left: 0.3vw;
    }
`

const EmailInput = styled.input`
    width: 100%;
    height: 10vw;
    color: white;
    border-radius: 10px;
    background-color: #1A1A1A;
    border: 1px #1F1F1F solid;
    margin-top: 2vw;
    outline: none;
    padding-left: 3vw;
    font-size: 3vw;
    @media only screen and (min-width: 768px) {
        height: 3vw;
        margin-top: 1vw;
        padding-left: 1vw;
        font-size: 1.2vw;
    }
`

const MessageInput = styled.textarea`
    width: 100%;
    height: 20vw;
    color: white;
    border-radius: 10px;
    background-color: #1A1A1A;
    border: 1px #1F1F1F solid;
    margin-top: 1vw;
    outline: none;
    padding-left: 3vw;
    font-size: 3vw;
    padding-top: 2vw;
    @media only screen and (min-width: 768px) {
        height: 6vw;
        margin-top: 1vw;
        padding-left: 1vw;
        padding-top: 0.5vw;
        font-size: 1.2vw;
    }
`

const SubmitBtn = styled.button`
    margin: 0 auto; 
    margin-top: 8vw;
    width: 50vw;
    height: 10vw;
    background-color: #e6be8a;
    font-size: 3vw;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: ease-in 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
      transform: scale(0.95);
    }
    @media only screen and (min-width: 768px) {
        width: 20vw;
        height: 3vw;
        font-size: 1vw;
        margin-top: 3vw;
    }
`
const Tick = styled.div`
    margin: 0 auto;
    position: relative;
    width: 12vw;
    height: 12vw;
    margin-bottom: 8vw;
    @media only screen and (min-width: 768px) {
        width: 6vw;
        height: 6vw;
        margin-bottom: 3vw;
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