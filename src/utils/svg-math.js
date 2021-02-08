import { rows, columns, pixelHeight, pixelWidth } from '../constants/grid'
import { addPositions } from './grid-math'
import { generateGaussian } from './statistics'

const half = { x: 0.5, y: 0.5 }
const innerBorderNudge = 0.01
const randomNudge = () => ({
  x: generateGaussian(0.5, 0.2),
  y: generateGaussian(0.5, 0.2),
})

export const gridPositionToPixels = (position) => ({
  x: (position.x * pixelHeight) / rows,
  y: (position.y * pixelWidth) / columns,
})

export const gridLineToPixelLine = (line) => ({
  from: gridPositionToPixels(line.from),
  to: gridPositionToPixels(line.to),
})

export const gridPositionToMiddlePixels = (position) =>
  gridPositionToPixels(addPositions(position, half))

export const gridPositionPixelsWithJitter = (position) =>
  gridPositionToPixels(addPositions(position, randomNudge()))

export const pixelsToGridPosition = (pixels) => ({
  x: Math.floor(pixels.x / (pixelHeight / rows)),
  y: Math.floor(pixels.y / (pixelWidth / columns)),
})

export const gridLineToMiddlePixelLine = (line) => ({
  from: gridPositionToMiddlePixels(line.from),
  to: gridPositionToMiddlePixels(line.to),
})

export const getAreaBorders = ({ xMin, xMax, yMin, yMax }) => [
  {
    from: {
      x: xMin + innerBorderNudge,
      y: yMin + innerBorderNudge,
    },
    to: {
      x: xMax + 1 - innerBorderNudge,
      y: yMin + innerBorderNudge,
    },
  },
  {
    from: {
      x: xMin + innerBorderNudge,
      y: yMin + innerBorderNudge,
    },
    to: {
      x: xMin + innerBorderNudge,
      y: yMax + 1 - innerBorderNudge,
    },
  },
  {
    from: {
      x: xMax + 1 - innerBorderNudge,
      y: yMin + innerBorderNudge,
    },
    to: {
      x: xMax + 1 - innerBorderNudge,
      y: yMax + 1 - innerBorderNudge,
    },
  },
  {
    from: {
      x: xMin + innerBorderNudge,
      y: yMax + 1 - innerBorderNudge,
    },
    to: {
      x: xMax + 1 - innerBorderNudge,
      y: yMax + 1 - innerBorderNudge,
    },
  },
]
