import Technician from "../components/Technician";

export default function Technicians() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="grid grid-cols-3 gap-5">
      {arr.map((_, index) => (
        <Technician key={index} />
      ))}
    </div>
  );
}
