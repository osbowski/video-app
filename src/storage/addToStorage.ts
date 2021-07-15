import { fetchedVideo } from "../types";

export const addToStorage = (videoData:fetchedVideo)=>{
    if(videoData.id in localStorage){
        console.log('Video alredy on the list')
    }else{
        localStorage.setItem(videoData.id,JSON.stringify(videoData))
    }
    
}