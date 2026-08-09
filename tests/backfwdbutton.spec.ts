import { Page,test } from "@playwright/test";

test('back and forward button simulation test', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
console.log(await page.title());

await page.goto('https://app.hubspot.com/signup-hubspot/crm');
console.log(await page.title());

await page.goBack();
console.log(await page.title());

await page.goForward();
console.log(await page.title());

//refresh the page:
await page.reload();
})