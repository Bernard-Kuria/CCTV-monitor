import type {
  SectionProps,
  ActiveSectionType,
  handleSectionChange,
} from "./globalContext";

type handleSection = {
  handleSectionChange: handleSectionChange;
};

type SectionNavProps = SectionProps & ActiveSectionType & handleSection;

export default function SubSectionNav({
  sections,
  activeSection,
  handleSectionChange,
}: SectionNavProps) {
  return (
    <ul className="component-border h-8 bg-transparent flex justify-between gap-2 text-center items-center text-sm px-1">
      {sections.map((sectionName, index) => (
        <li
          key={index}
          className={`min-w-[150px] rounded-2xl flex-1 h-6 grid items-center  cursor-pointer ${
            activeSection === sectionName
              ? "bg-gray-400 text-white dark:bg-white dark:text-black"
              : "dark:text-white"
          }`}
          onClick={() => handleSectionChange(sectionName)}
        >
          {sectionName}
        </li>
      ))}
    </ul>
  );
}
