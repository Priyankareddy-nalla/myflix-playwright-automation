import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { MovieDetailsPage } from '../pages/MovieDetailsPage';


test('User can view movie details', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const movieDetailsPage = new MovieDetailsPage(page);

    await loginPage.goto();
    await loginPage.login('testing', 'test');

    await homePage.searchMovie('Avatar');
    await homePage.openMovieDetails();

    await movieDetailsPage.verifyMovieTitle('Avatar:The Way of Wate');
    
    await page.pause();
    
    await movieDetailsPage.goBack();



});
