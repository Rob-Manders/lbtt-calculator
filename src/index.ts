import { ResidentialRates } from './interfaces/ResidentialRates'
import { fetchRates } from './modules/fetch-rates'
import { calculateRate } from './modules/calculate-rate'

export function calculateTax(propertyValue: number): number {
  const { rates, highestRate, minPropertyValue }: ResidentialRates = fetchRates()
  const topValue = rates[rates.length - 1][0]

  if (propertyValue <= minPropertyValue) return 0

  let tax: number = propertyValue > topValue ? (propertyValue - topValue) * highestRate : 0

  let index: number = 0

  while (index === 0 || (rates[index] && propertyValue > rates[index - 1][0])) {
    console.log(`Index: ${index}`)
    console.log(`Rate: ${rates[index]}`)
    tax += calculateRate(propertyValue, minPropertyValue, rates[index], rates[index - 1], index)
    index++
  }

  return tax
}
