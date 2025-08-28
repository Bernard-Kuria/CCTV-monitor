import { maintenance } from "../data";

export function maintenanceDue() {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  return maintenance.reduce((acc, curr) => {
    const dueMonth = curr.next_due.getMonth();
    const dueYear = curr.next_due.getFullYear();

    return dueMonth === currentMonth && dueYear === currentYear ? acc + 1 : acc;
  }, 0);
}

export function prevMonthMaintenanceDue() {
  const now = new Date();
  const currentMonth = now.getMonth() - 1;
  const currentYear = now.getFullYear();

  return maintenance.reduce((acc, curr) => {
    const dueMonth = curr.next_due.getMonth();
    const dueYear = curr.next_due.getFullYear();

    return dueMonth === currentMonth && dueYear === currentYear ? acc + 1 : acc;
  }, 0);
}
