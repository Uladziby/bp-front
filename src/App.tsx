/** @format */

import { HomePage } from "routes/HomePage/HomePage";
import "./App.css";
import { client } from "./init/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { Counter } from "routes/counter";
import { ThemeContext, ThemeProvider } from "styled-components";
import { useState } from "react";
import { Dark, Light, base } from "utils/themes";
import GlobalStyle from "globalStyles";

export enum ThemeEnum {
	light = "Light",
	dark = "Dark",
}

const themesMap = {
	Light,
	Dark,
};

const App = () => {
	const [currentTheme, setCurrentTheme] = useState<ThemeEnum>(ThemeEnum.light);
	const theme = { colors: themesMap[currentTheme] };

	return (
		<ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
			<ThemeProvider theme={theme}>
				<ApolloProvider client={client}>
					<GlobalStyle />
					<HomePage />
					{/* 					<Counter />
					 */}{" "}
				</ApolloProvider>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default App;
