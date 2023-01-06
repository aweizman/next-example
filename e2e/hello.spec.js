const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.BASE_URL)
})

test.describe('Redirect', () => {
  test('should correctly redirect from /hello to /hello-nextjs', async ({ page }) => {
    const redirectLink = page.getByTestId('redirectLink')
    await redirectLink.click()
    await expect(page).toHaveURL(/.*hello-nextjs/)
  })
})