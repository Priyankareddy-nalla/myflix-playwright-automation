import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProfilePage } from '../pages/ProfilePage';

test('verify the ProfilePage', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const profilePage = new ProfilePage(page);
    const homePage = new HomePage(page);
    await loginPage.goto();
    await loginPage.login('priyanka7', 'password6');

    await homePage.openProfilePage();

    await profilePage.verifyProfilePage();

    await profilePage.updateProfile('priyanka8', 'password7', 'priyanka@priyanka.com');
    

});