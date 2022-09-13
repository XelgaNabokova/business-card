import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
import Toggle from "../Toggle/Toggle";

export interface HeaderProps {
    switchTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({switchTheme}) => {
    return(
        <SHeader>
            <Toggle switchTheme={switchTheme}/>
            <Navigation/>
        </SHeader>
    )
}
export default Header

const SHeader = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;  
    padding: 2rem 4vw 0;
`

const ButtonTheme = styled.button`
    width: 4rem;
    height: 2rem;
    border: 1px solid #043D55;
    border-radius: .3rem;
    color: #043D55;
    cursor: pointer;
    transition: .3s easy;
    &:hover{
        background: #043D55;
        color: #fff;
    }
`