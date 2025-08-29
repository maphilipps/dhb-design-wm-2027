import { describe, test, expect, beforeEach } from 'vitest'
import { screen } from '@testing-library/dom'
import Component from '../brand-logo.html.twig'

describe('BrandLogo Component', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  test('renders basic brand logo correctly', () => {
    const container = document.createElement('div')
    const testArgs = {
      brand_text: '27WM27',
      variant: 'md',
    }
    container.innerHTML = Component(testArgs)

    const logoElement = container.querySelector('.brand-logo')
    const textElement = container.querySelector('.brand-logo__text')

    expect(logoElement).toBeTruthy()
    expect(textElement).toBeTruthy()
    expect(textElement.textContent).toBe('27WM27')
  })

  test('applies correct CSS classes for size variants', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      brand_text: '27WM27',
      variant: 'lg',
    })

    const logoElement = container.querySelector('.brand-logo')
    expect(logoElement).toBeTruthy()
    expect(logoElement.className).toContain('brand-logo--lg')
  })

  test('uses default values correctly', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({})

    const logoElement = container.querySelector('.brand-logo')
    const textElement = container.querySelector('.brand-logo__text')

    expect(logoElement.className).toContain('brand-logo--default')
    expect(textElement.textContent).toBe('27WM27')
  })

  test('supports custom brand text', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      brand_text: 'WM27',
      variant: 'md',
    })

    const textElement = container.querySelector('.brand-logo__text')
    expect(textElement.textContent).toBe('WM27')
  })

  test('applies animation attribute when enabled', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      brand_text: '27WM27',
      animate: true,
    })

    const logoElement = container.querySelector('.brand-logo')
    expect(logoElement.getAttribute('data-animate')).toBe('brand-pulse')
  })

  test('does not add animation attribute when disabled', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      brand_text: '27WM27',
      animate: false,
    })

    const logoElement = container.querySelector('.brand-logo')
    expect(logoElement.getAttribute('data-animate')).toBeNull()
  })

  test('supports all size variants', () => {
    const variants = ['xs', 'sm', 'md', 'lg', 'xl']

    variants.forEach(variant => {
      const container = document.createElement('div')
      container.innerHTML = Component({
        brand_text: '27WM27',
        variant: variant,
      })

      const logoElement = container.querySelector('.brand-logo')
      expect(logoElement.className).toContain(`brand-logo--${variant}`)
    })
  })

  test('supports additional CSS classes', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      brand_text: '27WM27',
      classes: 'brand-logo--white custom-class',
    })

    const logoElement = container.querySelector('.brand-logo')
    expect(logoElement.className).toContain('brand-logo--white')
    expect(logoElement.className).toContain('custom-class')
  })

  test('maintains structure with different configurations', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      brand_text: 'CUSTOM',
      variant: 'xl',
      animate: true,
      classes: 'test-class',
    })

    const logoElement = container.querySelector('.brand-logo')
    const textElement = container.querySelector('.brand-logo__text')

    expect(logoElement).toBeTruthy()
    expect(textElement).toBeTruthy()
    expect(logoElement.className).toContain('brand-logo--xl')
    expect(logoElement.className).toContain('test-class')
    expect(logoElement.getAttribute('data-animate')).toBe('brand-pulse')
    expect(textElement.textContent).toBe('CUSTOM')
  })

  test('renders minimal configuration correctly', () => {
    const container = document.createElement('div')
    container.innerHTML = Component({
      brand_text: 'TEST',
    })

    const logoElement = container.querySelector('.brand-logo')
    const textElement = container.querySelector('.brand-logo__text')

    expect(logoElement).toBeTruthy()
    expect(textElement).toBeTruthy()
    expect(textElement.textContent).toBe('TEST')
    expect(logoElement.className).toContain('brand-logo--default')
    expect(logoElement.getAttribute('data-animate')).toBeNull()
  })
})
