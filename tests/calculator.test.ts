import { describe, expect, test } from '@jest/globals'
import { calculateTax } from '../src/index'

describe('LBTT Calculator', () => {
  test('Property value: 20,000 / 0', () => {
    expect(calculateTax(20000)).toBe(0)
  })

  test('Property value: 45,000 / 0', () => {
    expect(calculateTax(45000)).toBe(0)
  })

  test('Property value: 175,000 / 600', () => {
    expect(calculateTax(175000)).toBe(600)
  })

  test('Property value: 225,000 / 1,600', () => {
    expect(calculateTax(225000)).toBe(1600)
  })

  test('Property value: 350,000 / 8,350', () => {
    expect(calculateTax(350000)).toBe(8350)
  })

  test('Property value: 685,200 / 41,870', () => {
    expect(calculateTax(685200)).toBe(41870)
  })

  test('Property value: 800,000 / 54,350', () => {
    expect(calculateTax(800000)).toBe(54350)
  })

  test('Property value: 1,250,000 / 108,350', () => {
    expect(calculateTax(1250000)).toBe(108350)
  })
})
