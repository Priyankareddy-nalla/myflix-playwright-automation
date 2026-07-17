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

    }

}

