import { Page } from 'playwright';
import { BasePage}  from './base/BasePage';
import { expect} from '@playwright/test';

export class InventoryPage extends BasePage{
private readonly productsTitle = this.page.getByText('Products', { exact: true});

constructor(page: Page)
{
    super(page)
}

async verifyInventoryPage(): Promise<void> {

    await expect(this.productsTitle).toBeVisible();
}

async selectProduct(productName: string): Promise<void> {

    const product = this.page
        .locator('[data-test="inventory-item"]')
        .filter({ hasText: productName });

    await product
        .locator('[data-test$="-title-link"]')
        .click();
}

async addProductToCart(productName: string): Promise<void> {
    const product = this.page
        .locator('[data-test="inventory-item"]')
        .filter({ hasText: productName });

    await product
        .locator('[data-test^="add-to-cart-"]')
        .click();
}

}