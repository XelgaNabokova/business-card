import { NavLink } from "react-router-dom"
import styled from "styled-components"

const navigation = [
    {id: 0, title: 'Main', to: '/'},
    {id: 1, title: 'Skills', to: '/skills'},
    {id: 2, title: 'Portfolio', to: '/portfolio'},
    {id: 3, title: 'Life', to: '/life'},
    {id: 4, title: 'Contacts', to: '/contacts'},
]

const Navigation = () => {
    return(
        <Nav>
            <NavList>
                {navigation.map(({id, title, to}) => (
                    <NavItem key={id}>
                        <SNavLink 
                            to={to}
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >{title}</SNavLink>
                    </NavItem>
                ))}
            </NavList>
        </Nav>
    )
}
export default Navigation


const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
`

const NavList = styled.ul`
    display: flex;
`

const NavItem = styled.li`
    margin-right: 2.5rem;
    &:last-child {
        margin-right: 0;
    }
`

const SNavLink = styled(NavLink)`
    font-weight: 800;
    font-size: 24px;
    text-decoration: none;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    border-bottom: .2rem solid transparent;
    &:hover, &.active {
        border-color:  ${({ theme }) => theme.colors.font}
    }
`


