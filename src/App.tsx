import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import { dark, light} from './components/UI/theme';

function App(): JSX.Element {
	const [theme, setTheme] = useState(light);

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light);
	};

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header toggleTheme={toggleTheme} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/sobre' element={<Sobre />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
