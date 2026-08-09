import { Page,test } from "@playwright/test";

test('get attribute value test ', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
let placeholderValue = await  page.getByRole('textbox',{name:'First Name'}).getAttribute('placeholder');
console.log(placeholderValue);

let idValue = await  page.getByRole('textbox',{name:'First Name'}).getAttribute('id');
console.log(idValue);

let hrefValue = await  page.getByRole('link',{name:'Forgotten Password'}).getAttribute('href');
console.log(hrefValue);
await page.pause();
});