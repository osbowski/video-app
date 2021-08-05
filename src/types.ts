export interface videoData {
  title: string;
  views: number;
  likes: number;
  date: number;
  link: string;
  thumbnail: string;
}
export interface fetchedVideo {
  id: string;
  service: string;
  favorite: boolean;
  data: videoData;
}

export interface videosInterface{
  normalVideos:fetchedVideo[];
  favs:fetchedVideo[];
}
