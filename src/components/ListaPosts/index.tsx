import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { search } from '../../services/api';
import * as Styled from './styes';

interface PostsProps {
	id: number;
	title: string;
	metadescription: string;
	body: string;
	categoria: string;
	subcategoria: string;
}

const ListaPosts = ({ url }: { url: string }): JSX.Element => {
	const [posts, setPosts] = useState<PostsProps[]>([]);
	const theme = useContext(ThemeContext);

	useEffect(() => {
		search(url, setPosts);
	}, [url]);

	return (
		<Styled.PostSection>
			{
				posts.map(post => (
					<Styled.PostLink
						to={`posts/${post.id}`}
						style={post.categoria === 'bem-estar' ? { borderColor: theme.colors.postBorderTopColor1 } : { borderColor: theme.colors.postBorderTopColor2 }}
						key={post.id}
					>
						<article>
							<Styled.PostTitle>{post.title}</Styled.PostTitle>

							<Styled.PostMeta>{post.metadescription}</Styled.PostMeta>
						</article>
					</Styled.PostLink>
				))
			}
		</Styled.PostSection>
	);
};

export default ListaPosts;
