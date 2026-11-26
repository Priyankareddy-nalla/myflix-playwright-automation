import { expect } from "@playwright/test";


export class ProfilePage {

    constructor(page) {
        this.page = page;

        this.updateUsername = page.locator('#updateUsername');
        this.updatePassword = page.locator('#updatePassword');
        this.updateEmail = page.locator('#updateEmail');
        this.updateButton = page.getByRole('button', { name: 'Update' });

        this.profileHeading = page.getByText('My Profile', { exact: true });
    }

    async verifyProfilePage() {
        await expect(this.profileHeading).toBeVisible();
    }

    async updateProfile(newUsername, newPassword, newEmail) {
        await this.updateUsername.fill(newUsername);
        await this.updatePassword.fill(newPassword);
        await this.updateEmail.fill(newEmail);
        // Wait for popup and click OK


        this.page.once('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });
        await this.updateButton.click();

        await expect(this.page.getByText(`Username:${newUsername}`)).toBeVisible();

    }



};