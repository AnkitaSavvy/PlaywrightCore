
import { test, Page, chromium, Browser } from '@playwright/test';

test('google search test', async ({ page }) => {
    await page.goto('https://www.google.com'); //enter the url 
    await page.getByRole('combobox',{name:'Search'}).fill('Naveen Automation Labs');
    await page.locator('div.wM6W7d span').filter({hasText:'github'}).highlight();
    await page.waitForTimeout(2000);
    await page.locator('div.wM6W7d span').filter({hasText:'github'}).click();
    await page.pause();

});

test('amazon search test', async ({ page }) => {
    await page.goto('https://www.amazon.com'); //enter the url
    //await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('MacBook Pro');
    //await page.locator('div.s-suggestion span').filter({hasText:'16 inch'}).click();
    //await page.locator('div.s-suggestion').filter({ hasText: 'macbook pro' }).click();

    await page.getByRole('button', { name: 'macbook pro', exact: true }).click();

    await page.pause();

});

//question select selectoption without select like above