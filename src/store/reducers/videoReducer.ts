import { fetchedVideo } from "../../types";


const VideoReducer= (state:fetchedVideo[],action:any)=>{
    console.log(action)
    switch(action.type){
        case "ADD_VIDEO":
            return [
                ...state,
                action.payload
            ]
        case "DELETE_VIDEO":
            return state;

        case "ADD_VIDEO_TO_FAVORITES":
            return state;   
        default:
            return state;
    }
}


export default VideoReducer;