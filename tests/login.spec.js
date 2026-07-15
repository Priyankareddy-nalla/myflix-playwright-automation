import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { homedir } from 'os';


test('User can login and see homepage navigation', async ({ page }) => {
    const loginPage = new LoginPage(page);

    //open login page
    await loginPage.goto();

    //Login
    await loginPage.login('testing', 'test');


    const homepage = new HomePage(page);

    await homepage.verifyNavigation();

    await homepage.searchMovie("Avatar");



});

