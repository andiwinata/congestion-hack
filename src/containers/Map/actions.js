export const MAP_URL_SET = 'MAP_URL_SET'
export const setMapUrl = (url) => ({
  type: MAP_URL_SET,
  payload: {
    url,
  }
})
