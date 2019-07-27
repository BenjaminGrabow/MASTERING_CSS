import React from 'react';
import Hero from '../../img/hero.jpg';
import Logo from '../../img/logo-white.png';
import styled from 'styled-components';

const StyledHeader = styled.header`
height: 95vh;
background-image: linear-gradient(
  to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 131, 08)),
   url(${Hero});
background-size: cover;
background-position: top;
clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
position: relative;

.logo-box {
position: absolute;
top: 40px;
left: 40px;
}

.logo {
height: 35px;
}

.text-box {
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
}

.heading-primary {
color: #fff;
text-transform: uppercase;
backface-visibility: hidden;
margin-bottom: 60px;
}

.heading-primary-main {
display: block;
font-size: 60px;
font-weight: 400;
letter-spacing: 35px;
animation-name: moveInLeft;
animation-duration: 1s;
animation-timing-function: ease-out;
/* animation-delay: 3s; */
/* animation-iteration-count: 3; */
}

.heading-primary-sub {
  display: block;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 17.4px;
  animation: moveInRight 1s ease-out;

}

@keyframes moveInLeft {
  0% {
   opacity: 0;
   transform: translateX(-100px);
  }

  80% {
    transform: translateX(10px);  
  }

  100% {
   opacity: 1;
   transform: translateX(0);
  }
}

@keyframes moveInRight {
  0% {
   opacity: 0;
   transform: translateX(100px);
  }

  80% {
    transform: translateX(-10px);  
  }

  100% {
   opacity: 1;
   transform: translateX(0);
  }
}

.btn:link, .btn:visited {
text-transform: uppercase;
text-decoration: none;
padding: 15px 40px;
display: inline-block;
border-radius: 100px;
transition: all .2s;
position: relative;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
}

.btn:active {
  transform: translateY(-1px);
}

.btn-white {
  background-color: #fff;
  color: #777;
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all .4s;
}

.btn-white::after {
background-color: #fff;
}

.btn:hover::after {
  transform: scale(1.5);
  opacity: 0;
}
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo-box">
        <img className="logo" src={Logo} alt="Logo" />
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>

        <a href="#" className="btn btn-white">Discover our Tours</a>
      </div>
    </StyledHeader>

  );
}

export default Header;