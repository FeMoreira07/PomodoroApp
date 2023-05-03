import styled from "styled-components";
import theme from "./styles/theme";

type props = {
  studyStarted: boolean;
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
  margin-bottom: ${(props) => (props.studyStarted ? "590px" : "")};
  transition: 1.3s;
  @media (max-width: 500px) {
    font-size: 70px;
  }
  @media (max-width: 350px) {
    font-size: 50px;
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

  :hover {
    scale: 1.2;
    transition: 0.6s;
  }
`;


// export const Container = styled.div`
//   width: 500px;
//   height: 600px;
//   background-color: white;
//   position: absolute;
//   align-self: center;
// `