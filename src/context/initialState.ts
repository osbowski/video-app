export const initialState = {
  normalVideos: [
    {
      id: "123",
      service: "youtube",
      favorite:false,
      data: {
        link: "https://www.youtube.com/watch?v=Ndpryp2OlUQ&ab_channel=YelawolfVEVO",
        title: "Yelawolf - Till It’s Gone (Official Music Video)",
        likes: 100000,
        views: 25039209,
        date: 5432432,
        thumbnail:"https://i.ytimg.com/vi/SaRRwOz4uEo/maxresdefault.jpg"
      },
    },
    {
      id: "456",
      service: "youtube",
      favorite:false,
      data: {
        link: "https://www.youtube.com/watch?v=fibYknUCIU4&ab_channel=NFVEVO",
        title: "NF - CLOUDS",
        likes: 123000,
        views: 123339209,
        date: 2142121,
        thumbnail:"https://i.ytimg.com/vi/SaRRwOz4uEo/maxresdefault.jpg"
      },
    },
  ],
  favs:[
    {
      id: "789",
      service: "vimeo",
      favorite:true,
      data: {
        link: "https://vimeo.com/191569351",
        title: "Game",
        likes: 12300000,
        views: 3455039209,
        date: 54645654,
        thumbnail:"https://i.ytimg.com/vi/SaRRwOz4uEo/maxresdefault.jpg"
      },
    },
  ],
};
