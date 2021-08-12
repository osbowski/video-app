import { videosInterface } from "../../types";

export const getFromStorage = (
  key: string,
  initialValue: videosInterface
): videosInterface => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : initialValue;
};