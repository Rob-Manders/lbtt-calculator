import { calculateResidentialTax } from './modules/calculate-residential-tax'
import { fetchRates } from './modules/fetch-rates'

export function calculateTax(propertyValue: number): number {
  const residentialRates = fetchRates()

  return calculateResidentialTax(residentialRates, propertyValue)
}
