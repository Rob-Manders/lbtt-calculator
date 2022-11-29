import { fetchRates } from './modules/fetch-rates'

export function calculateTax(propertyValue: number): number {
  const { rates, highestRate, minPropertyValue } = fetchRates()

  if (propertyValue <= minPropertyValue) return 0

  return null
}
