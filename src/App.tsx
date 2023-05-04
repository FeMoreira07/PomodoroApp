import "./App.ts";
import { useState } from "react";
import { Button, Description, Title, Wrapper } from "./App.ts";
import { GlobalStyles } from "./styles/global.ts";
import { TimerMenu } from "./components/timerMenu/TimerMenu.tsx";

function App() {
  const [studyStarted, setStudyStarded] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles />
      <Wrapper studyStarted={studyStarted}>
        <Title studyStarted={studyStarted}>Pomodoro App</Title>
        <Description studyStarted={studyStarted}>
          Welcome to our Pomodoro Timer website, where you can{" "}
          <span>boost your study</span> productivity using the Pomodoro
          Technique.
        </Description>
        <Button
          studyStarted={studyStarted}
          onClick={() => {
            setStudyStarded(true);
          }}
        >
          Start your studies
        </Button>
        <TimerMenu isActive={studyStarted}></TimerMenu>
      </Wrapper>
    </>
  );
}

export default App;
