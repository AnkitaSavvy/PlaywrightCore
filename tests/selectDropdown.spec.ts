
import { test, Page, chromium, Browser } from '@playwright/test';

test('select drop down value test', async ({ page }) => {
    await page.goto('https://orangehrm.com/contact-sales'); //enter the url
    //await page.waitForTimeout(3000);
    await page.getByRole('combobox',{name:'Country'}).selectOption('India');//direct dropdown vlaue
    await page.waitForTimeout(2000);
    await page.getByRole('combobox',{name:'Country'}).selectOption({label: 'Algeria'});//visible text
    await page.waitForTimeout(2000);
    await page.getByRole('combobox',{name:'Country'}).selectOption({value: 'Angola'});//value attribute
    await page.waitForTimeout(2000);
    await page.getByRole('combobox',{name:'Country'}).selectOption({index:10}); //index number but we avoid bcz if dev update option index will change 
    await page.waitForTimeout(2000);
    let currentVal= await page.getByRole('combobox',{name:'Country'}).inputValue();
    console.log(currentVal);//Armenia

    await page.pause();
});



test('multi select drop down value test', async ({ page }) => {
    await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html'); //enter the url

    await page.locator('[name = "Month"]').selectOption(["January", "May", "November"]);

    await page.pause();

});