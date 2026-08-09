import { test, Page, chromium, Browser } from '@playwright/test';


test('google title test', async ({ page }) => {
    await page.goto('https://google.com'); //enter the url
    let title: string = await page.title();//get the title
    console.log(title);
    let pageUrl: string = page.url();//get the url
    console.log(pageUrl);

    // await page.waitForTimeout(5000);

});