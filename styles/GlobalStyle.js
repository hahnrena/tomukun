import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: dark;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.01em;
  }

  p {
    margin: 0;
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyle;
