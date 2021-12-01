import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NavProps {
  isActive: boolean;
}

export const Header = styled.header<NavProps>`
  background-color: #fff;
  border-radius: ${props => !props.isActive ? '0 0 10px 10px;' : 'unset'}
  box-shadow: 0 5px 10px #55a6ff38;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 4.75rem;
  position: relative;

  @media(min-width: 992px) {
    align-items: center;
    grid-template-areas: "menu logo";
    height: 6.75rem;
  }
`;

export const MenuHamb = styled.img`
  height: .75rem;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1.75rem;
  z-index: 2;

  @media(min-width: 992px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  background-color: inherit;
  grid-column: span 3;
  grid-row: none;
  justify-self: center;
  z-index: 1;

  @media(min-width: 992px) {
    grid-column: unset;
    grid-area: logo;
  }
`;

export const LogoLink = styled(Link)`
  display: inline-flex;
`;

export const Logo = styled.img`
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

export const Nav = styled.nav<NavProps>`
  background-color: inherit;
  border-radius: 0 0 10px 10px;
  box-shadow: ${props => props.isActive ? '0 5px 10px #55a6ff38;' : 'unset'}
  font-size: 1.2rem;
  font-weight: 500;
  justify-self: flex-start;
  position: absolute;
  top: ${props => props.isActive ? '76px;' : '-100vh;'}
  transition: .2s;
  
  @media(min-width: 992px) {
    background-color: unset;
    border-radius: unset;
    box-shadow: unset;
    font-size: 1rem;
    grid-area: menu;
    position: unset;
  }
`;

export const List = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media(min-width: 992px) {
    align-items: center;
    flex-direction: unset;
  }
`;

export const ListItem = styled.li`
  border-bottom: 1px solid #dadada;
  display: flex;

  &:last-child {
    border-bottom: unset;
  }

  @media(min-width: 992px) {
    border-bottom: unset;
    border-radius: 0 0 10px 10px;
  }
`;

export const ItemLink = styled(Link)`
  display: block;
  padding: 1.5rem 0;
  text-align: center;
  width: 100vw;

  @media(min-width: 992px) {
    border-bottom: unset;
    padding: 1.5rem 1rem;
    transition: .25s;
    width: unset;

    &:focus, &:hover {
      color: #0071ea;
    }
  }
`;
