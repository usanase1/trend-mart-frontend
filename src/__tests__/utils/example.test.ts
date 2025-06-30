// Example utility function to test
export const add = (a: number, b: number): number => {
  return a + b
}

export const multiply = (a: number, b: number): number => {
  return a * b
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Tests
describe('Utility Functions', () => {
  describe('add', () => {
    test('adds two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5)
    })

    test('adds negative numbers correctly', () => {
      expect(add(-1, -2)).toBe(-3)
    })

    test('adds zero correctly', () => {
      expect(add(5, 0)).toBe(5)
    })
  })

  describe('multiply', () => {
    test('multiplies two positive numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6)
    })

    test('multiplies by zero correctly', () => {
      expect(multiply(5, 0)).toBe(0)
    })

    test('multiplies negative numbers correctly', () => {
      expect(multiply(-2, 3)).toBe(-6)
    })
  })

  describe('validateEmail', () => {
    test('validates correct email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true)
      expect(validateEmail('user.name@domain.co.uk')).toBe(true)
      expect(validateEmail('user+tag@example.org')).toBe(true)
    })

    test('rejects invalid email addresses', () => {
      expect(validateEmail('invalid-email')).toBe(false)
      expect(validateEmail('test@')).toBe(false)
      expect(validateEmail('@example.com')).toBe(false)
      expect(validateEmail('')).toBe(false)
    })
  })
})
