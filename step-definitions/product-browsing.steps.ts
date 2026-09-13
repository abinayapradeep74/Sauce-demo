import { Given, Then, When,  } from '@cucumber/cucumber';
import { CustomWorld} from '../fixtures/custom-fixtures';
import { Header } from '../components/Header';




When('I select the {string} product',
    async function (this: CustomWorld, productName: string) {

        await this.inventoryPage.selectProduct(productName);

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
