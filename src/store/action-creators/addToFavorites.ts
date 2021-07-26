export const addToFavorites = (id: string) => {
  return {
    type: "ADD_VIDEO_TO_FAVORITES",
    payload: id,
  };
};
