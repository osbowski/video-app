export interface Video{
    id:string;
    link:string;
    title:string;
    likes:number,
    views:number,
    date:string;
}


export interface snipet{
    publishedAt:string;
    title:string;
}

export interface statistics{
    likeCount:string;
    viewCount:string;
}
export interface YTmovieData{
    id:string;
    snippet:snipet;
    statistics:statistics;
}
