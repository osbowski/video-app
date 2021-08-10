import { fetchedVideo } from "../types"

export const checkForDuplicateVideos = (videoToAdd:fetchedVideo, allVideos:fetchedVideo[])=>{
    return allVideos.some((video)=>video.id===videoToAdd.id)
}
