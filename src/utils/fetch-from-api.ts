import axios from "axios";
import { fetchedVideo } from "../types";

const fetchVideoData = async (videoId: {
  id: string;
  service: string | null;
}) => {
  let fetchedVideo: fetchedVideo;
  const { id, service } = videoId;
  let endpoint: string;

  if (service === "youtube") {
    endpoint = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.REACT_APP_YOUTUBE_API}
        &fields=items(id,snippet(title, thumbnails),statistics(viewCount,likeCount))&part=snippet,statistics`;
    try {
      const response = await axios.get(endpoint);
      const fetchedData = await response.data.items[0];
      const { title, thumbnails } = fetchedData.snippet;
      const { likeCount, viewCount } = fetchedData.statistics;
      fetchedVideo = {
        id,
        service,
        favorite: false,
        data: {
          title,
          date: Date.now(),
          thumbnail: thumbnails.maxres
            ? thumbnails.maxres.url
            : thumbnails.high.url,
          views: viewCount,
          likes: likeCount,
          link: `https://www.youtube.com/watch?v=${id}`,
        },
      };
      return fetchedVideo;
    } catch (error) {
      return false;
    }
  } else if (service === "vimeo") {
    endpoint = `https://api.vimeo.com/videos/${id}`;

    try {
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_VIMEO_TOKEN}`,
        },
      });
      const fetchedData = await response.data;
      fetchedVideo = {
        id,
        service,
        favorite: false,
        data: {
          title: fetchedData.name,
          date: Date.now(),
          thumbnail: fetchedData.pictures.sizes[6].link,
          views: fetchedData.stats.plays,
          likes: fetchedData.metadata.connections.likes.total,
          link: fetchedData.link,
        },
      };
      return fetchedVideo;
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};

export default fetchVideoData;