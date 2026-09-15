import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { browserConfig } from '../config/browser-config';
import { environment } from '../config/environment';
import { CustomWorld} from '../fixtures/custom-fixtures';
import { Logger } from '../utils/Logger';
import { PageFactory } from '../pages/PageFactory';
setDefaultTimeout(30000);

Before(async function (this: CustomWorld){
    Logger.info('Starting browser and test scenario');
const browserType = browserConfig[environment.browser];

if (!browserType) {
    throw new Error(
        `Unsupported browser: ${environment.browser}`
    );
}

this.browser = await browserType.launch({
    headless: false
});
this.context = await this.browser.newContext();
this.page = await this.context.newPage();
const pageFactory = new PageFactory(this.page);

this.loginPage = pageFactory.createLoginPage();
this.inventoryPage = pageFactory.createInventoryPage();
this.productDetailsPage = pageFactory.createProductDetailsPage();
this.cartPage = pageFactory.createCartPage();
this.header = pageFactory.createHeader();
this.checkoutPage = pageFactory.createCheckoutPage();
});

After(async function (this: CustomWorld, scenario){

    if (scenario.result?.status === 'FAILED') {
        Logger.error(`Scenario failed: ${scenario.pickle.name}`);
    if (this.page) {
        const screenshot = await this.page.screenshot();

        await this.attach(
        screenshot,
        'image/png'
);
    }
    }
    if (scenario.result?.status === 'PASSED') {
    Logger.info(`Scenario passed: ${scenario.pickle.name}`);
}
   if(this.context)

   {
    await this.context.close();
   }
   if(this.browser)
   {
    await this.browser.close();
   }
});
