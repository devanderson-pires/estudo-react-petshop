import React, { useContext } from 'react';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

const CustomLink = ({ children, to, ...props }: LinkProps): JSX.Element => {
	const resolved = useResolvedPath(to);
	const match = useMatch({ path: resolved.pathname, end: true });
	const theme = useContext(ThemeContext);

	return (
		<Link
			to={to}
			{...props}
			style={{ color: match ? theme.colors.hover : ''}}
		>
			{children}
		</Link>
	);
};

export default CustomLink;
