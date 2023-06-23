import { createGlobalStyle } from "styled-components";
import fontBold from '../fonts/SVN-GilroyBold.otf';
import fontLight from '../fonts/SVN-GilroyLight.otf';


export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SVN-Gilroy';
    src: url('${fontBold}') format('opentype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'SVN-Gilroy';
    src: url('${fontLight}')} format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'SVN-Gilroy', sans-serif;
  }
`;