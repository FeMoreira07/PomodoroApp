import { useEffect, useState } from "react";
import { Button } from "../../App";
import { ModalContainer, TimeWrapper } from "./styles";
import music from "../../assets/iphone-13-pro-alarm.mp3";

type Data = {
  isActive: boolean;
};

type Time = {
  minutes: number;
  seconds: number;
};

export function TimerMenu(props: Data) {
  const [time, setTime] = useState<Time>({ minutes: 30, seconds: 0 });
  const [restTime, setRestTime] = useState(false);
  const [selectedStudyHours, setSelectedStudyHours] = useState("1");
  const [timerRunning, setTimerRunning] = useState(false);
  const [studyCounter, setStudyCounter] = useState(1);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    let interval: number | undefined;
    if (timerRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime.seconds > 0) {
            return { minutes: prevTime.minutes, seconds: prevTime.seconds - 1 };
          } else if (prevTime.minutes > 0) {
            return { minutes: prevTime.minutes - 1, seconds: 59 };
          } else {
            return prevTime;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  useEffect(() => {
    if (time.minutes === 0 && time.seconds === 0) {
      const audio = new Audio(music);
      if (restTime === false) {
        setRestTime(true);
        setTime({ minutes: 10, seconds: 0 });
        audio.play();
        setTimerRunning(false);
      } else {
        setRestTime(false);
        setTime({ minutes: 30, seconds: 0 });
        setStudyCounter((prevCounter) => prevCounter + 1);
        audio.play();
        setTimerRunning(false);
      }
    }
  }, [time, restTime]);

  const handleTimerToggle = () => {
    setTimerRunning((prevState) => !prevState);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStudyHours(e.target.value);
  };

  const handleStartStopButtonClick = () => {
    handleTimerToggle();
  };

  const handleStudyHourCompletion = () => {
    const studyHours = parseInt(selectedStudyHours);
    if (studyCounter === studyHours * 2) {
      handleTimerToggle();
      setIsOpen(!isOpen)
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleStudyHourCompletion, [studyCounter, selectedStudyHours]);

  return (
    <TimeWrapper studyStarted={props.isActive}>
      <div className="timeDiv">
        <h1>
          {time.minutes}:{time.seconds <= 9 ? "0" : ""}
          {time.seconds}
        </h1>
        <p>{restTime ? "Rest time!" : "Study Time"}</p>
      </div>
      <form>
        <div className="selectDiv">
          <label>Select how many hours to study</label>
          <select value={selectedStudyHours} onChange={handleSelectChange}>
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
            <option value="4">4 hours</option>
            <option value="5">5 hours</option>
          </select>
        </div>
        <Button type="button" onClick={handleStartStopButtonClick}>
          {timerRunning ? "Stop" : "Start"}
        </Button>
      </form>
      <ModalContainer isOpen={isOpen}>
        <h1>Congratulations, you have completed your studies for today!</h1>
        <button onClick={()=> setIsOpen(!isOpen)}>Close</button>
      </ModalContainer>
    </TimeWrapper>
  );
}
