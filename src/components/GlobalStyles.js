import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar {
            width: 0.2rem;
        }

        &::-webkit-scrollbar-thumb {
            background: darkgrey;
        }

        &::-webkit-scrollbar-track {
            background: white;
        }
    }

    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }

    h2 {
        font-size: 3rem;
        font-family: "Abril Fatface", cursive;
        font-weight: lighter;
    }
    h3 {
        font-size: 1.5rem;
        color: #333;
    }
    h4 {
        font-size: 1rem;
        color: #333;
    }
    a {
        text-decoration: none;
        color: #333;
    }

`;

export default GlobalStyles;
