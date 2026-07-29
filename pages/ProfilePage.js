import { expect } from "@playwright/test";


export class ProfilePage {

    constructor(page) {
        this.page = page;

        this.profileHeading = page.getByText('My Profile', { exact: true });
    }

    async verifyProfilePage() {
        await expect(this.profileHeading).toBeVisible();
    }


};