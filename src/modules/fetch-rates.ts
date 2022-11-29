interface Rates {
  rates: number[][]
  highestRate: number
  minPropertyValue: number
}

export function fetchRates(): Rates {
  return {
    rates: [
      [145000, 0],
      [250000, 2],
      [325000, 5],
      [750000, 10]
    ],
    highestRate: 12,
    minPropertyValue: 40000
  }
}
