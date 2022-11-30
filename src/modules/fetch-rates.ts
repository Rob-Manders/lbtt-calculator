import { ResidentialRates } from '../interfaces/residential-rates'

export function fetchRates(): ResidentialRates {
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
