let spare = null

export const generateGaussian = (
  mean = 0.5,
  stdDev = 1,
  okToUseSpare = true
) => {
  if (okToUseSpare && spare) {
    const ret = spare * stdDev + mean
    spare = null
    return ret
  } else {
    let u, v, s
    do {
      u = Math.random() * 2 - 1
      v = Math.random() * 2 - 1
      s = u ** 2 + v ** 2
    } while (s >= 1 || s == 0)
    s = Math.sqrt((-2.0 * Math.log(s)) / s)
    spare = v * s
    return mean + stdDev * u * s
  }
}
