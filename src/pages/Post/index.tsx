import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { search } from '../../services/api';
import * as Styled from './styles';

type Post = {
  title: string;
  body: string;
}

const Post = (): JSX.Element => {
	const { id } = useParams();
	const [post, setPost] = useState<Post>(Object);

	useEffect(() => {
		search(`/posts/${id}`, setPost).catch(error => console.error(error));
	}, [id]);

	return (
		<main className='container'>
			<Styled.PostCard>
				<Styled.PostCardTitle>{post.title}</Styled.PostCardTitle>
				<Styled.PostCardText>{post.body}</Styled.PostCardText>
			</Styled.PostCard>
		</main>
	);
};

export default Post;
