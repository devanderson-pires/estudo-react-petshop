import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Home from './pages/Home';

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
