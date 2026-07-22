import { expect } from '@playwright/test';

export class HomePage {

    constructor(page) {
        this.page = page;

        this.homeLink = page.getByRole('link', { name: /Home/ });

        this.profileLink = page.getByRole('link', { name: /Profile/ });

        this.logoutButton = page.getByRole('button', { name: /Logout/ });

        this.searchInput = page.getByPlaceholder('Search');

        this.clearButton = page.getByRole('button', { name: 'Clear' });

        this.genreDropdown = page.getByRole('button', { name: /Genre/ });

        this.genreButton = page.getByRole('button', { name: 'Genre' });

        this.clearGenreButton = page.locator('svg').nth(2);


    };

    //Verify Homepage navigation
    async verifyNavigation() {
        await expect(this.homeLink).toBeVisible();
        await expect(this.profileLink).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
    };

    //search Movie
    async searchMovie(movieName) {
        await this.searchInput.fill(movieName);
    };

    //verify Searched movie
    async verifyMovieVisible(movieTitle) {
        await expect(
            this.page.getByText(movieTitle, { exact: true })
        ).toBeVisible();
    };



    //search with genre
    async selectGenre(genre) {
        await this.genreButton.click();
        await this.page.getByRole('button', { name: genre }).click();
    }


    async openMovieDetails(){
        await this.page.getByRole('button',{name: 'See more'}).first().click();

    }

    // async clearSearch(){
    //     await this.clearButton.click();
    // };


    // async verifySearchCleared(){
    //     await expect(this.searchInput).toHaveValue('');
    // };


}

