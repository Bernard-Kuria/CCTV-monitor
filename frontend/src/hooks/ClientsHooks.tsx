import { clients } from "../data";

export function totalClients() {
  return clients.length;
}

export function activeClients() {
  return clients.reduce((acc, curr) => {
    return curr.status === "active" ? acc + 1 : acc;
  }, 0);
}
