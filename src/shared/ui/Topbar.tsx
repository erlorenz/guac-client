import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Img from '../../images/logos/guac-logo.svg';
import { FaRegUser } from 'react-icons/fa';

const Topbar: React.FC = () => {
  return (
    <Container>
      <LeftSection>
        <LogoSymbol src={Img} />
        <SignIn>
          <FaRegUser /> <span>SIGN IN</span>
        </SignIn>
      </LeftSection>
      <NavSection>
        <NavItem>
          <StyledNavLink to="/order#menu">ORDER</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/catering">CATERING</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/ourmission">OUR MISSION</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/reviews">REVIEWS</StyledNavLink>
        </NavItem>
      </NavSection>
      <RightSection>Right</RightSection>
    </Container>
  );
};

export default Topbar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  border-bottom: 1px solid lightgray;
`;

const LeftSection = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 40px;
  align-items: center;
  height: 100%;
  padding-left: 20px;
`;

const NavSection = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  gap: 30px;
  height: 100%;
  align-items: center;
`;

const NavItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  font-size: 1.5rem;
  font-family: 'Open Sans Condensed';
  font-weight: 700;
  color: var(--themePrimary);

  :hover {
    color: var(--themeLight);
  }
`;

const RightSection = styled.nav`
  display: grid;
  background: green;
  height: 100%;
  width: 200px;
  align-items: center;
  grid-template-columns: max-content max-content;
  gap: 1rem;
`;

const LogoSymbol = styled.img`
  height: 45%;
  width: auto;
`;

const SignIn = styled.div`
  font-size: 30px;
  color: var(--themePrimary);
  display: grid;
  gap: 8px;
  grid-template-columns: max-content max-content;
  align-items: center;

  span {
    font-size: 13px;
    color: gray;
  }
`;
