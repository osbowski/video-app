import { fetchedVideo } from "../types";

export const addToStorage = (videos:fetchedVideo[])=>{
        localStorage.setItem('videos',JSON.stringify(videos))
    
}