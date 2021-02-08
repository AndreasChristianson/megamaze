export const findLineIntersection = (line1, line2) => {
  const {
    from: { x: x1, y: y1 },
    to: { x: x2, y: y2 },
  } = line1
  const {
    from: { x: x3, y: y3 },
    to: { x: x4, y: y4 },
  } = line2
  const uA =
    ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) /
    ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))

  const uB =
    ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) /
    ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))

  if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
    const x = x1 + uA * (x2 - x1)
    const y = y1 + uA * (y2 - y1)
    return {
      x,
      y,
    }
  }
  return null
}

export const distance = (point1, point2) =>
  Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2)
