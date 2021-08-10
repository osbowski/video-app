import { videosInterface } from "../../types";

const VideoReducer = (state: videosInterface, action: any): videosInterface => {
  switch (action.type) {
    case "ADD_VIDEO":
      return {
        ...state,
        normalVideos: [...state.normalVideos, action.payload],
      };
    case "DELETE_VIDEO":
      return {
        ...state,
        normalVideos: state.normalVideos.filter(
          (video) => video.id !== action.payload
        ),
        favs: state.favs.filter((video) => video!.id !== action.payload),
      };

    case "ADD_VIDEO_TO_FAVORITES":
      const index = state.normalVideos.findIndex(
        (video) => video.id === action.payload.id
      );
      const newVideosArr = [...state.normalVideos];
      newVideosArr[index].favorite = true;

      return {
        normalVideos: [...newVideosArr],
        favs: [...state.favs, action.payload],
      };

    case "REMOVE_VIDEO_FROM_FAVORITE":
      const indexToRemoveFromFav = state.normalVideos.findIndex(
        (video) => video.id === action.payload
      );
      const newVideosArrRemoveFromFav = [...state.normalVideos];
      newVideosArrRemoveFromFav[indexToRemoveFromFav].favorite = false;
      return {
        normalVideos: [...newVideosArrRemoveFromFav],
        favs: state.favs.filter((video) => video!.id !== action.payload),
      };

    case "REMOVE_ALL_VIDEOS":
      return { normalVideos: [], favs: [] };
    default:
      return state;
  }
};

export default VideoReducer;
