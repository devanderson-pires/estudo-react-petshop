import React from 'react';

import logoImg from '../../assets/images/doguito.svg';

const Header = (): JSX.Element => {
	return (
		<header>
			<div>
				<img src={logoImg} alt="" />
				<h1>Petshop</h1>
			</div>
		</header>
	);
};

export default Header;
