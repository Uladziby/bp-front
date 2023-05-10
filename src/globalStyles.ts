/** @format */

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: teal;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    html{
        font-size: 8px;
        font-weight: 400;
    }

    button {
        all: unset;
    }
`;

export default GlobalStyle;
