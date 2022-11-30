import { ResidentialRates } from '../interfaces/residential-rates'
import { calculateRate } from './calculate-rate'

export function calculateResidentialTax(residentialRates: ResidentialRates, propertyValue: number) {
  const { rates, highestRate, minPropertyValue } = residentialRates
  const highestValue = rates[rates.length - 1][0]

  if (propertyValue <= minPropertyValue) return 0

  let tax: number = propertyValue > highestValue ? (propertyValue - highestValue) * highestRate : 0

  let index: number = 0
  while (index === 0 || (rates[index] && propertyValue > rates[index - 1][0])) {
    tax += calculateRate(propertyValue, minPropertyValue, rates[index], rates[index - 1], index)
    index++
  }

  return tax
}
