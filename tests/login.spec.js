import { test, expect } from '@playwright/test';

test('testing my own project', async( {page}) => {
await page.goto('http://localhost:1234');
await expect(page).toHaveTitle(/MyFlix/);

});


test('testing page having the login button',  async( { page}) => {
    await page.goto('http://localhost:1234');
    await expect(page.getByRole('button', {name: 'Login'})).toBeVisible();
});





