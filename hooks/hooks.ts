import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium} from 'playwright';
import { CustomWorld} from '../fixtures/custom-fixtures';

import { LoginPage} from '../pages/LoginPage';
import { InventoryPage} from '../pages/InventoryPage';

import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { CartPage } from '../pages/CartPage';
import { Header } from '../components/Header';


setDefaultTimeout(30000);

Before(async function (this: CustomWorld){
this.browser = await chromium.launch({

    headless: false
})
this.context = await this.browser.newContext();
this.page = await this.context.newPage();
this.loginPage = new LoginPage(this.page);
this.inventoryPage = new InventoryPage(this.page);
this.productDetailsPage = new ProductDetailsPage(this.page);
this.cartPage = new CartPage(this.page);
this.header = new Header(this.page);


});

After(async function (this: CustomWorld){

   if(this.context)
   {
    await this.context.close();
   }
   if(this.browser)
   {
    await this.browser.close();
   }

});