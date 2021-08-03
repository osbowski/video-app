import { fetchedVideo } from "../../types";

export const removeAllVideos = (videos:fetchedVideo[]) => {
    return {
      type: "REMOVE_ALL_VIDEOS",
      payload:videos
    };
  };