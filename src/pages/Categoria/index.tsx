import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../components/GlobalStyle';
import { ListaCategorias } from '../../components/ListaCategorias';
import ListaPosts from '../../components/ListaPosts';
import { search } from '../../services/api';
import Subcategoria from '../Subcategoria';

const Categoria = (): JSX.Element => {
	const { id } = useParams();
	const [subcategorias, setSubcategorias] = useState([]);

	useEffect(() => {
		search(`/categorias/${id}`, (categoria: any) => setSubcategorias(categoria.subcategorias));
	}, [id]);
  
	return (
		<main className='container'>
			<PageTitle>Pet notícias</PageTitle>
			<ListaCategorias />
      
			<ul className='container flex'>
				{
					subcategorias.map(subcategoria => (
						<li key={subcategoria}>
							<Link to={`${subcategoria}`}>
								{subcategoria}
							</Link>
						</li>
					))
				}
			</ul>

			<Routes>
				<Route path={'/'} element={<ListaPosts url={`/posts?categoria=${id}`} />} />
				<Route path={':subcategoria'} element={<Subcategoria />} />
			</Routes>
		</main>
	);
};

export default Categoria;
