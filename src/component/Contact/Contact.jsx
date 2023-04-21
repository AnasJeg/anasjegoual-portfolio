import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { Slide } from "react-awesome-reveal";


export default function Contact() {

  
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_vxa1fpp",
            "template_81xo8uq",
            "#fm",
            "eZyeqmCXZ7UdzLsmS"
          )
          .then(
            (result) => {
              console.log(result.text);
              console.log("message sent");
              e.target.reset();
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
    
   
    return (
        <Container>
            < FormBody>
                <Slide direction="left">
                <form id="fm" className="fm" onSubmit={sendEmail}>
                        <div className="name">
                            <span>
                                <CgProfile />
                            </span>
                            <input type="text" name="user_name"  placeholder="Nom..." />
                        </div>
                        <div className="email">
                            <span>
                                <MdAlternateEmail />
                            </span>
                            <input type="email" name="user_email" placeholder="Email..." />
                        </div>
                        <div className="message">
                            <span className="messageIcon">
                                <FiMail />
                            </span>
                            <textarea name="message" cols="30" rows="10" placeholder="Message..."></textarea>
                        </div>
                        <button type="submit" value="Send">Envoyer</button>                        
                    </form>
                </Slide>
            </ FormBody>
        </Container>
    )
}

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 70%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const  FormBody = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #ffffff;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #000000;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #F6F1E9;
        width: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }
    button {
        margin-top: 2rem;
        display: inline-block;
        outline: none;
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
       }
`;
