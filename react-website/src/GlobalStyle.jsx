import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans' , sans-serif;
}
html{
   font-size: 62.5%;
   overflow-x: hidden;
} 
   
h1{
color:${({ theme }) => theme.colors.heading };  
font-size: 6rem;
font-weight: 900;
}

h2{
color:${({ theme }) => theme.colors.heading };  
font-size: 4.4rem;
font-weight: 300;
white-space: normal;
text-align: center;
}
h3{
color:${({ theme }) => theme.colors.heading };  
font-size: 3.2rem;
font-weight: 100;
white-space: normal;
text-align: center;
}
h4{
color:${({ theme }) => theme.colors.heading };  
font-size: 2.1rem;
font-weight: 50;
white-space: normal;
text-align: center;
}

`;