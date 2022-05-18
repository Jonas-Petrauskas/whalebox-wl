import React, { useEffect, useState } from "react";
import "./countDownComponent.scss";
import { getRemainingTimeUntilMsTimestamp } from "../../utils/countdownTimerUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};
const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  const countdownTimestampMs = 1656626400000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearTimeout(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className="timer-container">
      <span>{remainingTime.days}</span>
      <span className="days">D</span>
      <span>{remainingTime.hours}</span>
      <span className="hours">H</span>
      <span>{remainingTime.minutes}</span>
      <span className="minutes">M</span>
      <span>{remainingTime.seconds}</span>
      <span className="seconds">S</span>
    </div>
  );
};

export default CountdownTimer;
