type SectionNavProps = {
  activeSection: string;
  handleSectionChange: (section: string) => void;
};

export default function SectionNav({
  activeSection,
  handleSectionChange,
}: SectionNavProps) {
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
          className={`min-w-[150px] rounded-2xl flex-1 h-7 grid items-center mini-text-normal cursor-pointer ${
            activeSection === sectionName.toLowerCase().replace(" ", "")
              ? "font-bold bg-white"
              : ""
          }`}
          onClick={() =>
            handleSectionChange(sectionName.toLowerCase().replace(" ", ""))
          }
        >
          {sectionName}
        </li>
      ))}
    </ul>
  );
}
