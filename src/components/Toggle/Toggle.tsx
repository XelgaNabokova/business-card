import { useState } from "react";
import styled, { keyframes } from "styled-components";
import IconMoon from "../../image/IconMoon";
import IconSun from "../../image/IconSun";
import { HeaderProps } from "../Header/Header";

const Toggle: React.FC<HeaderProps> = ({switchTheme}) => {

    const [changeIcon, setChangeIcon] = useState(false);

    const handleChange = () => {
        switchTheme();
        setChangeIcon(!changeIcon);
        return;
    }

    return(
        <SToggle onClick={handleChange} className={changeIcon? "true" : "false"}>
            {/* <input type="checkbox" onChange={switchTheme}/> */}
            {changeIcon ? <IconMoon/> : <IconSun/>}
        </SToggle>
    )
}

export default Toggle

const hide = keyframes`
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-5rem);
    }
    100% {
        transform: translateX(-10rem);
    }
`

const privet = keyframes`
    0% {
        transform: translateX(-10rem);
    }
    50% {
        transform: translateX(-5rem);
    }
    100% {
        transform: translateX(0);
    }
`

const SToggle = styled.div`
    position: relative;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.font};
    cursor: pointer;

    // &.true > svg.sun {
    //     animation: ${hide} 1s;
    // }
    // & > svg.moon {
    //     animation: ${privet} 1s;
    // }

    & > svg {
        position: absolute;
        top: 7px;
        left: 7px;
        -webkit-transition: .4s easy;
        transition: .4s easy;
    }
`

// const SToggle = styled.div`
//     display: flex;

//     & > input {
//         position: relative;
//         display: inline-block;

//         width: 4rem;
//         height: 2.12rem;
//         background-color: ${({ theme }) => theme.colors.font};
//         border: 1px solid ${({ theme }) => theme.colors.font};
//         border-radius: 1rem;
    
//         outline: none;
//         cursor: pointer;

//         -webkit-appearance: none;
//         -moz-appearance: none;
//         appearance: none;

//         -webkit-transition: .4s easy;
//         transition: .4s easy;

//         &::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: -3px;

//             width: 2rem;
//             height: 2rem;
//             background-color: ${({ theme }) => theme.colors.lightGray};
//             border-radius: 50%;
//             transform: translateX(4px);
//         }

//         &:checked::before {
//             transform: translateX(calc(100% + 1px));
//             background-color: ${({ theme }) => theme.colors.darkBlue};
//         }
//     }
// `