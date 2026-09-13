import { World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { LoginPage} from '../pages/LoginPage';
import { InventoryPage} from '../pages/InventoryPage';

import { CartPage } from '../pages/CartPage';
import { ProductDetailsPage} from '../pages/ProductDetailsPage';
import { Header } from '../components/Header';

export class CustomWorld extends World {

  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  loginPage!: LoginPage;
  inventoryPage!: InventoryPage;
  productDetailsPage!: ProductDetailsPage;
  cartPage!: CartPage;
  header!: Header;

  constructor(options: IWorldOptions) {
    super(options);
  }
}