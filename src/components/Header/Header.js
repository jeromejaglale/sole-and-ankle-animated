import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <span>Sale</span>
            <strong>Sale</strong>
          </NavLink>
          <NavLink href="/new">
            <span>New&nbsp;Releases</span>
            <strong>New&nbsp;Releases</strong>
          </NavLink>
          <NavLink href="/men">
            <span>Men</span>
            <strong>Men</strong>
          </NavLink>
          <NavLink href="/women">
            <span>Women</span>
            <strong>Women</strong>
          </NavLink>
          <NavLink href="/kids">
            <span>Kids</span>
            <strong>Kids</strong>
          </NavLink>
          <NavLink href="/collections">
            <span>Collections</span>
            <strong>Collections</strong>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;
  height: 27px;

  &:first-of-type {
    color: var(--color-secondary);
  }

  & span, & strong {
    display: block;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 600ms;

/*    &:hover span, &:hover strong  {
      transform: translateY(-27px);
      transition: transform 100ms;
    }*/
  }

  @keyframes reveal {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-27px);
    }
  }


  @media (prefers-reduced-motion: no-preference) {
    & span, & strong  {
      transform: translateY(0px);
      transition: transform 1s;
    }

    &:hover span, &:hover strong  {
      transform: translateY(-27px);
      transition: transform 1s;
    }
  }
`;

export default Header;
