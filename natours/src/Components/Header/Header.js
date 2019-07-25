import React from 'react';
import Hero from '../../img/hero.jpg';
import styled from 'styled-components';

const StyledHeader = styled.header`
height: 95vh;
background-image: linear-gradient(
  to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 131, 08)),
   url(${Hero});
background-size: cover;
background-position: top;
clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%)

`;

const Header = () => {
  return (
    <StyledHeader>
<h1>HEELLLLLLLLLLLO</h1>
    </StyledHeader>
  
  );
}

export default Header;