import { describe, test, expect, beforeEach } from 'vitest'
import { screen } from '@testing-library/dom'
import Component from '../heading.html.twig'

describe('Heading Component', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  test('renders basic heading correctly', () => {
    const container = document.createElement('div')
    const testArgs = {
      text: 'Test heading content',
      tag: 'h1',
      level: '1',
      color: 'primary',
    }
    container.innerHTML = Component(testArgs)

    const headingElement = container.querySelector('.heading')
    expect(headingElement).toBeTruthy()
    expect(headingElement.textContent).toBe('Test heading content')
    expect(headingElement.tagName.toLowerCase()).toBe('h1')
  })

  test('applies correct CSS classes for level variants', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      text: 'Test heading',
      level: 'display',
      color: 'gradient',
    })

    const headingElement = container.querySelector('.heading')
    expect(headingElement).toBeTruthy()
    expect(headingElement.className).toContain('heading--display')
    expect(headingElement.className).toContain('heading--gradient')
  })

  test('uses default values correctly', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      text: 'Minimal test heading',
    })

    const headingElement = container.querySelector('.heading')
    expect(headingElement.tagName.toLowerCase()).toBe('h1')
    expect(headingElement.className).toContain('heading--1')
    expect(headingElement.className).toContain('heading--primary')
  })

  test('applies custom ID when provided', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      text: 'Test heading',
      id: 'custom-heading-id',
    })

    const headingElement = container.querySelector('#custom-heading-id')
    expect(headingElement).toBeTruthy()
  })

  test('supports different HTML tags', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      text: 'This is a div element',
      tag: 'div',
    })

    const headingElement = container.querySelector('div.heading')
    expect(headingElement).toBeTruthy()
    expect(headingElement.textContent).toBe('This is a div element')
  })

  test('supports brand level styling', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      text: '27WM27',
      level: 'brand',
      color: 'gradient-brand',
    })

    const headingElement = container.querySelector('.heading')
    expect(headingElement.className).toContain('heading--brand')
    expect(headingElement.className).toContain('heading--gradient-brand')
  })

  test('supports section level styling', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      text: 'NEWS',
      tag: 'h2',
      level: 'section',
      color: 'yellow',
    })

    const headingElement = container.querySelector('h2.heading')
    expect(headingElement).toBeTruthy()
    expect(headingElement.className).toContain('heading--section')
    expect(headingElement.className).toContain('heading--yellow')
    expect(headingElement.textContent).toBe('NEWS')
  })

  test('supports display-sm level styling', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      text: 'Get Your Tickets Now!',
      tag: 'h2',
      level: 'display-sm',
      color: 'white',
    })

    const headingElement = container.querySelector('h2.heading')
    expect(headingElement).toBeTruthy()
    expect(headingElement.className).toContain('heading--display-sm')
    expect(headingElement.className).toContain('heading--white')
  })

  test('supports all heading levels', () => {
    const levels = ['1', '2', '3', '4', '5', '6']
    const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

    levels.forEach((level, index) => {
      const container = document.createElement('div')
      container.innerHTML = Component({
        text: `Level ${level} heading`,
        tag: tags[index],
        level: level,
      })

      const headingElement = container.querySelector(`.heading`)
      expect(headingElement.tagName.toLowerCase()).toBe(tags[index])
      expect(headingElement.className).toContain(`heading--${level}`)
    })
  })

  test('supports color variants', () => {
    const colors = [
      'primary',
      'navy',
      'white',
      'yellow',
      'red',
      'gradient',
      'gradient-brand',
    ]

    colors.forEach(color => {
      const container = document.createElement('div')
      container.innerHTML = Component({
        text: `${color} heading`,
        color: color,
      })

      const headingElement = container.querySelector('.heading')
      expect(headingElement.className).toContain(`heading--${color}`)
    })
  })
})
