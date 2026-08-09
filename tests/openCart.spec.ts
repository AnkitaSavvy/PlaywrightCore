import {test,Page, Browser,chromium} from '@playwright/test';
test.use({storageState: 'loginStorageState.json'});

test('Open Cart Home page Test',async({page})=> {
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
await page.waitForTimeout(10000);
});

test('Open Cart Cart Page Test', async({page})=> {
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart');
await page.waitForTimeout(10000);
});