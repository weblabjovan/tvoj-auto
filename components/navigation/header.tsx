import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'; 

type HeaderProps = {
    isMobile: boolean,
}

const Header = (props: HeaderProps) => {
    const { isMobile } = props;
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return(
        <div className="header-wrapper">
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">
                    <img src="/logo.png" alt="tvojauto-logo"></img>
                </NavbarBrand>
                
                {
                    isMobile
                    ?
                    (
                        <React.Fragment>
                            <NavbarToggler onClick={toggleNavbar} className="mr-2" />

                            <Collapse isOpen={!collapsed} navbar>
                                <Nav navbar>
                                    <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                    </NavItem>
                                    <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </React.Fragment>
                    )
                    :
                    null
                }
                
            </Navbar>
        </div>
    )
}

export default Header;