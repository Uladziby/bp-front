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

export const WIDTH_S = "320px";
export const WIDTH_M = "480px";
export const WIDTH_L = "760px";
export const WIDTH_XL = "960px";
export const WIDTH_XXL = "1200px";
export const WIDTH_XL_NUM = 960;
export const WIDTH_L_NUM = 760;
