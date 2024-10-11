import { motion } from "framer-motion";
import React from "react";

type Timer={
  timerMode: string;
  handleTimerMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Nav(props: Timer) {

  return (
    <nav className="flex">
      <motion.label
        htmlFor="pomodoro"
        className={props.timerMode === "pomodoro" ? "active" : ""}
      >
        <input
          type="radio"
          name="timer"
          id="pomodoro"
          value="pomodoro"
          onChange={props.handleTimerMode}
          checked={props.timerMode === "pomodoro"}
        />
        pomodoro
      </motion.label>
      <motion.label
        htmlFor="shortBreak"
        className={props.timerMode === "shortBreak" ? "active" : ""}
      >
        <input
          type="radio"
          name="timer"
          id="shortBreak"
          value="shortBreak"
          onChange={props.handleTimerMode}
          checked={props.timerMode === "shortBreak"}
        />
        short break
      </motion.label>
      <label
        htmlFor="longBreak"
        className={props.timerMode === "longBreak" ? "active" : ""}
      >
        <input
          type="radio"
          name="timer"
          id="longBreak"
          value="longBreak"
          onChange={props.handleTimerMode}
          checked={props.timerMode === "longBreak"}
        />
        long break
      </label>
    </nav>
  );
}
