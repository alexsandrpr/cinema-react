import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from './hooks/onClickOutside';
import { MenuContext } from '../components/navState';
import HamburgerButton from '../components/HamburgerButton';
import { SideMenu } from '../components/SideMenu';

const Navbar = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 0px;
  margin: 0px;
  align-items: center;
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 12px 60px;
  background: rgba(0, 0, 0, 0.9) 0px 8px 16px;
  z-index: 500;
`;

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node}>
      <Navbar>
        <HamburgerButton />
      </Navbar>
      <SideMenu />
    </header>
  );
};

export default MainMenu;