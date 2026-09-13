import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../fixtures/custom-fixtures';
import { environment } from '../config/environment';
import { LoginPage } from '../pages/LoginPage';
import { testConfig} from '../config/test-config';

Given('I am on the Sauce Demo login page', async function (this: CustomWorld) {


    await this.loginPage.navigateTo(
        `${environment.baseUrl}${testConfig.routes.login}`
    );
});

When('I enter valid customer credentials',
 async function(this: CustomWorld){


    await this.loginPage.enterUsername(environment.testUserUsername);
    await this.loginPage.enterPassword(environment.testUserPassword);

});

When('I click the login button', async function (this: CustomWorld){

await this.loginPage.clickLogin();

});

Then('I should be successfully logged in', async function (this: CustomWorld){

    await this.inventoryPage.verifyInventoryPage();
});
