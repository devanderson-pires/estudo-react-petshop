import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import * as Styled from './styles';
import logoImg from '../../assets/images/doguito.svg';

interface HeaderProps {
	toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({toggleTheme}): JSX.Element => {
	const theme = useContext(ThemeContext);
	const [isActive, setIsActive] = useState(false);

	const handleToggleMenu = () => { setIsActive(!isActive); };

	return (
		<Styled.Header isActive={isActive}>
			<div className='container'>
				<Styled.Burger isActive={isActive} role='button' onClick={handleToggleMenu}>
					<div />
					<div />
					<div />
				</Styled.Burger>

				<Styled.DesktopMenu>
					<Styled.NavLink to='/produtos'>Produtos</Styled.NavLink>
					<Styled.NavLink to='/'>Blog</Styled.NavLink>
					<Styled.NavLink to='/sobre'>Sobre</Styled.NavLink>
					<Styled.NavLink to='/contato'>Contato</Styled.NavLink>
				</Styled.DesktopMenu>

				<Styled.LogoLink to='/'>
					<Styled.LogoImg src={logoImg} />
					<Styled.Title>PetShop</Styled.Title>
				</Styled.LogoLink>

				<Styled.Switch 
					onChange={toggleTheme}
					checked={theme.title === 'dark' ? true : false}
					checkedIcon={false}
					uncheckedIcon={false}
					onColor={theme.colors.hover}
					offColor={theme.colors.details}
					height={10}
					width={40}
					handleDiameter={20}
					offHandleColor={theme.colors.hover}
				/>
			</div>

			<Styled.MobileMenu isActive={isActive}>
				<Styled.NavLink to='/produtos' onClick={handleToggleMenu}>Produtos</Styled.NavLink>
				<Styled.NavLink to='/' onClick={handleToggleMenu}>Blog</Styled.NavLink>
				<Styled.NavLink to='/sobre' onClick={handleToggleMenu}>Sobre</Styled.NavLink>
				<Styled.NavLink to='/contato' onClick={handleToggleMenu}>Contato</Styled.NavLink>
			</Styled.MobileMenu>
		</Styled.Header>
	);
};

export default Header;
