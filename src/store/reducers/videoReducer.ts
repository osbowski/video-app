import { videosInterface } from "../../types";

const VideoReducer = (state: videosInterface, action: any): videosInterface => {
  switch (action.type) {
    case "ADD_VIDEO":
      return {
        ...state,
        normalVideos: [action.payload, ...state.normalVideos],
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
      const toFav = state.normalVideos.find(video=>video.id===action.payload);

      return {
        ...state,
        normalVideos: state.normalVideos.map((video) =>
          video.id === action.payload
            ? { ...video, favorite: !video.favorite }
            : video
        ),
        favs: [...state.favs,toFav!]
      };

    case "REMOVE_ALL_VIDEOS":
      console.log("videos removed");
      return {normalVideos:[],favs:[]}
    default:
      return state;
  }
};

export default VideoReducer;
