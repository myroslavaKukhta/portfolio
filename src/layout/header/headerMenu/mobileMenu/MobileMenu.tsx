import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Menu} from "../menu/Menu";


export const MobileMenu: React.FC<{ menuItems: Array<string>}> = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuWrapper isOpen={false}>
                <Menu menuItems={props.menuItems}/>
            </MobileMenuWrapper>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
`
const MobileMenuWrapper = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(31, 31, 32, 0.9);
  display: none;

  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`
const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }
`


