import { Button } from "../../App";
import { TimeWrapper } from "./styles";

type data = {
  isActive: boolean;
};

export function TimerMenu(props: data) {
  return (
    <TimeWrapper studyStarted={props.isActive}>
      <div className="timeDiv">
        <h1>00:00</h1>
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

        <Button>Start!</Button>
      </form>
    </TimeWrapper>
  );
}
