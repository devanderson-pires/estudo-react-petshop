import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { PageTitle } from '../../components/GlobalStyle';
import { ContatoInitialValues, ContatoSchema } from './schemas';
import * as Styled from './styles';

const Contato = (): JSX.Element => {
	return (
		<main className="container">
			<PageTitle>Contato</PageTitle>

			<Formik
				initialValues={ContatoInitialValues}
				validationSchema={ContatoSchema}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						console.log(values);
						actions.setSubmitting(false);
					}, 1000);
				}}
				// validateOnBlur={false}
				// validateOnChange={false}
			>
				{({ errors, isSubmitting, touched }) => (
					<Form>
						<Styled.InputContainer>
							<Styled.Label htmlFor="nome">Nome</Styled.Label>
							<Field as={Styled.Input}
								type="text"
								name="nome"
								id="nome"
								error={errors.nome && touched.nome}
							/>

							<ErrorMessage name='nome'>
								{msg => <Styled.ErrorMsg role='alert'>{msg}</Styled.ErrorMsg>}
							</ErrorMessage>
						</Styled.InputContainer>

						<Styled.InputContainer>
							<Styled.Label htmlFor="email">E-mail</Styled.Label>
							<Field as={Styled.Input}
								type="email"
								name="email"
								id="email"
								error={errors.email && touched.email}
							/>

							<ErrorMessage name='email'>
								{msg => <Styled.ErrorMsg role='alert'>{msg}</Styled.ErrorMsg>}
							</ErrorMessage>
						</Styled.InputContainer>

						<Styled.InputContainer>
							<Styled.Label htmlFor="mensagem">Mensagem</Styled.Label>
							<Field as={Styled.Textarea}
								name="mensagem"
								id="mensagem"
								error={errors.mensagem && touched.mensagem}
							/>

							<ErrorMessage name='mensagem'>
								{msg => <Styled.ErrorMsg role='alert'>{msg}</Styled.ErrorMsg>}
							</ErrorMessage>
						</Styled.InputContainer>

						<Styled.InputContainer>
							<Styled.Button type="submit">
								{isSubmitting ? 'Enviando' : 'Enviar'}
							</Styled.Button>
						</Styled.InputContainer>
					</Form>
				)}
			</Formik>
		</main>
	);
};

export default Contato;
