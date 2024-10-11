import React from "react";
import closeIcon from "../assets/closeIcon.svg";
import checkIcon from "../assets/checkIcon.svg";
import SettingTimer from "./settingTimer";
import { useFormContext } from "./formContext";
import { motion, AnimatePresence } from "framer-motion";

type SettingProps = {
  handleSettingDisplay: () => void;
  showSetting: boolean;
};

export default function Setting(props: SettingProps) {
  const fontArr = ["kumbh", "roboto", "spaceMono"];
  const colorArr = ["peach", "electricBlue", "brightLavender"];

  const { form, setForm } = useFormContext();
  function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    document.body.classList.remove("kumbh", "roboto", "spaceMono");
    document.body.classList.add(form.font);
    document.documentElement.setAttribute("data-theme", form.color);
    props.handleSettingDisplay();
  }

  return (
      <AnimatePresence>
        {props.showSetting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="settingContent"
          >
            <div className="settingHeader flex">
              <h1>Settings</h1>
              <motion.button whileHover={{scale:1.25}} type="button" onClick={props.handleSettingDisplay}>
                <img src={closeIcon} alt="close icon" />
              </motion.button>
            </div>
            <div className="settingForm">
              <form onSubmit={handleSubmit}>
                <SettingTimer />
                <div className="formRadioContent fontContent">
                  <h2>Font</h2>
                  <div className="flex">
                    {fontArr.map((item, index) => (
                      <motion.label
                      whileHover={{scale:1.09}}
                        htmlFor={item}
                        className={`fontLabel formRadioLabel flex ${
                          form.font === item ? "active" : ""
                        }`}
                        key={index}
                      >
                        Aa
                        <input
                          type="radio"
                          name="font"
                          id={item}
                          onChange={handleFormChange}
                          value={item}
                          checked={form.font === item}
                        />
                      </motion.label>
                    ))}
                  </div>
                </div>
                <div className="formRadioContent">
                  <h2>color</h2>
                  <div className="flex">
                    {colorArr.map((item, index) => (
                      <motion.label
                      whileHover={{scale:1.09}}
                        htmlFor={item}
                        key={index}
                        className={`colorLabel formRadioLabel flex ${
                          form.color === item ? "active" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="color"
                          id={item}
                          onChange={handleFormChange}
                          value={item}
                          checked={form.color === item}
                        />
                        {form.color === item && (
                          <img src={checkIcon} alt="check icon" />
                        )}
                      </motion.label>
                    ))}
                  </div>
                </div>
                <motion.button type="submit" className="apply" whileHover={{ backgroundColor:"#1e213f" }}>
                  Apply
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
  );
}
