import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;

    @media (max-width: 768px) {
      font-size: 57.75%;
    };

    @media (max-width: 400px) {
      font-size: 53%;
    };
  }

  html, body, #root{
    scroll-behavior: smooth;
    height: 100%;
    font-family: 'Inter', 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.colors.background};

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    list-style: none;
  }
`;
