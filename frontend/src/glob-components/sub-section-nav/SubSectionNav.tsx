type SectionNavProps = {
  sections: string[];
  activeSection: string;
  handleSectionChange: (section: string) => void;
};

export default function SubSectionNav({
  sections,
  activeSection,
  handleSectionChange,
}: SectionNavProps) {
  return (
    <ul className="component-border h-8 bg-gray-200 flex justify-between gap-2 text-center items-center text-sm px-1">
      {sections.map((sectionName, index) => (
        <li
          key={index}
          className={`min-w-[150px] rounded-2xl flex-1 h-7 grid items-center mini-text-normal cursor-pointer ${
            activeSection === sectionName ? "font-bold bg-white" : ""
          }`}
          onClick={() => handleSectionChange(sectionName)}
        >
          {sectionName}
        </li>
      ))}
    </ul>
  );
}
