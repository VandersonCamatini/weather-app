import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, html, #root{
        -webkit-font-smoothing: antialiased;
        width: 100vw;
        height: 100vh;
    }

    body, input, button {
        font: 16px;
    }

    button{
        cursor: pointer;
    }
`;