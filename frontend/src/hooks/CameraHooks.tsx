import { cameras } from "../data";

export function findTotalCameras() {
  return cameras.length;
}

export function findCamerasByStatus(status: string) {
  return cameras.reduce(
    (acc, curr) => (curr.status === status ? acc + 1 : acc),
    0
  );
}

export function newCameraInstallments() {
  const now = new Date();
  const weekInMs = 7 * 24 * 60 * 60 * 1000;

  return cameras.reduce((acc, curr) => {
    const installed = new Date(curr.installed_on).getTime();
    const diff = now.getTime() - installed; // ms since install

    // camera installed within the last 7 days
    return diff >= 0 && diff <= weekInMs ? acc + 1 : acc;
  }, 0);
}
