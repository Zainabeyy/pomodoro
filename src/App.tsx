import React from "react";
import settingIcon from "./assets/settingIcon.svg";
import Setting from "./component/setting";
import Nav from "./component/nav";
import Timer from "./component/timer";
import { useFormContext } from "./component/formContext";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [showSetting, setShowSetting] = React.useState<boolean>(false);
  const [time, setTime] = React.useState(25);
  const [timerMode, setTimerMode] = React.useState("pomodoro");
  const { form } = useFormContext();

  function handletimerMode(e: React.ChangeEvent<HTMLInputElement>) {
    setTimerMode(e.target.value);
  }
  React.useEffect(() => {
    if (timerMode === "pomodoro") {
      setTime(form.timers.pomodoro);
    } else if (timerMode === "shortBreak") {
      setTime(form.timers.shortBreak);
    } else if (timerMode === "longBreak") {
      setTime(form.timers.longBreak);
    }
  }, [timerMode, form.timers]);

  function handleSettingDisplay() {
    setShowSetting((prev) => !prev);
  }

  return (
    <div id="content">
      <h1>pomodoro</h1>
      <Nav timerMode={timerMode} handleTimerMode={handletimerMode} />
      <Timer time={time} />
      <section>
        <motion.button
          className="setting"
          onClick={handleSettingDisplay}
          whileHover={{ scale: 1.2 }}
        >
          <img src={settingIcon} alt="setting icon" />
        </motion.button>
      </section>
      <AnimatePresence>
        {showSetting && (
          <motion.div
          className="setting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Setting
              handleSettingDisplay={handleSettingDisplay}
              showSetting={showSetting}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
