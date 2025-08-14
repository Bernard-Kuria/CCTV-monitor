import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CalenderView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [today, setToday] = useState<number | undefined>();
  const [prevDatesArr, setPrevDatesArr] = useState<number[]>([]);
  const [datesArr, setDatesArr] = useState<number[]>([]);
  const [nxtDatesArr, setNxtDatesArr] = useState<number[]>([]);

  const dates = useRef<HTMLDivElement | null>(null);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  function handleDateClick(e: React.MouseEvent<HTMLButtonElement>) {
    const button = e.target as HTMLButtonElement;
    // remove "selected" class from other buttons
    const seleted = dates.current?.querySelectorAll(".selected");
    seleted?.forEach((el) => el.classList.remove("selected"));

    // add "selected" class to clicked button
    button.classList.add("selected");
    const day = parseInt(
      (e.target as HTMLButtonElement).textContent || "0",
      10
    );
    const newDate = new Date(year, month, day);
    setSelectedDate(newDate);
  }

  function nxtMonthNav() {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  }

  function prevMonthNav() {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  }

  //   function updateYearMonth() {}

  useEffect(() => {
    const prevDates: number[] = [];
    const currentDates: number[] = [];
    const nextDates: number[] = [];

    // Last week of prev month
    const lastOfPrevMonth = new Date(year, month, 0);
    for (let i = 0; i <= lastOfPrevMonth.getDay(); i++) {
      prevDates.push(lastOfPrevMonth.getDate() - lastOfPrevMonth.getDay() + i);
    }

    // Current month
    const lastOfMonth = new Date(year, month + 1, 0);
    for (let i = 1; i <= lastOfMonth.getDate(); i++) {
      currentDates.push(i);
    }

    // Next month
    const firstOfNextMonth = new Date(year, month + 1, 1);
    for (let i = firstOfNextMonth.getDay(); i < 7; i++) {
      nextDates.push(
        firstOfNextMonth.getDate() - firstOfNextMonth.getDate() + i
      );
    }

    setPrevDatesArr(prevDates);
    setDatesArr(currentDates);
    setNxtDatesArr(nextDates);

    // Set today's highlight if the current month/year matches today
    const now = new Date();
    if (now.getFullYear() === year && now.getMonth() === month) {
      setToday(now.getDate());
    } else {
      setToday(undefined);
    }
  }, [year, month]);

  return (
    <div className="text-normal flex gap-5">
      <div className="component-border p-5 w-[300px] h-[350px] flex flex-col gap-5 items-center">
        <div className="date-selector flex justify-center w-full gap-2">
          <FontAwesomeIcon
            className="prev nav-arrows left-0"
            icon={["fas", "angle-left"]}
            onClick={prevMonthNav}
          />
          <select
            className="month-input border bordered-text w-[130px]"
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
          >
            {months.map((name, index) => (
              <option key={index} value={index}>
                {name}
              </option>
            ))}
          </select>
          <input
            type="number"
            className="year-input w-[70px] bordered-text"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />
          <FontAwesomeIcon
            className="next nav-arrows right-0"
            icon={["fas", "angle-right"]}
            onClick={nxtMonthNav}
          />
        </div>

        <div className="relative w-full h-70">
          <ul className="days flex justify-between text-center">
            {daysOfWeek.map((day) => (
              <li key={day} className="w-8">
                {day}
              </li>
            ))}
          </ul>
          <div
            className="dates grid flex-cols grid-cols-7 gap-1 mb-5"
            ref={dates}
          >
            {prevDatesArr.length > 0 &&
              prevDatesArr.map((date, index) => (
                <button key={index} className={`date`} disabled>
                  {date}
                </button>
              ))}
            {datesArr.length > 0 &&
              datesArr.map((date) => (
                <button
                  key={date}
                  className={`date ${today === date ? "today" : ""}`}
                  onClick={(e) => handleDateClick(e)}
                >
                  {date}
                </button>
              ))}
            {nxtDatesArr.length > 0 &&
              nxtDatesArr.map((date, index) => (
                <button key={index} disabled className={`date`}>
                  {date}
                </button>
              ))}
          </div>
          <div className="flex gap-1 absolute right-0 bottom-0">
            <div className="bright-button">Cancel</div>
            <div className="bright-button">Apply</div>
          </div>
        </div>
      </div>
      <div className="component-border flex-1 p-5">
        <div className="tasks-nav text-normal">
          <FontAwesomeIcon icon={["far", "calendar-days"]} /> Tasks for{" "}
          {selectedDate.toDateString()}
        </div>
        <div className="tasks-list w-full h-full text-center grid items-center">
          No tasks scheduled for this date
        </div>
      </div>
    </div>
  );
}
