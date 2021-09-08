import React from 'react'
import { Nav, NavIcon, NavLink, Bars } from "./NavbarElements";
const Navbar = ({ toggle }) => {
    return (
        <div>
            <Nav>
                <NavLink to="/">The Pasta Shop</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </div>
    )
}

export default Navbar
