import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
    --xl: 10rem;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;

    /* @media (min-width: 1981px) {
      font-size: 80%;
    }; */

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
    background-color: #fff;

    height: auto;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    font-size: var(--small);
  }

  a {
    text-decoration: none;
    transition: opacity 300ms ease-in-out;
    cursor: pointer;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  body, input, button{
    font-family: 'Inter', 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
  }
`;
