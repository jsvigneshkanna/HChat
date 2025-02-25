import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logout from "./Logout";

function Contacts({ contacts, currentUser, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.username);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {currentUserImage && currentUserName && (
        <Container>
          <div className="brand">
            <img src="" alt="" />
            <h3>HChat</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt="avatar"
                    />
                  </div>
                  <div className="username">
                    <h3> {contact.username} </h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="user">
              <div className="avatar">
                <img
                  src={`data:image/svg+xml;base64,${currentUserImage}`}
                  alt="avatar"
                />
              </div>
              <div className="username">
                <h2> {currentUserName} </h2>
              </div>
            </div>
            <Logout />
          </div>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #6cc9ff;
  border-radius: 1.8rem 0 0 1.8rem;
  border-right: 0.2rem solid black;

  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    img {
      height: 2rem;
    }

    h3 {
      color: black;
      text-transform: uppercase;
      font-family: "Iceland", cursive;
      font-size: 3rem;
    }
  }

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }

    .contact {
      background-color: #bbffae;
      min-height: 5rem;
      width: 90%;
      cursor: pointer;
      border: 0.2rem solid black;
      border-radius: 1rem;
      padding: 0.4rem 0.4rem;
      gap: 1rem;
      align-items: center;
      display: flex;
      transition: 0.5s ease-in-out;

      .avatar {
        img {
          height: 3rem;
          border: 0.15rem solid black;
          border-radius: 1.5rem;
        }
      }

      .username {
        h3 {
          color: #000000;
        }
      }
    }

    .selected {
      background-color: #5b65ff;

      .avatar {
        img {
          border-color: white;
        }
      }

      .username {
        h3 {
          color: white;
        }
      }
    }
  }

  .current-user {
    background-color: #fff06b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    border-top: 0.2rem solid black;
    padding: 0 2rem;

    .user {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      .avatar {
        img {
          height: 4rem;
          max-inline-size: 100%;
          border: 0.15rem solid black;
          border-radius: 50%;
        }
      }
      .username {
        h2 {
          color: #000000;
        }
      }
    }

    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;

export default Contacts;
