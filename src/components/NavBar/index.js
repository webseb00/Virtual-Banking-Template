import { useState, useEffect } from 'react';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={toggleHome}>
              Logo
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" 
                smooth={true} 
                offset={80} 
                duration={500}
                activeClass="active"
                spy={true}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="discover" 
                smooth={true} 
                offset={80} 
                duration={500}
                activeClass="active"
                spy={true}
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="services" 
                smooth={true} 
                offset={80} 
                duration={500}
                activeClass="active"
                spy={true}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="signup" 
                smooth={true} 
                offset={80} 
                duration={500}
                activeClass="active"
                spy={true}
              >
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;