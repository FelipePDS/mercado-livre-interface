import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--color-primary);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', -apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  }

  :root {
    --color-primary: #F5F5F5;
    --color-black: #000000e6;
    --color-gray-100: #666;
    --color-gray-300: #333;
    --color-gray-800: #0000008c;
    --color-white: #FFF;
    --color-blue-05: #4189e633;
    --color-blue-100: #3483fa;
    --color-blue-200: #2968c8;
    --color-green: #00a650;

    --color-header: #FFF159;
    --color-search-placeholder: #AAAAAA;
    --color-border: #ddd;
    --color-panel-header: #ededed;
    --color-footer: #FFF;

    --reputation-1: #FFE7E6;
    --reputation-2: #FFF4E7;
    --reputation-3: #FFFDE5;
    --reputation-4: #F3FEE0;
    --reputation-5: #00A650;

    --panel-shadow: 0 1px 3px 0 rgba(0,0,0,.3);
  }
`;
