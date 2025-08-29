import { waitForPageReady } from '@storybook/test-runner'
import { injectAxe, checkA11y } from 'axe-playwright'
import { expect } from '@storybook/test'

const config = {
  async preVisit(page) {
    await injectAxe(page)
  },
  async postVisit(page) {
    await waitForPageReady(page)

    // Automated snapshot testing for each story.
    const elementHandler = await page.$('#storybook-root')
    const innerHTML = await elementHandler.innerHTML()

    expect(innerHTML).toMatchSnapshot()

    // Automated accessibility testing for each story.
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    })
  },
}

export default config
