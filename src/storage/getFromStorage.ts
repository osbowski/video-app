import { fetchedVideo } from "../types";

export const getFromStorage=(key:string, initialValue:fetchedVideo[])=> {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  }