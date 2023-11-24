/** @format */

import "./App.css";
import { client } from "./init/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeContext, ThemeProvider } from "styled-components";
import { useState } from "react";
import { ThemeEnum, themesMap } from "utils/themes";
import GlobalStyle from "globalStyles";
import { BrowserRouter } from "react-router-dom";
import { Router } from "routes/Router";

const App = () => {
	const [currentTheme, setCurrentTheme] = useState<ThemeEnum>(ThemeEnum.light);
	const theme = { colors: themesMap[currentTheme] };

	return (
		<ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
			<ThemeProvider theme={theme}>
				<ApolloProvider client={client as any}>
					<GlobalStyle />
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</ApolloProvider>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default App;
