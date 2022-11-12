import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

export default function Loading() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url:string) => (url === router.asPath) && setLoading(false);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })
    
    return  (
    <div>
        {loading &&
            <LoadingContainer>
                <Spinner></Spinner>
            </LoadingContainer>
        }
    </div>
    );
}

export function SmallSpinner() {
    return  (
        <div>
            <SpinnerBlack></SpinnerBlack>
        </div>
    )
}
const spinner = keyframes`
    100% {
        transform: rotate(1turn);
    }
`

const LoadingContainer = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 101;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Spinner = styled.div`
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: radial-gradient(farthest-side,#e6be8a 94%,#0000) top/9px 9px no-repeat,
            conic-gradient(#0000 30%,#e6be8a);
        -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);
        animation: ${spinner} 1s infinite linear;
`

const SpinnerBlack = styled.div`
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background: radial-gradient(farthest-side,#000000 94%,#0000) top/0.1rem 0.1rem no-repeat,
        conic-gradient(#0000 30%,#000000);
    -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 0.2rem),#000 0);
    animation: ${spinner}    1s infinite linear;
`