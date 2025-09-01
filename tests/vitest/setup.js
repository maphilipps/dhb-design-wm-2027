import { beforeEach, afterEach } from 'vitest'
import '@testing-library/jest-dom'

// Clean up after each test
afterEach(() => {
  // Clear DOM manually since we're not using React Testing Library
  document.body.innerHTML = ''
  document.head.innerHTML = '<meta charset="UTF-8">'
})

// Setup global test environment
beforeEach(() => {
  // Reset the DOM
  document.body.innerHTML = ''
  document.head.innerHTML = '<meta charset="UTF-8">'
})
