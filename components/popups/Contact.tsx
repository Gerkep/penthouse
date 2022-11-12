import { useState } from "react";
import styled from "styled-components";
import ModalTemplate from "./ModalTemplate";
import ModalTitle from "./ModalTitle";

const ContactModal = ({onClose}: any) => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <ModalTemplate onClose={onClose}>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "3vw"}}>
            </div>
            <ModalTitle>Contact us</ModalTitle>
            <form style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                <InputContainer>
                    <InputLabel>Your Email</InputLabel>
                    <EmailInput type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="yourmail@gmail.com"></EmailInput>
                </InputContainer> 
                <InputContainer>
                    <InputLabel>Message</InputLabel>
                    <MessageInput required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Hello..."></MessageInput>
                </InputContainer> 
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    <SubmitBtn><b>Send</b></SubmitBtn>
                </div>
            </form>
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
    margin-top: 8vw;
    width: 50vw;
    height: 10vw;
    background-color: #e6be8a;
    font-size: 4vw;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: ease-in 0.2s;
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