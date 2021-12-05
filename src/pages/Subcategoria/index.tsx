import React from 'react';
import { useParams } from 'react-router';
import ListaPosts from '../../components/ListaPosts';

export const Subcategoria = (): JSX.Element => {
	const { subcategoria } = useParams();

	return <ListaPosts url={`/posts?subcategoria=${subcategoria}`} />;
};

export default Subcategoria;
