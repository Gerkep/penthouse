import styled from 'styled-components';

const ModalTitle = (props: any) => {
    return(
        <Title>
            {props.children}
        </Title>
    )
}

export default ModalTitle;

const Title = styled.div`
    font-size: 8vw;
    text-align: center;
    margin-bottom: 5vw;
    color: white;
    @media only screen and (min-width: 768px) {
        font-size: 3vw;
        margin-bottom: 3vw;
    }
`