import {test,Page} from "@playwright/test";

test('radio and checkbox test', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
await page.getByRole('radio', { name: 'Yes' }).click();
await page.getByRole('radio', { name: 'No' }).click();
await page.getByRole('checkbox').click();

await page.pause();
});

test('multi checkbox Test', async ({ page }) => {
  await page.goto('https://testing.qaautomationlabs.com/checkbox.php');
  await page.getByRole('checkbox', {name:'Enable Checkbox 1'}).click();
  //await page.getByRole('checkbox', { name: 'enable Checkbox 2', checked: true }).click();
  await page.getByRole('checkbox').nth(2).click();
  await page.pause();
});


test('multi radioButton click Test', async ({ page }) => {
  await page.goto('https://testing.qaautomationlabs.com/radio-button.php');
  //await page.getByRole('radio', {name:'Male'}).first().click();//when multiple same name element found then use nth, first/last
  await page.getByRole('radio', {name:'Male'}).nth(0).click();
  await page.pause();
});

test('textbox fill Test', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  await page.getByRole('textbox', { name: '* Password' ,exact:true }).fill('34554');
  await page.getByRole('textbox', { name: '* Password Confirm' , exact:true }).fill('34554');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.pause();
});


test('textarea fill Test', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=42');
  let address = `101, NFC
    new colony,
    south bangalore,
    near petrol pump,
    bangalore, 898989`;

  await page.getByRole('textbox', { name: 'Textarea' }).fill(address);
  //avoid * textarea bcz there is no dublicate name field , use when 2 or many same name field                                                       
  await page.getByRole('textbox', { name: '* Date', exact: true }).fill('2026-02-23');
  
  await page.pause();
});

//shortcut= run commonds 
/* package.json
"scripts": {

   "codegen":"https://testing.qaautomationlabs.com/radio-button.php"
  }, 
  
 run in terminal :npm run codegen */


