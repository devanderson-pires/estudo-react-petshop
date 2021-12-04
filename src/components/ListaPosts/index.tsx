import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../../services/api';

interface PostsProps {
	id: number;
	title: string;
	metadescription: string;
	body: string;
	categoria: string;
	subcategoria: string;
}

const ListaPosts = ({ url }: { url: string }) => {
	const [posts, setPosts] = useState<PostsProps[]>([]);

	useEffect(() => {
		search(url, setPosts);
	}, [url]);

	return (
		<section className='container'>
			{
				posts.map(post => (
					<Link to={`posts/${post.id}`} key={post.id}>
						<article>
							<h3>{post.title}</h3>

							<p>{post.metadescription}</p>
						</article>
					</Link>
				))
			}
		</section>
	);
};

export default ListaPosts;
