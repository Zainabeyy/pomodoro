import { createContext, useContext, useState } from "react";

type FormState = {
  timers: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  };
  font: string;
  color: string;
};
type FormContextType = {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [form, setForm] = useState<FormState>({
    timers: {
      pomodoro: 25,
      shortBreak: 5,
      longBreak: 15,
    },
    font: "kumbh",
    color: "peach",
  });

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
};
