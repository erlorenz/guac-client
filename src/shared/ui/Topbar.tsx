import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Img from '../../images/logos/guac-logo-light.svg';

const Topbar: React.FC = () => {
  return (
    <Container>
      <LeftSection>
        <LogoSymbol src={Img} />
        <BrandName>Guac</BrandName>
      </LeftSection>
      <NavSection>
        <NavItem>
          <StyledNavLink to="/order#menu">ORDER</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/locations">LOCATIONS</StyledNavLink>
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
  padding: 0 2rem;
`;

const LeftSection = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 0.3rem;
  width: 200px;
  align-items: center;
  height: 100%;
`;

const NavSection = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 25px;
  height: 100%;
  align-items: center;
`;

const NavItem = styled.li`
  padding: 1rem;
`;

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
`;

const LogoSymbol = styled.img`
  height: 45%;
  width: auto;
`;

const BrandName = styled.h1`
  color: var(--themePrimary);
  font-size: 3.5rem;
  margin: 0;
  line-height: 1;
`;
