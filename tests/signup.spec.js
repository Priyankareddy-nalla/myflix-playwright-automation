import { expect, test } from '@playwright/test';
import { SignUpPage } from '../pages/SignupPage';

test('User registers with valid credentials', async ({ page }) => {

    const signup = new SignUpPage(page);

    await signup.goto();

    await signup.signUp();

});

test('Signup should not allow empty username', async ({ page }) => {

    const signup = new SignUpPage(page);

    await signup.goto();

    await signup.signUpButton.click();

    const isUsernameRequired = await signup.userName.evaluate(
        input => input.validity.valueMissing);

    expect(isUsernameRequired).toBe(true);

});