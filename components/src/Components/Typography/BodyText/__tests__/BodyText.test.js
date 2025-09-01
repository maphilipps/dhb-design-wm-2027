import { describe, test, expect, beforeEach } from 'vitest'
import { screen } from '@testing-library/dom'
import Component from '../body-text.html.twig'

describe('BodyText Component', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  test('renders basic body text correctly', () => {
    const container = document.createElement('div')
    const testArgs = {
      text: 'Test body text content',
      tag: 'p',
      size: 'base',
      weight: 'normal',
      color: 'primary',
    }
    container.innerHTML = Component(testArgs)

    const textElement = container.querySelector('.body-text')
    expect(textElement).toBeTruthy()
    expect(textElement.textContent).toBe('Test body text content')
    expect(textElement.tagName.toLowerCase()).toBe('p')
  })

  test('applies correct CSS classes for size variants', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      text: 'Test text',
      size: 'lead',
      weight: 'bold',
      color: 'yellow',
    })

    const textElement = container.querySelector('.body-text')
    expect(textElement).toBeTruthy()
    expect(textElement.className).toContain('body-text--lead')
    expect(textElement.className).toContain('body-text--bold')
    expect(textElement.className).toContain('body-text--yellow')
  })

  test('uses default values correctly', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      text: 'Minimal test text',
    })

    const textElement = container.querySelector('.body-text')
    expect(textElement.tagName.toLowerCase()).toBe('p')
    expect(textElement.className).toContain('body-text--base')
    expect(textElement.className).toContain('body-text--normal')
    expect(textElement.className).toContain('body-text--primary')
  })

  test('applies custom ID when provided', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      text: 'Test text',
      id: 'custom-text-id',
    })

    const textElement = container.querySelector('#custom-text-id')
    expect(textElement).toBeTruthy()
  })

  test('supports different HTML tags', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      text: 'This is a span element',
      tag: 'span',
    })

    const textElement = container.querySelector('span.body-text')
    expect(textElement).toBeTruthy()
    expect(textElement.textContent).toBe('This is a span element')
  })
})
