import styled from "styled-components";
import theme from "./styles/theme";

export type props = {
  studyStarted?: boolean;
};

export const Wrapper = styled.div<props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100vh;
  gap: 30px;
`;

export const Title = styled.h1<props>`
  color: ${theme.baseColors.white};
  font-size: 100px;
  text-align: center;
  padding: 5px;
  margin-bottom: ${(props) => (props.studyStarted ? "550px" : "")};
  transition: 1.3s;

  @media (max-width: 1280px){
    margin-bottom: ${(props) => (props.studyStarted ? "450px" : "")};
  }

  @media (max-width: 1134px){
    margin-bottom: ${(props) => (props.studyStarted ? "450px" : "")};
  }

  @media (max-width: 1024px){
    margin-bottom: ${(props) => (props.studyStarted ? "300px" : "")};
    font-size: 80px;
  }

  @media (max-width: 678px){
    font-size: 70px;
  }

  @media (max-width: 678px){
    margin-bottom: ${(props) => (props.studyStarted ? "350px" : "")};
  }

  @media (max-width: 500px) {
    font-size: 70px;
  }

  @media (max-width: 411px) {
    font-size: 50px;
    margin-bottom: ${(props) => (props.studyStarted ? "250px" : "")};
  }
  @media (max-width: 375px) {
    font-size: 50px;
    margin-bottom: ${(props) => (props.studyStarted ? "250px" : "")};
  }
`;

export const Description = styled.p<props>`
  color: white;
  font-size: 20px;
  text-align: center;
  padding: 5px;
  transition: 0.6s;
  opacity: ${(props) => (props.studyStarted ? "0" : "1")};
  display: ${setInterval(()=> 'none', 3000)};

  span {
    color: yellow;
  }
`;

export const Button = styled.button<props>`
  background-color: white;
  width: 155px;
  height: 60px;
  border-radius: 20px;
  align-self: center;
  font-size: 15px;
  scale: 1;
  transition: 0.6s;
  border: 0px;
  color: ${theme.baseColors.blue};
  opacity: ${(props) => (props.studyStarted ? "0" : "1")};
  z-index: 1;

  :hover {
    scale: 1.2;
    transition: 0.6s;
  }
`;


