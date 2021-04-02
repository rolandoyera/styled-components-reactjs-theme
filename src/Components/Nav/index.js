import { React, useState } from 'react';
import { Nav, Logo, Hamburger, Menu, MenuLink, Container } from './Styles'


const NavBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Container>
        <Logo>Develop<span>Her</span></Logo>
        <Menu isOpen={isOpen}>
          <MenuLink href="">My Work</MenuLink>
          <MenuLink href="">Contact</MenuLink>
        </Menu>
        {children}
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>

      </Container>
    </Nav>
  );
}

export default NavBar;


