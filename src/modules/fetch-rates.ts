interface Rates {
  rates: number[][]
  highestRate: number
  minPropertyValue: number
}

export function fetchRates(): Rates {
  return {
    rates: [
      [145000, 0],
      [250000, 0.02],
      [325000, 0.05],
      [750000, 0.1]
    ],
    highestRate: 0.12,
    minPropertyValue: 40000
  }
}
