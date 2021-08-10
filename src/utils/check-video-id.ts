import getVideoId from "get-video-id";
import isURL from "validator/lib/isURL";
import { identifyVideoById } from "../utils/identify-video-by-id";

export const checkVideoID = async (value: string) => {
  const checkIfURL = isURL(value);
  if (checkIfURL) {
    const { id, service } = getVideoId(value);
    return { id: id!, service: service };
  } else {
    const data = await identifyVideoById(value);
    if (data) {
      const { id, service } = data;
      return { id: id!, service };
    } else {
      return false;
    }
  }
};
