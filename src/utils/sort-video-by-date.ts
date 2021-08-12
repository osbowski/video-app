import { fetchedVideo } from "../types";

const sortVideosByDate = (isSorted: boolean, videos: fetchedVideo[]) => {
  let sortedVideo: fetchedVideo[];
  if (isSorted === true) {
    sortedVideo = videos.sort((a, b) => a.data.date - b.data.date);
  } else {
    sortedVideo = videos.sort((a, b) => b.data.date - a.data.date);
  }

  return sortedVideo;
};

export default sortVideosByDate;