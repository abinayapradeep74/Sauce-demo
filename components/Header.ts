import { Locator, Page } from 'playwright';
import { expect } from '@playwright/test';

export class Header {

    private readonly page: Page;

    private readonly shoppingCartLink: Locator;
    private readonly shoppingCartBadge: Locator;
    private readonly menuButton: Locator;
    private readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;

        this.shoppingCartLink =
            this.page.locator('[data-test="shopping-cart-link"]');

        this.shoppingCartBadge =
            this.page.locator('[data-test="shopping-cart-badge"]');

            this.menuButton = this.page.getByRole('button', {name: 'Open Menu'});
            this.logoutLink = this.page.locator('[data-test="logout-sidebar-link"]');

    }

    async clickShoppingCart(): Promise<void> {
        await this.shoppingCartLink.click();
    }

    async clickOpenMenu(): Promise<void> {
        await this.menuButton.click();
    }
async clickLogout(): Promise<void> {
    await this.logoutLink.click();
}

    async verifyCartCount(expectedCount: string): Promise<void> {
        await expect(this.shoppingCartBadge).toHaveText(expectedCount);
    }
}