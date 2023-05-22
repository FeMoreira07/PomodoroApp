import { useEffect, useState } from "react";
import { Button } from "../../App";
import { TimeWrapper } from "./styles";
import music from "../../assets/iphone-13-pro-alarm.mp3";

type data = {
  isActive: boolean;
};

export function TimerMenu(props: data) {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [studyIsRunning, setStudyIsRunning] = useState(false);
  const [restTime, setRestime] = useState(false);
  const [selectValue, setSelectValue] = useState('1');

  useEffect(() => {
    let interval: number | undefined;
    if (studyIsRunning) {
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
  }, [studyIsRunning, seconds, minutes]);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      const audio = new Audio(music);
      if (restTime === false) {
        setRestime(true);
        setMinutes(10);
        audio.play();
        setStudyIsRunning(false);
      } else {
        setRestime(false);
        setMinutes(30);
        audio.play();
        setStudyIsRunning(false);
      }
    }
  }, [minutes, seconds, restTime]);

  return (
    <TimeWrapper studyStarted={props.isActive}>
      <div className="timeDiv">
        <h1>
          {minutes}:{seconds <= 9 && "0"}
          {seconds}
        </h1>
        <p>{restTime ? "Rest time!" : "Study Time"}</p>
      </div>
      <form>
        <div className="selectDiv">
          <label> Select how many yours to study </label>
          <select
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
            <option value="4">4 hours</option>
            <option value="5">5 hours</option>
          </select>
        </div>

        <Button
          onClick={() => {
            setStudyIsRunning(!studyIsRunning);
          }}
          type="button"
        >
          {studyIsRunning ? "Stop" : "Start"}
        </Button>
      </form>
    </TimeWrapper>
  );
}
