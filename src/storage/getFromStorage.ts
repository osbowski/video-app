import { initialStateInterface } from '../types';

export const getLocalStorage=(key:string, initialValue:initialStateInterface)=> {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      // if error, return initial value
      return initialValue;
    }
  }