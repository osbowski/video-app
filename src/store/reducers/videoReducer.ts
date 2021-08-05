import { fetchedVideo } from "../../types";

const VideoReducer = (state: fetchedVideo[], action: any) => {
  switch (action.type) {
    case "ADD_VIDEO":
      return [...state, action.payload];
    case "DELETE_VIDEO":
      return state.filter((video) => video.id !== action.payload);

    case "ADD_VIDEO_TO_FAVORITES":
      return state.map((video) =>
        video.id === action.payload
          ? { ...video, favorite: !video.favorite }
          : video
      );
    case "REMOVE_ALL_VIDEOS":
      return [];
    default:
      return state;
  }
};

export default VideoReducer;
