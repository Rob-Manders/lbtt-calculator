import { fetchRates } from './modules/fetch-rates'
import { calculateRate } from './modules/calculate-rate'

export function calculateTax(propertyValue: number): number {
  const { rates, highestRate, minPropertyValue } = fetchRates()
  const topValue = rates[rates.length - 1][0]

  if (propertyValue <= minPropertyValue) return 0

  let tax: number = 0

  rates.forEach((rate, index) => {
    tax += calculateRate(
      propertyValue,
      minPropertyValue,
      rate,
      rates[index - 1],
      index
    )
  })

  if (propertyValue > topValue) {
    tax = tax + (propertyValue - topValue) * highestRate
  }

  return tax
}
