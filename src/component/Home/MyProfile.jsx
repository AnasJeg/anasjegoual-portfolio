import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import me from "../../image/myimage-removebg.png"
import { Card } from "primereact/card";
import AnasJegoual from "./Anas_Jegoual_Resume.pdf";

const MyProfile = () => {
  return (
    <Container id="home" className="container">
      <Slide direction="left">
        <Texts>
      <h1 className="green">  <span className="green">Hello I am</span>    Anas JEGOUAL</h1>
          <h3>Software Engineering Student</h3>
          <p>
            <Card  >
              <p className="text-center font-medium " >
                Full stack developer building websites and web applications.
                I specialize in java my role is to write and style the front-end components that meet the requirements of our mocks,
                Technologies used React, Angular..., Also managing back end using Java , Spring boot ...
              </p>
            </Card>
          </p>
          <a href={AnasJegoual} download>
          <button>Download CV</button>
          </a>

        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={me}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default MyProfile;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 3px;
    padding: 12px 24px;
    border: 0;
    color: #3a4149;
    background: #e7ebee;
    line-height: 1.15;
    font-size: 16px;
    :hover {
        transition: all .1s ease;
        box-shadow: 0 0 0 0 #fff, 0 0 0 3px rgb(94, 137, 255);
    }

  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
  }
`;
