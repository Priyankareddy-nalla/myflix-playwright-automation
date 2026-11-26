import { test } from '@playwright/test';
import { SignUpPage } from '../pages/SignupPage';

test('User registers with valid credentials', async ({ page }) => {

    const signup = new SignUpPage(page);

    await signup.goto();

    await signup.signUp();

});