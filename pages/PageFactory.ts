import { Page } from 'playwright';

import { LoginPage } from './LoginPage';
import { InventoryPage } from './InventoryPage';
import { ProductDetailsPage } from './ProductDetailsPage';
import { CartPage } from './CartPage';
import { CheckoutPage } from './CheckoutPage';
import { Header } from '../components/Header';

export class PageFactory {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    createLoginPage(): LoginPage {
        return new LoginPage(this.page);
    }

    createInventoryPage(): InventoryPage {
        return new InventoryPage(this.page);
    }

    createProductDetailsPage(): ProductDetailsPage {
        return new ProductDetailsPage(this.page);
    }

    createCartPage(): CartPage {
        return new CartPage(this.page);
    }

    createCheckoutPage(): CheckoutPage {
        return new CheckoutPage(this.page);
    }

    createHeader(): Header {
        return new Header(this.page);
    }
}