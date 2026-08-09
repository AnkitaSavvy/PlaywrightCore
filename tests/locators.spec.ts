import {test,Page, Browser,chromium} from '@playwright/test';

test('register page Test',async({page})=> {
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
await page.getByRole('textbox',{name:'First Name'}).fill('Ankita');
await page.getByRole('textbox',{name:'Last Name'}).fill('shrivastva');
await page.getByRole('textbox',{name:'E-mail'}).fill('abc@gmail.com');
await page.getByRole('button',{name:'Continue'}).click();
//await page.getByRole('link', { name: 'Forgotten Password' }).click(); 
//await page.getByRole('link', { name: 'Forgotten Password' }).last().click();
await page.getByRole('link', { name: 'Forgotten Password' }).nth(0).click();
await page.pause();






});
