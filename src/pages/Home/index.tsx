import React from 'react';
import { PageTitle } from '../../components/GlobalStyle';
import ListaPosts from '../../components/ListaPosts';

const Home = (): JSX.Element => {
	return (
		<main className='container'>
			<PageTitle>Pet notícias</PageTitle>
			<ListaPosts url='/posts' />
		</main>
	);
};

export default Home;
