import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import { dark, light} from './components/UI/theme';
import Post from './pages/Post';
import Page404 from './pages/Page404';
import Categoria from './pages/Categoria';
import Contato from './pages/Contato';
import useThemeLocalStorageState from './hooks/useThemeLocalStorageState';

function App(): JSX.Element {
	const [theme, setTheme] = useThemeLocalStorageState<DefaultTheme>('theme', light);

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
					<Route path='/contato' element={<Contato />} />
					<Route path='/posts/:id' element={<Post />} />
					<Route path='/categoria/:id/*' element={<Categoria />} />
					<Route path='*' element={<Page404 />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
