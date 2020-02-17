export const getTotalHeightFeet = totalHeight =>
  Math.floor(totalHeight / 30.48);
export const getTotalHeightRemainder = totalHeight =>
  Math.ceil(totalHeight % 30.48);
