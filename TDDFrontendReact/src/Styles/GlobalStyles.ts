import { createGlobalStyle } from 'styled-components';
import ImgFondoLoginRegister from '../Images/ImgFondoLoginRegister.jpg';

const GlobalStyles = createGlobalStyle`
    body{
        background-color:#eee;
        background-image: url(${ImgFondoLoginRegister});
        background-size: cover;
        background-repeat: no-repeat;
    }
    :root{
        --bg-primary:#2ca2d5;
    }

`;
export default GlobalStyles;
