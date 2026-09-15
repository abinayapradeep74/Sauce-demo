import { Page } from "playwright";
import { BasePage } from "./base/BasePage";
import { expect } from "playwright/test";

export class CheckoutPage extends BasePage{

    private readonly FirstNameInput = this.page.getByPlaceholder('First Name');
    private readonly LastNameInput = this.page.locator('[data-test="lastName"]');
    private readonly PostalCodeInput = this.page.locator('[data-test="postalCode"]');
    private readonly ContinueButton = this.page.locator('[data-test="continue"]');
    private readonly checkoutOverviewTitle = this.page.locator('[data-test="title"]');
    private readonly finishButton = this.page.locator('[data-test="finish"]');
    private readonly orderConfirmation =
    this.page.locator('[data-test="complete-header"]');

constructor(page: Page)
{
    super(page);
}

async enterFirstName(firstName: string): Promise<void> {

    await this.FirstNameInput.fill(firstName);
}
async enterLastName(lastName: string): Promise<void> {

    await this.LastNameInput.fill(lastName);
}

async enterPostalCode(postalCode: string): Promise<void> {

    await this.PostalCodeInput.fill(postalCode);
}
async clickContinueButton(): Promise<void> {
    await this.ContinueButton.click();
}

async verifyCheckoutOverview(): Promise<void> {

    await expect(this.checkoutOverviewTitle).toHaveText('Checkout: Overview');
}
async clickFinishButton(): Promise<void> {
    await this.finishButton.click();
}
async verifyOrderConfirmation(): Promise<void> {
    await expect(this.orderConfirmation).toHaveText(
        'Thank you for your order!'
    );
}
}