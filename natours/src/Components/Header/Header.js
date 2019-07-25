import React from 'react';
import Hero from '../../img/hero.jpg';
import styled from 'styled-components';

const StyledHeader = styled.header`
height: 95vh;
background-image: url(${Hero});
`;

const Header = () => {
  return (
    <StyledHeader>

    </StyledHeader>
  
  );
}

export default Header;