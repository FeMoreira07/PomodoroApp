import { useEffect, useState } from "react";
import { Button } from "../../App";
import { TimeWrapper } from "./styles";

type data = {
  isActive: boolean;
};

export function TimerMenu(props: data) {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds <= 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (seconds > 0) {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds, minutes]);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      setMinutes(10);
    }
  }, [minutes, seconds]);

  return (
    <TimeWrapper studyStarted={props.isActive}>
      <div className="timeDiv">
        <h1>
          {minutes}:{seconds <= 9 && "0"}
          {seconds}
        </h1>
        <p>Study time!</p>
      </div>
      <form>
        <div className="selectDiv">
          <label> Select how many yours to study </label>
          <select>
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
            <option value="4">4 hours</option>
            <option value="5">5 hours</option>
          </select>
        </div>

        <Button
          onClick={() => {
            setIsRunning(!isRunning);
          }}
          type="button"
        >
          {isRunning ? "Stop" : "Start"}
        </Button>
      </form>
    </TimeWrapper>
  );
}
