import React from 'react';
import * as Styled from './styles';

import imgDoguito from '../../assets/images/doguito.svg';

const Page404 = (): JSX.Element => {
	return (
		<main className="container flex flex--centro flex--column">
			<Styled.Img404 src={imgDoguito} alt='' />

			<Styled.Txt404>Ops, essa página não existe!</Styled.Txt404>
		</main>
	);
};

export default Page404;
