import styled from "styled-components";


const FooterDiv = styled.div`
position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
<<<<<<< HEAD
  height: 18%;
=======
  height: 20%;
>>>>>>> 69fe798166c3b9603d3f920626bf42fb624c6bef
  background-color: #000;
  color: #fff;
  padding: 1.5rem 2rem;
  text-align: center;
  list-style-type: none;
  overflow: hidden;
<<<<<<< HEAD
  margin: none;
  margin-top: 20%;
=======
>>>>>>> 69fe798166c3b9603d3f920626bf42fb624c6bef

`;

const FooterP = styled.li`
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1%;
  width: 100%;

`;

const FooterList = styled.div`
  display: flex;
  
  flex-direction: column;

`;

const FooterSpan = styled.li`
  font-family:'Advent Pro';
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  

  `;

const ImagemFooter = styled.img`
    width: 10rem;
    height: 5rem;
    margin: 1%;
`
export {FooterSpan, FooterList, FooterDiv, FooterP, ImagemFooter}