/** @format */

import "./App.css";

import { client } from "./init/client";
import { ApolloProvider } from "@apollo/react-hooks";

const App = () => {
	return (
		<ApolloProvider client={client}>
			<h1>GRAPH</h1>
		</ApolloProvider>
	);
};

export default App;
