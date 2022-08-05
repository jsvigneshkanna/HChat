import React from "react";
import styled from "styled-components";
import Loader from "../assets/cat_2.gif";

function Welcome({ currentUser }) {
  return (
    <>
      <Container>
        <img src={Loader} alt="Robot" />
        <h1>
          Welcome, <span>{currentUser.username}!</span>
        </h1>
        <h3>Please Select a chat to start messaging</h3>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 0 1.9rem 1.9rem 0;
  color: black;
  img {
    height: 20rem;
  }
  span {
    color: #ff9100;
  }
`;

export default Welcome;
