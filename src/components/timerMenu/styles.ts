import styled from "styled-components";
import { props } from "../../App";

export const TimeWrapper = styled.div<props>`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-self: center;
  justify-content: center;
  align-items: center;
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
    }

    p {
      font-size: 30px;
    }

    @media (max-width: 500px) {
      h1 {
        font-size: 100px;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    gap: 10px;

    label {
      font-size: 26px;
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

    @media (max-width: 500px) {
      form {
        gap: 20px;
      }

      label {
        font-size: 18px;
        margin-bottom: 30px;
      }
    }
  }
`;
