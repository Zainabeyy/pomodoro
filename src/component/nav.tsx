export default function Nav(props: {
  timerMode: string;
  handleTimerMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <nav className="flex">
      <label
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
      </label>
      <label
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
      </label>
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
