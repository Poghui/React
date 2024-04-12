import styled, { css, createGlobalStyle } from 'styled-components';
import flecha from './assets/assets/img/flecha.png'

const Btn = css`
 display: inline-block;
 background-image: url(${flecha});
 background-size: 100% 100%;
 cursor: pointer;
 width: 30px;
 height: 30px;
`;
export const BtnLeft = styled.span`
${Btn}
margin-right: 10px;
`;

export const BtnRight = styled.span`
${Btn}
margin-left: 10px;
transform: scaleX(-1);
`;

export const GlobalStyle = createGlobalStyle`
body{
    display: flex;
    align-items:center;
justify-content:center;
}
`;
export const Row = styled.div`
    display: grid;
    grid-template-columns: 43% 43%;
`;

export const MainImg = styled.img`
    width: 100%;
`;
export const Img = styled.img`
    width: 100%;
    border-radius: 50px;
    ${({ active }) => active ? 'border: 4px solid red; z-index:1' : 'border:4px solid transparent'}
`;

//a