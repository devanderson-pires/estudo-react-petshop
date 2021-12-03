import React from 'react';
import { PageTitle } from '../../components/GlobalStyle';
import * as Styled from './styles';

const Sobre = (): JSX.Element => {
	return (
		<main className='container'>
			<PageTitle>Sobre Doguito</PageTitle>

			<section className='flex flex--centro'>
				<Styled.Card>
          O blog do doguito foi criado para tirar diversas dúvidas sobre o mundo pet!!!
				</Styled.Card>
			</section>
		</main>
	);
};

export default Sobre;
