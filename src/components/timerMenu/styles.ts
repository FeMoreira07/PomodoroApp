import styled from "styled-components";
import ReactModal from "react-modal";
import { props } from "../../App";
import theme from "../../styles/theme";

export const TimeWrapper = styled.div<props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  align-self: center;
  opacity: ${(props) => (props.studyStarted ? "1" : "0")};
  transition: 2s;
  width: 70%;
  height: 60vh;
  gap: 70px;

  .timeDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h1 {
      font-size: 160px;

      @media (max-width: 500px) {
        font-size: 100px;
      }
    }

    p {
      font-size: 30px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    font-size: 16px;

    label {
      font-size: 26px;

      @media (max-width: 500px) {
        font-size: 18px;
        margin-bottom: 30px;
      }
    }

    .selectDiv {
      display: flex;
      gap: 10px;
    }

    select {
      border-radius: 15px;
      height: 50px;
      width: 70px;
      border: 1px solid blue;
      background-color: transparent;
      font-weight: 600;
      font-size: 15px;
    }

    option {
      background-color: transparent;
    }
  }
`;

export const ModalContainer = styled(ReactModal)`
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 200px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h1 {
    text-align: center;
    font-size: 25px;
  }

  button {
    background-color: ${theme.baseColors.aquaBlue};
    width: 100px;
    font-size: 20px;
    color: white;
    transform: scale(1);
    transition: 0.6s;
    border: 0;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
