import { devices } from "../data";

export function findTotalDevices() {
  return devices.length;
}

export function findDevicesByStatus(status: string) {
  return devices.reduce(
    (acc, curr) => (curr.status === status ? acc + 1 : acc),
    0
  );
}
