import { BrowserType, chromium, firefox, webkit } from 'playwright';

export const browserConfig: Record<string, BrowserType> = {
    chromium,
    firefox,
    webkit
};
