
import { expect } from '@playwright/test';

export class SignUpPage {

    constructor(page) {
        this.page = page;

        this.userName = page.locator('#signupUsername');
        this.passWord = page.locator('#signupPassword');
        this.email = page.locator('#SigupEmail');
        this.dateOfBirth = page.locator('#SigupBirthday');
        this.signUpButton = page.getByRole('button', { name: 'Signup' });
    }

    async goto() {
        await this.page.goto('http://localhost:1234/signup');
    }

    async signUp() {
        await this.userName.fill('Priyanka6');
        await this.passWord.fill('pwd@123');
        await this.email.fill('priyanka4@example.com');
        await this.dateOfBirth.fill('2020-02-10');

        // Listen for the JavaScript popup
        const dialogPromise = this.page.waitForEvent('dialog');

        await this.signUpButton.click();

        const dialog = await dialogPromise;

        console.log('Popup message:', dialog.message());

        expect(dialog.message()).toBe('Signup successful');

        await dialog.accept();
    }
}
