import { Page } from 'playwright';
import { BasePage } from './base/BasePage';
import { expect } from 'playwright/test';
import { Logger } from '../utils/Logger';

export class LoginPage extends BasePage {

    private readonly usernameInput = this.page.getByPlaceholder('Username');

    private readonly passwordInput = this.page.getByPlaceholder('Password');

    private readonly LoginButton = this.page.getByRole('button', { name: 'Login'});
private readonly loginError =
    this.page.getByRole('alert');

    constructor(page: Page) {
        super(page);
    }

    async enterUsername(username: string): Promise<void> {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }
  async clickLogin(): Promise<void> {

       Logger.info('Clicking login button');

       await this.LoginButton.click();
  }

async verifyLoginPage(): Promise<void> {
    await expect(this.usernameInput).toBeVisible();

}

async verifyLoginError(): Promise<void> {
     Logger.info('Verifying invalid login error message');
    await expect(this.loginError).toHaveText(
        'Epic sadface: Username and password do not match any user in this service');
}

}