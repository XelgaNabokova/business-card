import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Roboto';
        background: ${props => props.theme.colors.bg};
        color:  ${props => props.theme.colors.font};
    }
    
    *, ::after, ::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    h1 {
        font-weight: 700;
        font-size: 50px;
        line-height: 70px;
        color: ${props => props.theme.colors.font};
    }

    a {
        color: ${props => props.theme.colors.font};
    }

    li {
        list-style: none;
    }

    svg {
        width: 2.5rem;
        height: 2.5rem;
        fill: ${({ theme }) => theme.colors.font};
    }
    
    .container {
        margin: 0 4vw;
    }
`