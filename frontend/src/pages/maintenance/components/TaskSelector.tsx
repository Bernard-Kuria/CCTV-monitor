export default function TaskSelector() {
  const sections = [
    "Task Management",
    "Calender View",
    "Technicians",
    "Analytics",
  ];
  return (
    <ul className="component-border h-8 bg-gray-200 flex justify-between gap-2 text-center items-center text-sm px-1">
      {sections.map((sectionName, index) => (
        <li
          key={index}
          className="min-w-[150px] rounded-2xl flex-1 h-7 bg-white grid items-center mini-text-normal cursor-pointer hover:font-bold"
        >
          {sectionName}
        </li>
      ))}
    </ul>
  );
}
