import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { type SorterProps, type element } from "./globalContext";

type TaskSorterProps = SorterProps & element;

export default function TaskSorter({
  message,
  options,
  elements,
}: TaskSorterProps) {
  return (
    <div className="mini-text-normal component-border flex h-[60px] items-center justify-between p-5">
      <div className="flex gap-[20px]">
        {message !== "" ? (
          <div className="input camera-search flex gap-1 items-center focus-within:border-2 focus-within:shadow-md shadow-gray-500">
            <FontAwesomeIcon
              className="text-gray-400"
              icon="magnifying-glass"
            />
            <input
              type="text"
              placeholder={`${message}`}
              className="focus:outline-none"
            />
          </div>
        ) : (
          ""
        )}

        {Object.entries(options).map(([selector, options]) => (
          <select
            key={selector}
            name=""
            id={`${selector}`}
            className="selector"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ))}
      </div>

      {elements.length > 0 &&
        elements.map((element, index) => <div key={index}>{element}</div>)}
    </div>
  );
}
