import React from "react";
import closeIcon from "../assets/closeIcon.svg";
import checkIcon from "../assets/checkIcon.svg";
import SettingTimer from "./settingTimer";
import { useFormContext } from "./formContext";

export default function Setting(props: { handleSettingDisplay: () => void }) {
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
    document.documentElement.setAttribute(
      "data-theme",
      form.color
    );
    props.handleSettingDisplay()
  }

  return (
    <div className="setting">
      <div className="settingContent">
        <div className="settingHeader flex">
          <h1>Settings</h1>
          <button type="button" onClick={props.handleSettingDisplay}>
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>
        <div className="settingForm">
          <form onSubmit={handleSubmit}>
            <SettingTimer />
            <div className="formRadioContent fontContent">
              <h2>Font</h2>
              <div className="flex">
                {fontArr.map((item, index) => (
                  <label
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
                  </label>
                ))}
              </div>
            </div>
            <div className="formRadioContent">
              <h2>color</h2>
              <div className="flex">
                {colorArr.map((item, index) => (
                  <label
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
                    {form.color === item && <img src={checkIcon} alt="check icon" />}
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className="apply">Apply</button>
          </form>
        </div>
      </div>
    </div>
  );
}
