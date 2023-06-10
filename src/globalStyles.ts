/** @format */

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Manrope', sans-serif;    }

    html{
        font-size: 8px;
        font-weight: 400;
    }

    button {
        all: unset;
    }
`;

export default GlobalStyle;
