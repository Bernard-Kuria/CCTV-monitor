import { notifications } from "../data";

export function findTotalNotifications() {
  return notifications.length;
}

export function findNotificationsBy(sorter: string) {
  return [notifications?.find((notification) => notification.type === sorter)]
    ?.length;
}
