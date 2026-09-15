import { Page } from 'playwright';
import { BasePage }  from '../pages/base/BasePage';
import { expect } from '@playwright/test';

export class CartPage extends BasePage{

    private readonly productName = this.page.locator('[data-test="inventory-item-name"]');
    private readonly checkoutButton = this.page.locator('[data-test="checkout"]')

constructor(page: Page)
{
    super(page);
}

async verifyProductInCart(productName: string): Promise<void> {

    await expect(this.productName.filter({ hasText : productName})).toBeVisible();
}
async clickCheckoutButton(): Promise<void> {

    await this.checkoutButton.click();
}

}
