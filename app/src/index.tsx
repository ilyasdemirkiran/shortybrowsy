import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {MemoryRouter} from "react-router-dom";

let theme = extendTheme({
	colors: {},
	fonts: {
		body: "Mulish 100"
	},
	styles: {
		global: () => ({
			"html, body": {
				fontSize: "md",
			},
		}),
	},
});

ReactDOM.render(
	<React.StrictMode>
		<MemoryRouter>
			<ChakraProvider theme={theme}>
				<App/>
			</ChakraProvider>
		</MemoryRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
