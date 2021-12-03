import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import styled from 'styled-components';

export const Header = styled.header<NavProps>`
  background-color: ${props => props.theme.colors.boxes};
  border-radius: ${props => props.isActive ? 'unset' : '0 0 10px 10px'};
  box-shadow: ${props => props.isActive ? 'unset' : '0 5px 10px ' + props.theme.colors.shadowColor};
  transition: all .25s ease-in-out;
  
  > div {    
    display: grid;
    grid-template-areas: "menu logo switch";
    grid-template-columns: repeat(3, 1fr);
    height: 4.75rem;
  }

  @media(min-width: 992px) {
    grid-template-areas: "nav logo switch";
    
    > div {
      height: 6.75rem;
    }
  }
`;

export const LogoLink = styled(Link)`
  justify-self: center;
  align-items: center;
  display: flex;
  grid-area: logo;
  width: fit-content;
`;

export const LogoImg = styled.img`
  width: 3rem;
`;

export const Title = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 1.75rem;
  font-weight: unset;
  margin-left: .5rem;

  @media(min-width: 992px) {
    font-size: 2.5rem;
  }
`;

export const Switch = styled(ReactSwitch)`
  align-self: center;
  grid-area: switch;
  justify-self: flex-end;
`;

interface NavProps {
  isActive: boolean;
}

export const Burger = styled.div<NavProps>`
  align-self: center;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  width: 2rem;
  
  div {
    background-color: ${props => props.theme.colors.hover};
    border-radius: 10px;
    height: 0.25rem;
    transform-origin: 1px;
    transition: all 0.25s linear;

    :first-child {
      transform: ${props => props.isActive ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${props => props.isActive ? '0' : '1'};
      transform: ${props => props.isActive ? 'translateX(20px)' : 'translateX(0)'};
    }

    :last-child {
      transform: ${props => props.isActive ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media(min-width: 992px) {
    display: none;
  }
`;

export const MobileMenu = styled.nav<NavProps>`
  background-color: ${props => props.theme.colors.boxes};
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: absolute;
  top: 76px;
  transform: ${props => props.isActive ? 'translateX(0)' : 'translateX(-100vw)'};
  transition: transform .25s ease-in-out;
  width: 100vw;

  @media(min-width: 992px) {
    display: none;
  }
`;

export const DesktopMenu = styled.nav`
  display: none;

  @media(min-width: 992px) {
    align-self: center;
    display: inline-flex;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  padding: 1.5rem 0 1.5rem 1.5rem;
  width: 100vw;

  @media(min-width: 992px) {
    padding: 1.5rem 1rem;
    transition: color .2s;
    width: unset;

    &:focus, &:hover {
      color: ${props => props.theme.colors.hover};
    }
  }
`;
