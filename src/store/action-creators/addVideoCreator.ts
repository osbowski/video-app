import { fetchedVideo } from "../../types";

export const addVideo = (video: fetchedVideo) => {
  return {
    type: "ADD_VIDEO",
    payload: video,
  };
};
