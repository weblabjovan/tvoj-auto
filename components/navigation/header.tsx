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
                                    <ul>
                                        <NavItem>
                                            <div className="search-field">
                                                <label htmlFor="navPostSearch" style={{"visibility":"hidden"}}>Neki label</label>
                                                <input type="text" placeholder="Pretraži članke..." id="navPostSearch"></input>
                                                <img src="/search-icon.png" alt="search icon"></img>
                                            </div>
                                        </NavItem>
                                    </ul>
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
                            <ul>

                            
                                {/* <NavItem>
                                    <NavLink href="/">Polovni</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Novi</NavLink>
                                </NavItem> */}
                                <NavItem>
                                    <div className="search-field">
                                        <label htmlFor="navPostSearch" style={{"color":"#fff"}}>-</label>
                                        <input type="text" placeholder="Pretraži članke..." id="navPostSearch"></input>
                                        <img src="/search-icon.png" alt="search icon"></img>
                                    </div>
                                </NavItem>
                            </ul>
                            
                        </Navbar>
                    </Container>
                    
               ) 
            }
        </div>
    )
}

export default Header;