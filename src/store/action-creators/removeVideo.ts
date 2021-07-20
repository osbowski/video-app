export const removeVideo = (id:string) =>{
            return {
                type:'DELETE_VIDEO',
                payload:id
            }
}