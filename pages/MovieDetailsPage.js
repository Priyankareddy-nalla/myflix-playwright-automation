import { expect } from "@playwright/test";


export class MovieDetailsPage {

    constructor(page) {
        this.page = page;

        this.backButton = page.getByRole('button', { name: 'Back' });

        this.favoriteButton = page.getByRole('button', { name: /Favoritelist/ });
    }

    async verifyMovieTitle(movieTitle) {
        await expect(this.page.getByText(movieTitle)).toBeVisible();
    }


    // Verify that the selected movie title is displayed
    async verifyMovieDetails() {
        await expect(this.page.getByText('Director')).toBeVisible();
        await expect(this.page.getByText('Genre:')).toBeVisible();
        await expect(this.page.getByText('Description:')).toBeVisible();

    }


    async clickFavoriteButton() {
        await this.favoriteButton.click();
    }
    // Click the Back button to return to the Home page
    async goBack() {
        await this.backButton.click();
    }

}