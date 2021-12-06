import * as Yup from 'yup';

export const ContatoInitialValues = {
	nome: '',
	email: '',
	mensagem: ''
};

export const ContatoSchema = Yup.object().shape({
	nome: Yup.string().required('Nome é obrigatório'),
	email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
	mensagem: Yup.string().min(10, 'Mensagem deve ter no mínimo 10 caracteres').required('Mensagem é obrigatória')
});
