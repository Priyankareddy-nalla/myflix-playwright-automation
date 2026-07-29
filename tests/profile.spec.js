import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProfilePage } from '../pages/ProfilePage';

test('verify the ProfilePage', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const profilePage = new ProfilePage(page);   
     const homePage = new HomePage(page);
    await loginPage.goto();
    await loginPage.login('testing', 'test')

    await homePage.openProfilePage();

    await profilePage.verifyProfilePage();



})