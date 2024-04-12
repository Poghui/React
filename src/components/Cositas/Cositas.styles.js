import styled, { createGlobalStyle } from 'styled-components';
import font from './fuente.ttf'
const desktopStartWidth = 996;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;


export const Cuadrado = styled.div`
 background-color: red;
 width: 300px;
 height: 300px;


 ${mobile} {
		width:100%;
	}
 &:hover{
    background-color: yellow;
 }
`;

export const GlobalStyle = createGlobalStyle`

@font-face{
    font-family: myFont;
    src: url(${font});
}
body{
    background-color: black;
    color: white;
        font-family: myFont;

}
`
export const Rectangulo = styled(Cuadrado)`
width: 500px;
background-color: ${({ color }) => color};
`

