import React, { useState } from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'; 

type HeaderProps = {
    isMobile: boolean,
}

const Header = (props: HeaderProps) => {
    const { isMobile } = props;
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return(
        <div className="header-wrapper">
            {
                isMobile
                ?
                (
                    <Container>
                        <Navbar color="faded" light>
                            <NavbarBrand href="/" className="mr-auto">
                                <img src="/logo.png" alt="tvojauto-logo"></img>
                            </NavbarBrand>
                            
                            
                            <NavbarToggler onClick={toggleNavbar} className="mr-2" />

                            <Collapse isOpen={!collapsed} navbar>
                                <Nav navbar>
                                <NavItem>
                                    <div className="search-field">
                                        <input type="text" placeholder="Pretraži članke..."></input>
                                        <img src="/search-icon.png"></img>
                                    </div>
                                </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </Container>
                    
                    
                )
               :
               (
                    <Container>
                        <Navbar color="faded" light>
                            <NavbarBrand href="/" className="mr-auto">
                                <img src="/logo.png" alt="tvojauto-logo"></img>
                            </NavbarBrand>
                            
                            <NavItem>
                                <NavLink href="/">Polovni</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Novi</NavLink>
                            </NavItem>
                            <NavItem>
                                <div className="search-field">
                                    <input type="text" placeholder="Pretraži članke..."></input>
                                    <img src="/search-icon.png"></img>
                                </div>
                            </NavItem>
                            
                        </Navbar>
                    </Container>
                    
               ) 
            }
        </div>
    )
}

export default Header;