import Button from "../Button/Button";
import "./styles.css";
import { useState } from "react";

function Feedback() {
  const resetedCounter = 0;
  const [countLike, setCountLike] = useState(resetedCounter);
  const [countDislike, setCountDislike] = useState(resetedCounter);

  const onPlusLike = () => {
    setCountLike((prevValue) => prevValue + 1);
  };

  const onPlusDislike = () => {
    setCountDislike((prevValue) => prevValue + 1);
  };

  const resetResult = () => {
    setCountLike(resetedCounter);
    setCountDislike(resetedCounter);
  };

  return (
    <div className="feedback-wrapper">
      <div className="buttons-results-container">
        <div className="result">{countLike}</div>
        <div className="button-like">
          <Button name="Like" onClick={onPlusLike} />
        </div>
        <div className="button-dislike">
          <Button name="Dislike" onClick={onPlusDislike} />
        </div>
        <div className="result">{countDislike}</div>
      </div>
      <div className="reset-button">
        <Button name="Reset Results" onClick={resetResult} />
      </div>
    </div>
  );
}

export default Feedback;
