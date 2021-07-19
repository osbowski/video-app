import { fetchedVideo } from "../../types";

export const addVideo = (video:fetchedVideo) =>{
    console.log('addVideo ACTION:',video)
    return {
        type:'ADD_VIDEOS',
        video
    }
}
