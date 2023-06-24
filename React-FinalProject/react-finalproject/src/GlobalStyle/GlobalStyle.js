import { createGlobalStyle } from "styled-components";
import fontBold from '../fonts/SVN-GilroyBold.otf';
import fontLight from '../fonts/SVN-GilroyLight.otf';


export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SVN-Gilroy';
    src: url('${fontBold}') format('otf');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'SVN-Gilroy';
    src: url('${fontLight}')} format('otf');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;