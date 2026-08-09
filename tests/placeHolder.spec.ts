import {Page,test,chromium} from '@playwright/test';

test('element with placeHolder test', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');//enter the url
await page.getByPlaceholder('First Name').fill('anki');
await page.getByPlaceholder('Telephone').fill('234567890');
page.getByPlaceholder('Password',{exact:true}).fill('pass123');
page.getByPlaceholder('Password Confirm').fill('pass123');

await page.waitForTimeout(5000);
page.pause();

});


