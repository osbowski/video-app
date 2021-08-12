import {
  createContext,
  useReducer,
  useEffect,
  Dispatch,
  useState,
  SetStateAction,
} from "react";
import { getFromStorage } from "../store/localStorage/getFromStorage";
import VideoReducer from "../store/reducers/videoReducer";
import { videosInterface } from "../types";

interface actionInterface {
  type: string;
  payload: any;
}
interface contextInterface {
  videos: videosInterface;
  renderedVideos: number;
  setRenderedVideos: Dispatch<SetStateAction<number>>;
  dispatch: Dispatch<actionInterface>;
}

export const GlobalContext = createContext<contextInterface>({
  videos: { normalVideos: [], favs: [] },
  renderedVideos: 0,
  setRenderedVideos: () => {},
  dispatch: () => {},
});

export const GlobalProvider: React.FC = ({ children }) => {
  const [videos, dispatch] = useReducer(
    VideoReducer,
    { normalVideos: [], favs: [] },
    () => {
      const value = getFromStorage("videos", { normalVideos: [], favs: [] });
      return value;
    }
  );
  const [renderedVideos, setRenderedVideos] = useState(0);

  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  return (
    <GlobalContext.Provider
      value={{ videos, renderedVideos, setRenderedVideos, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
