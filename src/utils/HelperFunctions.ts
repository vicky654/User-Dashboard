import dayjs from "dayjs";

export const formatDate = (value: string) =>
  value ? dayjs(value).format("DD MMM YYYY, dddd") : "-";

 export const formatDateTime = (value: string) =>
  value ? dayjs(value).format("DD MMM YYYY,  hh:mm A") : "-";
