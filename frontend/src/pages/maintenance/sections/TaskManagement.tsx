import Task from "../components/Task";

export default function TaskManagement() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      {arr.map(() => (
        <Task />
      ))}
    </>
  );
}
