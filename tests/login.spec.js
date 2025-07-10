import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObject/Loginpage';
import logindata from '../testData/logindata.json';

test.describe('OrangeHRM Login POM', () => {
    test('verify_login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigateTo();
        await loginPage.login(logindata.username, logindata.password);
       
    });
});
