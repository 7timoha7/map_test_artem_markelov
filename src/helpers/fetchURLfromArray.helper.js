export const fetchURLfromArray = (arr) => {
  return arr.map(item => [item.geotag[1], item.geotag[0]]).join(';');
}