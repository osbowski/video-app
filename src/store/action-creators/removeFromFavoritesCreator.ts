export const removeFromFavorites = (id: string) => {
  return {
    type: "REMOVE_VIDEO_FROM_FAVORITE",
    payload: id,
  };
};