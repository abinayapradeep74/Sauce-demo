import { Page } from 'playwright';
import { BasePage } from './base/BasePage';

export class LoginPage extends BasePage {

    private readonly usernameInput = this.page.getByPlaceholder('Username');

    private readonly passwordInput = this.page.getByPlaceholder('Password');

    private readonly LoginButton = this.page.getByRole('button', { name: 'Login'});

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

       await this.LoginButton.click();


  }



}