import { Page } from 'playwright';
import { BasePage }  from '../pages/base/BasePage';
import { expect } from '@playwright/test';

export class CartPage extends BasePage{

    private readonly productName = this.page.locator('[data-test="inventory-item-name"]');

constructor(page: Page)
{
    super(page);
}

async verifyProductInCart(productName: string): Promise<void> {

    await expect(this.productName.filter({ hasText : productName})).toBeVisible();
}


}
