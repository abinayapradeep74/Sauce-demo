import { Locator, Page } from 'playwright';
import { expect } from '@playwright/test';

export class Header {

    private readonly page: Page;

    private readonly shoppingCartLink: Locator;
    private readonly shoppingCartBadge: Locator;

    constructor(page: Page) {
        this.page = page;

        this.shoppingCartLink =
            this.page.locator('[data-test="shopping-cart-link"]');

        this.shoppingCartBadge =
            this.page.locator('[data-test="shopping-cart-badge"]');
    }

    async clickShoppingCart(): Promise<void> {
        await this.shoppingCartLink.click();
    }

    async verifyCartCount(expectedCount: string): Promise<void> {
        await expect(this.shoppingCartBadge).toHaveText(expectedCount);
    }
}