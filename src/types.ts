// export interface Video{
//     id:string;
//     link:string;
//     title:string;
//     likes:number,
//     views:number,
//     date:string;
// }


// export interface snipet{
//     publishedAt:string;
//     title:string;
// }

// export interface statistics{
//     likeCount:string;
//     viewCount:string;
// }
// export interface YTmovieData{
//     id:string;
//     snippet:snipet;
//     statistics:statistics;
// }


export interface videoData{
    title:string;
    views:number;
    likes:number;
    publishedAt:string;
    link:string;
}
export interface fetchedVideo{
    id:string,
    service:string,
    data:videoData,
}


export interface initialStateInterface{
    videos:fetchedVideo[]
}
