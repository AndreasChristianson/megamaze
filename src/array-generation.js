export const makeRange = (start, end) =>
  Array.from(Array(end-start).keys())
    .map(number => number + start)
