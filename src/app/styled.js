import styled from "styled-components";

export const Box = styled.div`
width:100px;
height:100px;
background-color:red;
margin-bottom: 5px;
 background-color: ${({ color }) => color}; /*los componentes son 'props'(propiedades) */
width:${(largo) => largo.l}px;
span{
    font-weight: bold;
}
`;
export const But = styled.div`
width:200px;
background-color:${({ isRed }) => (isRed ? 'blue' : 'red')};
height: 200px;
`
export const Pop = styled.div`
display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
justify-content: center;
align-items: center;
background-color: ${({ isRed }) => (isRed ? 'hidden' : 'hidden')};
`
export const Overlay = styled.div`
width: 100%;
height: 100%;
opacity: 0.6;
display: flex;
/* -webkit-backdrop-filter:blur(10px);
backdrop-filter:blur(10px); */
position: fixed;
background-color: black;
`

export const Content = styled.div`
width: 500px;
height: 400px;
margin: auto;
position: relative;
z-index:99;
background-color: white;
`
