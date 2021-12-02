import React, { useState } from 'react';
import * as Styled from './styles';
import logoImg from '../../assets/images/doguito.svg';
import menuImg from '../../assets/images/menu.svg';

interface HeaderProps {
	toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({toggleTheme}): JSX.Element => {
	const [isActive, setIsActive] = useState(false);

	const handleClickOpenMenu = () => {
		setIsActive(!isActive);
	};
	
	return (
		<Styled.Header isActive={isActive}>
			<Styled.MenuHamb src={menuImg} role='button' onClick={handleClickOpenMenu} />

			<Styled.LogoWrapper>
				<Styled.LogoLink to='/'>
					<Styled.Logo src={logoImg} alt="" />
					<Styled.Title>PetShop</Styled.Title>
				</Styled.LogoLink>
			</Styled.LogoWrapper>

			<Styled.Nav isActive={isActive}>
				<Styled.List>
					<Styled.ListItem>
						<Styled.ItemLink to='/produtos'>Produtos</Styled.ItemLink>
					</Styled.ListItem>
					<Styled.ListItem>
						<Styled.ItemLink to='/'>Blog</Styled.ItemLink>
					</Styled.ListItem>
					<Styled.ListItem>
						<Styled.ItemLink to='/sobre'>Sobre</Styled.ItemLink>
					</Styled.ListItem>
				</Styled.List>
			</Styled.Nav>
		</Styled.Header>
	);
};

export default Header;
