import React from "react";

type Time={
  time:number
}

export default function Timer({ time }: Time) {

  const [isActive, setIsActive] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(time * 60);
  const intervalRef = React.useRef<number | undefined>(undefined);

  React.useEffect(() => {
    if(intervalRef.current !==undefined){
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
    setIsActive(false)
    setTimeLeft(time * 60);
  }, [time]);

  // start button

  function startTimer() {
    if (!isActive) {
      setIsActive(true);
      const startTime = Date.now();

      intervalRef.current = window.setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        setTimeLeft(() => {
          const newTimeLeft = timeLeft - elapsedTime;
          if (newTimeLeft <= 0) {
            clearInterval(intervalRef.current);
            intervalRef.current = undefined;
            setIsActive(false);
            return 0;
          }
          return newTimeLeft;
        });
      }, 1000);
    }
  }

  // reset button

  function handleReset() {
    if (intervalRef.current !== undefined) { 
      clearInterval(intervalRef.current); 
      intervalRef.current = undefined; 
      setIsActive(false);
    }
    setTimeLeft(time * 60);
  }

  return (
    <section className="timer">
      <div className="circle flex">
        <p className="time">
          <span className="min">
            {String(Math.floor(timeLeft / 60)).padStart(2, "0")}
          </span>
          <span>:</span>
          <span className="sec">{String(timeLeft % 60).padStart(2, "0")}</span>
        </p>
        <div className="timeButton flex">
        <button type="button" className="start" onClick={startTimer}>
          start
        </button>
        <button type="button" className="reset" onClick={handleReset}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#d7e0ff"
          >
            <path
              d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57
             57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 
             143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140
              56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z"
            />
          </svg>
        </button>
        </div>
      </div>
    </section>
  );
}
