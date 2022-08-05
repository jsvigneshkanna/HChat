import React from "react";
import { IoMdRefresh } from "react-icons/io";
import styled from "styled-components";

function Reload() {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <>
      <Button onClick={handleClick}>
        <IoMdRefresh />
      </Button>
    </>
  );
}

const Button = styled.button`
  display: flex;
  height: 3rem;
  width: 3rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #13b1fa;
  border: 0.15rem solid black;
  cursor: pointer;

  svg {
    font-size: 1.3rem;
    color: #000;
  }
`;

export default Reload;
