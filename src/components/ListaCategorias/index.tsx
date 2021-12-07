import React, { useEffect, useState } from 'react';
import { search } from '../../services/api';
import * as Styled from './styles';

interface CategoriaProps {
  id: string;
  nome: string;
  subcategorias: Array<string>;
}

export const ListaCategorias = (): JSX.Element => {
	const [categorias, setCategorias] = useState<CategoriaProps[]>([]);

	useEffect(() => {
		search('/categorias', setCategorias);
	}, []);

	return (
		<Styled.ListCategoria className='flex'>
			{
				categorias.map(categoria => (
					<Styled.LinkCategoria 
						to={`/categoria/${categoria.id}`} 
						key={categoria.id}
						categoria={categoria.id}
					>
						<li>
							{categoria.nome}
						</li>
					</Styled.LinkCategoria>
				))
			}
		</Styled.ListCategoria>
	);
};
