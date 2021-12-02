import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import styled from 'styled-components';

interface NavProps {
  isActive: boolean;
}

export const Header = styled.header<NavProps>`
  background-color: ${props => props.theme.colors.boxes};
  border-radius: ${props => !props.isActive ? '0 0 10px 10px;' : 'unset'}
  box-shadow: 0 5px 10px ${props => props.theme.colors.shadowColor};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 4.75rem;
  position: relative;

  @media(min-width: 992px) {
    align-items: center;
    grid-template-areas: "menu logo switch";
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

  @media(min-width: 992px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  background-color: inherit;
  grid-column: span 3;
  grid-row: none;
  justify-self: center;

  @media(min-width: 992px) {
    grid-area: logo;
    grid-column: unset;
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
  box-shadow: ${props => props.isActive ? '0 5px 10px' + props.theme.colors.shadowColor + ';' : 'unset'}
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
  border-bottom: 1px solid ${props => props.theme.colors.details};
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
      color: ${props => props.theme.colors.hover};
    }
  }
`;

export const Switch = styled(ReactSwitch)`
  left: 0;
  position: absolute !important;
  top: 50%;
  transform: translateY(-50%);

  @media(min-width: 992px) {
    grid-area: switch;
    justify-self: flex-end;
    left: unset;
    position: relative !important;
    top: unset;
    transform: unset;
  }
`;
