import styled, { keyframes } from "styled-components"

const title = `Hi, I'm Olga 


<Frontend 
        developer/>
`;

const Main = () => {
    return(
        <>
            <main className="container">
                <Title className="glitch" data-text={title}>{title}</Title>
                <Image></Image>
            </main>
        </>
    )
}
export default Main

const Image = styled.div`
    background: url("src/image/main-page.png");
    width: 100%;
    height: 100%;
`

const glitch = keyframes`
    0% {
      text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
        0.025em 0.04em 0 #fffc00;
    }
    15% {
      text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
        0.025em 0.04em 0 #fffc00;
    }
    16% {
      text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
        -0.05em -0.05em 0 #fffc00;
    }
    49% {
      text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
        -0.05em -0.05em 0 #fffc00;
    }
    50% {
      text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
        0 -0.04em 0 #fffc00;
    }
    99% {
      text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
        0 -0.04em 0 #fffc00;
    }
    100% {
      text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
        -0.04em -0.025em 0 #fffc00;
    }
`

const Title = styled.h1`
    margin-top: 12rem;
    // max-width: 30rem;
    &.glitch {
        position: relative;
        text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
        0.025em 0.04em 0 #fffc00;
        animation: ${glitch} 1.5s infinite;

        &:before, &:after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0.75;
        }
        &:before {
            animation: ${glitch} 1s infinite;
            clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
            -webkit-transform: translate(-0.04em, -0.03em);
            -ms-transform: translate(-0.04em, -0.03em);
            transform: translate(-0.04em, -0.03em);
        }
        &:after {
            animation: ${glitch} 750ms infinite;
            clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
            -webkit-transform: translate(0.04em, 0.03em);
            -ms-transform: translate(0.04em, 0.03em);
            transform: translate(0.04em, 0.03em);
        }
    }
`


