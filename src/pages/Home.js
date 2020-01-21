import React from "react";
import styled from "styled-components";
import Typing from "react-typing-animation";

import Bg from "../images/background.jpeg";

const Img = styled.img`
  width: 100vw;
  height: 100%;
`;

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Typing loop={true} startDelay={1000}>
        <span>This page is created by react</span>
        <Typing.Backspace count={29} />
      </Typing>
    </>
  );
};

export default Home;
