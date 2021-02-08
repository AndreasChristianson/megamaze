import { distance, findLineIntersection } from './cartesian'
import {
  getAreaBorders,
  gridLineToMiddlePixelLine,
  gridLineToPixelLine,
  pixelsToGridPosition,
} from './svg-math'
export const isPositionInArea = ({ x, y }, { xMax, xMin, yMax, yMin }) =>
  x >= xMin && x <= xMax && y >= yMin && y <= yMax

export const isPositionInAnyArea = (position, areas) =>
  areas.some((area) => isPositionInArea(position, area))

export const addPositions = (position1, position2) => ({
  x: position1.x + position2.x,
  y: position1.y + position2.y,
})

export const constrainPosition = ({ x, y }, { xMax, xMin, yMax, yMin }) => ({
  x: Math.min(Math.max(x, xMin), xMax),
  y: Math.min(Math.max(y, yMin), yMax),
})

export const findLineAreaCollisions = (line, area) => {
  const linePixels = gridLineToMiddlePixelLine(line)
  const borders = getAreaBorders(area)

  return borders
    .map(gridLineToPixelLine)
    .map((border) => findLineIntersection(linePixels, border))
    .filter((collision) => collision !== null)
}

export const detectGridEndPoint = (line, obstacles) => {
  const linePixels = gridLineToMiddlePixelLine(line)

  const collisions = obstacles
    .reduce(
      (list, obstacle) => [...list, ...findLineAreaCollisions(line, obstacle)],
      []
    )
    .sort(
      (left, right) =>
        distance(left, linePixels.from) - distance(right, linePixels.from)
    )
  if (collisions.length) {
    return pixelsToGridPosition(collisions[0])
  }
  return line.to
}
