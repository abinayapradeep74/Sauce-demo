import { Page } from 'playwright';

export class BasePage {

protected readonly page: Page;
constructor(page: Page){

    this.page = page;
}
async navigateTo(url: string): Promise<void>
{
await this.page.goto(url);
}

}