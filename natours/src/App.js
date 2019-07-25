import React from 'react';
import Header from './Components/Header/Header';
import styled from 'styled-components';
import './App.css';

const StyledApp = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Lato", sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.7;
color: #777; 
`;

function App() {
  return (
    <StyledApp>
     <Header/>
    </StyledApp>
  );
}

export default App;
