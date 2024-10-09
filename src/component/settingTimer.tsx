import React from "react";
import arrowIcon from '../assets/arrow.svg';
import { useFormContext } from "./formContext";

type FormTimeKeys = "pomodoro" | "shortBreak" | "longBreak";

export default function SettingTimer(){
    const {form,setForm}= useFormContext()
      const timeArr = [
        { title: "pomodoro", id: "pomodoro" },
        { title: "short break", id: "shortBreak" },
        { title: "long break", id: "longBreak" },
      ];
    
      function handleTimerInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm((prevForm) => ({
          ...prevForm,
          timers: {
            ...prevForm.timers,
            [name]: value,
          },
        }));
      }
    
      function incrementTimer(id:string){
        setForm((prevForm)=>({
          ...prevForm,
          timers:{
            ...prevForm.timers,
            [id]:prevForm.timers[id as FormTimeKeys] +1,
          }
        }))
      }
      function decrementTimer(id:string){
        setForm((prevForm)=>({
          ...prevForm,
          timers:{
            ...prevForm.timers,
            [id]:prevForm.timers[id as FormTimeKeys] +1,
          }
        }))
      }

      const timeEl = timeArr.map((item, index) => {
        return (
          <div className="flex timeInputItem" key={index}>
            <label htmlFor={item.id}>{item.title}</label>
            <div className="inputNumber flex">
              <input
                type="number"
                name={item.id}
                id={item.id}
                min={1}
                value={form.timers[item.id as FormTimeKeys]}
                onChange={handleTimerInputChange}
              />
              <div className="inputImg">
                <button type="button" className="arrow arrowUP" onClick={()=>incrementTimer(item.id)}>
                  <img src={arrowIcon} alt="arrow Up icon" />
                </button>
                <button type="button" className="arrow arrowDown" onClick={()=>decrementTimer(item.id)}>
                  <img src={arrowIcon} alt="arrow down icon" />
                </button>
              </div>
            </div>
          </div>
        );
      });
    return (
        <div className="settingTime">
        <h2>time ( minutes )</h2>
        <div className="timeInput">{timeEl}</div>
      </div>
    )
}