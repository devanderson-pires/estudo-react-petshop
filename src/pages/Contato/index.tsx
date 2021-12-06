import React from 'react';
import { PageTitle } from '../../components/GlobalStyle';
import * as Styled from './styles';

const Contato = () => {
	return (
		<main className="container">
			<PageTitle>Contato</PageTitle>

			<form>
				<Styled.InputContainer>
					<Styled.Label htmlFor="nome">Nome</Styled.Label>
					<Styled.Input type="text" name="nome" id="nome" />
				</Styled.InputContainer>

				<Styled.InputContainer>
					<Styled.Label htmlFor="email">E-mail</Styled.Label>
					<Styled.Input type="email" name="email" id="email" />
				</Styled.InputContainer>

				<Styled.InputContainer>
					<Styled.Label htmlFor="mensagem">Mensagem</Styled.Label>
					<Styled.Textarea name="mensagem" id="mensagem" />
				</Styled.InputContainer>

				<Styled.InputContainer>
					<Styled.Button type="submit">Enviar</Styled.Button>
				</Styled.InputContainer>
			</form>
		</main>
	);
};

export default Contato;
