import { createGlobalStyle } from 'styled-components';
import Binggrae from './fonts/Binggrae.otf';
import Yeongdo from './fonts/Yeongdo.woff';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  
  }

@font-face {
    font-family: 'Binggrae';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Binggrae.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Yeongdo-Rg';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/Yeongdo-Rg.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  
a{
        text-decoration: none;
        color: inherit;
   }

ul{
  list-style:none ;
}

body{
      font-family: 'IBM Plex Sans KR', sans-serif;
    }



`;

export default GlobalStyle;
