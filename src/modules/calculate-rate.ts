export function calculateRate(
  propertyValue: number,
  minPropertyValue: number,
  currentRate: number[],
  previousRate: number[],
  index: number
): number {
  const [bandValue, rate] = currentRate
  const previousBandValue = index > 0 ? previousRate[0] : 0

  let value: number

  if (propertyValue > previousBandValue) {
    if (propertyValue < bandValue) {
      value = propertyValue - previousBandValue
    } else {
      value = bandValue - previousBandValue
    }
  } else {
    return 0
  }

  if (index === 0) value = bandValue - previousBandValue - minPropertyValue

  return value * rate
}
