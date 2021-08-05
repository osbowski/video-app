import { videosInterface } from "../../types";

const VideoReducer = (state: videosInterface, action: any) => {
  switch (action.type) {
    case "ADD_VIDEO":
      // return [...state, action.payload];
      return {...state.normalVideos, normalVideos:[action.payload, ...state.normalVideos]}
    case "DELETE_VIDEO":
      return state.normalVideos.filter((video) => video.id !== action.payload);

    case "ADD_VIDEO_TO_FAVORITES":
      return state.normalVideos.map((video) =>
        video.id === action.payload
          ? { ...video, favorite: !video.favorite }
          : video
      );

      case "REMOVE_ALL_VIDEOS":
        console.log('videos removed')
        return [];
    default:
      return state;
  }
};

export default VideoReducer;
