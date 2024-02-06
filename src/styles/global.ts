import { createGlobalStyle } from "styled-components";

// chosen fonts:
// font-family: 'Montserrat', sans-serif; in 300 - for logo only
// font-family: 'Roboto', sans-serif; in 400 and 700

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s; 
    /* maybe i'll remove this later, just an example for myself for now */
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`