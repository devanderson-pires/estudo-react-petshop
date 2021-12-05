import React from 'react';
import { PageTitle } from '../../components/GlobalStyle';
import { ListaCategorias } from '../../components/ListaCategorias';
import ListaPosts from '../../components/ListaPosts';

const Home = (): JSX.Element => {
	return (
		<main className='container'>
			<PageTitle>Pet notícias</PageTitle>
			<ListaCategorias />
			<ListaPosts url='/posts' />
		</main>
	);
};

export default Home;
