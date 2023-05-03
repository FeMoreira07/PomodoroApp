import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif !important;
    
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: ${theme.baseColors.blue};
    background-image: linear-gradient(to bottom right, ${theme.baseColors.blue}, ${theme.baseColors.aquaBlue});
 
  }

  #root {
    width: 100%;
    height: 100%;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
      background-color: rgba(255, 255, 255, 0.103);
      border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
      background: ${theme.baseColors.aquaBlue};
      border-radius: 4px;
  }
`;
