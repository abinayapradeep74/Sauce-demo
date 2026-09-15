import { Given, Then, When,  } from '@cucumber/cucumber';
import { CustomWorld} from '../fixtures/custom-fixtures';
import { Header } from '../components/Header';




When('I select the {string} product',
    async function (this: CustomWorld, productName: string) {

        await this.inventoryPage.selectProduct(productName);

    }
);
When(
    'I add the {string} product to the cart',
    async function (this: CustomWorld, productName: string) {
        await this.inventoryPage.addProductToCart(productName);
    }
);

Then('I should see the product details page', async function(this: CustomWorld)
{
await this.productDetailsPage.verifyProductDetails();

}) ;

When('I add the product to the cart', async function(this: CustomWorld){

await this.productDetailsPage.addToCart();


});

Then('the cart should contain {int} item', async function (this: CustomWorld,expectedCount: number )
{
    await this.header.verifyCartCount(expectedCount.toString());

});
When('I click the shopping cart', async function (this: CustomWorld) {
    await this.header.clickShoppingCart();

});

Then('I should see the {string} product in the cart', async function (this: CustomWorld, productName: string) {

    await this.cartPage.verifyProductInCart(productName);

});
When('I click the checkout button', async function (this: CustomWorld) {
    await this.cartPage.clickCheckoutButton();

});
When(
    'I enter the checkout first name {string}',
    async function (this: CustomWorld, firstName: string) {
        await this.checkoutPage.enterFirstName(firstName);
    }
);
When(
    'I enter the checkout last name {string}',
    async function (this: CustomWorld, lastName: string) {
        await this.checkoutPage.enterLastName(lastName);
    }
);
When(
    'I enter the checkout postal code {string}',
    async function (this: CustomWorld, postalCode: string) {
        await this.checkoutPage.enterPostalCode(postalCode);
    }
);
When('I click the continue button', async function (this: CustomWorld)
{
    await this.checkoutPage.clickContinueButton();
});
Then('I should see the checkout overview page', async function(this: CustomWorld){

await this.checkoutPage.verifyCheckoutOverview();
});
When(
    'I click the finish button',
    async function (this: CustomWorld) {
        await this.checkoutPage.clickFinishButton();
    }
);

Then(
    'I should see the order confirmation',
    async function (this: CustomWorld) {
        await this.checkoutPage.verifyOrderConfirmation();
    }
);
When('I open the menu', async function (this: CustomWorld)
{
    await this.header.clickOpenMenu();
});
When('I click logout', async function (this: CustomWorld)
{
    await this.header.clickLogout();
});
Then('I should see the login page', async function(this: CustomWorld){

    await this.loginPage.verifyLoginPage();
})