import { beforeEach, afterEach } from 'vitest'
import { cleanup } from '@testing-library/dom'
import '@testing-library/jest-dom'

// Clean up after each test
afterEach(() => {
  cleanup()
})

// Setup global test environment
beforeEach(() => {
  // Reset the DOM
  document.body.innerHTML = ''
  document.head.innerHTML = '<meta charset="UTF-8">'
})