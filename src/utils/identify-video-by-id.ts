import axios from "axios";
import getVideoId from "get-video-id";

const checkIfYoutube = async (videoId: string) => {
  const endpoint = `https://youtube.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API}`;
  try {
    const response = await axios.get(endpoint);
    const data = await response.data.items[0];
    if (data) {
      return `https://www.youtube.com/watch?v=${data.id}`;
    } else {
      return checkIfVimeo(videoId);
    }
  } catch (err) {
    console.log(err);
  }
};

const checkIfVimeo = async (videoId: string) => {
  const endpoint = `https://api.vimeo.com/videos/${videoId}`;
  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_VIMEO_TOKEN}`,
      },
    });
    const data = await response.data;

    if (data) {
      return `https://vimeo.com/${videoId}`;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

export const identifyVideoById = async (videoId: string) => {
  const checker = await checkIfYoutube(videoId);
  if (checker) {
    return getVideoId(checker);
  } else {
    return;
  }
};
