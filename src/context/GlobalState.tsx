import { createContext, useReducer, useEffect, Dispatch } from "react";
import { getFromStorage } from "../store/localStorage/getFromStorage";
import VideoReducer from "../store/reducers/videoReducer";
import { fetchedVideo } from "../types";
import { initialState } from "./initialState";

interface actionInterface {
  type: string;
  payload: any;
}
interface contextInterface {
  videos: fetchedVideo[];
  dispatch: Dispatch<actionInterface>;
}

export const GlobalContext = createContext<contextInterface>({
  videos: initialState,
  dispatch: () => {},
});

export const GlobalProvider: React.FC = ({ children }) => {
  const [videos, dispatch] = useReducer(VideoReducer, [], () => {
    const value = getFromStorage("videos", initialState);
    return value;
  });

  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  return (
    <GlobalContext.Provider value={{ videos, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
