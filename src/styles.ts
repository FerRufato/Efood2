import { createGlobalStyle } from 'styled-components';

export const Cores = {
  primary: '#FFEBD9',
  secondary: '#E66767',
  tertiary: '#FFF8F2;',
};

export const GlobalCss = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font family : 'Roboto', sans-serif;
        list-style: none;

}

      .container {
      max-width: 1024px;
      margin: 0 auto;
      width: 100%;





    }




    body {
            background-color: ${Cores.tertiary};
            color: ${Cores.secondary};

}

`;
