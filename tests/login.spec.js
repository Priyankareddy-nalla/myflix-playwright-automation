import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test('User can login and see homepage navigation', async ({ page }) => {
    const loginPage = new LoginPage(page);

    //open login page
    await loginPage.goto();

    //Login
    await loginPage.login('testing', 'test');

    //verify text
    await page.getByRole('link', { name: 'Home' }).highlight();

    // Verify homepage navigation after login
    await expect(
        page.getByRole('link', { name: /Home/ })
    ).toBeVisible();

    await expect(
        page.getByRole('link', { name: /Profile/ })
    ).toBeVisible();

    await expect(
        page.getByRole('button', { name: /Logout/ })
    ).toBeVisible();

});




