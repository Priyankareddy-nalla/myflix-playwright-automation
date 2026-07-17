import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';


test('User can login and see homepage navigation', async ({ page }) => {
    const loginPage = new LoginPage(page);

    //open login page
    await loginPage.goto();

    //Login
    await loginPage.login('testing', 'test');


    const homePage = new HomePage(page);

    await homePage.verifyNavigation();

    await homePage.searchMovie("Avatar");

    await homePage.verifyMovieVisible("Avatar");


});

