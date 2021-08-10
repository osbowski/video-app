import { fetchedVideo } from "../../types";

export const addToFavorites = (video: fetchedVideo) => {
  return {
    type: "ADD_VIDEO_TO_FAVORITES",
    payload: video,
  };
};
