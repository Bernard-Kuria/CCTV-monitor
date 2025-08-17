import { useState, type ReactNode } from "react";
import {
  SorterContext,
  type optionsProps,
  type element,
} from "./SorterContext";
import TaskSorter from "./Sorter";

type Props = { children: ReactNode };

export default function SorterProvider({ children }: Props) {
  const [message, setMessage] = useState<string>("Search camera...");

  const [options, setOptions] = useState<optionsProps>({
    selector1: [],
    selector2: [],
  });

  const [el, setEl] = useState<element>({
    elements: [<div></div>],
  });

  function Sorter() {
    return <TaskSorter message={message} options={options} {...el} />;
  }

  return (
    <SorterContext.Provider
      value={{
        messageProps: { message, setMessage },
        setOptions,
        Sorter,
        el,
        setEl,
      }}
    >
      {children}
    </SorterContext.Provider>
  );
}
