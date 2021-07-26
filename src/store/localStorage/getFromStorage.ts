import { fetchedVideo } from "../../types";

export const getFromStorage = (
  key: string,
  initialValue: fetchedVideo[] = []
): fetchedVideo[] => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : initialValue;
};
