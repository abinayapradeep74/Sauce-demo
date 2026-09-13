import { Page} from 'playwright';
import { BasePage } from './base/BasePage';
import { expect} from '@playwright/test';

export class ProductDetailsPage extends BasePage{

    private readonly productName = this.page.locator('.inventory_details_name');
    private readonly addToCartButton =
    this.page.locator('[data-test="add-to-cart"]');

    constructor(page: Page)
    {
        super(page);
    }


    async verifyProductDetails(): Promise<void> {

        await expect(this.productName).toBeVisible();
    }

    async addToCart(): Promise<void> {
        await this.addToCartButton.click();

    } }
