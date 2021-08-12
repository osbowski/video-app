import { videosInterface } from "../../types";

export const removeAllVideos = (videos: videosInterface) => {
  return {
    type: "REMOVE_ALL_VIDEOS",
    payload: videos,
  };
};