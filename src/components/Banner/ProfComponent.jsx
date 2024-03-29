import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h3>
            Hello <span className="green">I'm</span>
          </h3>
          <h1 className="green">ABISHEK</h1>
          <h3>Full Stack Developer</h3>
          <p>
          If you are seeking an individual capable of crafting innovative solutions, you have arrived at an apt destination. 
          I am a dedicated Fullstack Developer, proficient in both Front-end and Back-end development. 
          Concurrently, I am engaged in enhancing my skills through an E-Learning platform known as GUVI. 
          Should you have any inquiries or propositions to discuss, kindly reach out by utilizing the contact link provided below.

          Anticipating a constructive engagement!
            <br></br>
          </p>
          <a href="#footer">
          <button >Ping me!</button>
          </a>
          
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="https://www.instagram.com/ab_shkkk/?next=%2F" target="_blank">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="https://github.com/Abishekk21" target="_blank">
                  <AiFillGithub />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/abishek-k-10a692224/" target="_blank">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src="https://lh3.googleusercontent.com/pw/AJFCJaWZKGU9cPAG7qkMetzmTKwayYhhZRp_yuEgwxgsLZHPoj3-IQY9fmdChORbjjod4zyOs1mzkdiGKmBQUtrKaF1r_6KDrSw-8NRl8aMrSnJp_qGbk40=w2400"
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

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
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 18rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;