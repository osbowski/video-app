export interface videoData{
    title:string;
    views:number;
    likes:number;
    publishedAt:string;
    link:string;
    thumbnail:string;
}
export interface fetchedVideo{
    id:string;
    service:string;
    favorite:boolean;
    data:videoData;
}
