//parent 
//child
//child
// PW chain: semantic + locator + filter
// Webtable

import { test, Page, chromium, Browser } from '@playwright/test';

test('locator chain test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register'); //enter the url
    await page.locator('form').getByRole('textbox', { name: 'First Name' }).fill('Naveen');
    await page.locator('form').getByRole('checkbox').click();
    await page.locator('#column-right').getByRole('link', { name: 'Login' }).click();

    await page.pause();

});

test('webtable checkbox click test', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/'); //enter the url
    await page.locator('#table01 ').locator('tr')
         .filter({hasText: 'Coded UI'})
         .getByRole('checkbox')
         .click();
    await page.locator('#table01 ').locator('tr')
         .filter({hasText: 'Coded UI'})
         .getByRole('button', {name:'delete'})
         .click();

    await page.pause();

});

test('webtable column value test', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/'); //enter the url
   let age=  await page.locator('#table02 ').locator('tr')
    .filter({hasText: 'Ashton Cox'})
    .locator('td').nth(3)
    .innerText();
    console.log(age);

    await page.pause();

});


test('webtable user data test', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/'); //enter the url
    let userData:string[] =  await page.locator('#table02').locator('tr')
                                          //locator('#table02 tr') in css short way 
    .filter({hasText: 'Ashton Cox'})
    .locator('td').allInnerTexts();
    console.log(userData.length);

    for(let e of userData){
        console.log(e);
    }
    await page.pause();

});

test('webtable total rows and colmns', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/'); //enter the url
    let rowCount:number = await page.locator('#table02 tr').count();
    console.log(rowCount);
    let colCount:number = await page.locator('#table02 th').count();
    console.log(colCount);
    await page.pause();

});

test('webtable cricinfo rowdata 2 to 7', async ({ page }) => {
    await page.goto('https://www.espncricinfo.com/series/ipl-2026-1510719/chennai-super-kings-vs-mumbai-indians-44th-match-1529287/full-scorecard'); //enter the url
     let colName:string[] = await page.locator('table.ci-scorecard-table').first()
    .locator('tr')
    .filter({hasText:'Tilak Varma'}).first()
    .locator('td')
    .allInnerTexts();

for (let i = 2; i <= 7; i++) {
  console.log(colName[i]); //5 8 14 0 0 62.50
}
  
await page.pause();


});

test('webtable cricinfo data', async ({ page }) => {
    await page.goto('https://www.espncricinfo.com/series/ipl-2026-1510719/chennai-super-kings-vs-mumbai-indians-44th-match-1529287/full-scorecard'); //enter the url
     let wktTakerName = await page.locator('table.ci-scorecard-table').first()
    .locator('tr')
    .filter({hasText:'Tilak Varma'}).first()
    .locator('td').nth(1)
    .locator('span').last()
    .innerText();
     console.log(wktTakerName);


    await page.pause();

});


test('webtable Full data', async ({ page }) => {
    await page.goto('https://www.w3schools.com/html/html_tables.asp'); //enter the url

    let fullData = await page.locator('table').first().locator('tr').allInnerTexts();

    for (let e of fullData) {
        console.log(e);
        console.log('==========');
    }

    await page.pause();

});

test('webtable all checkbox click', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html'); //enter the url

    let checkBoxes = await page.locator('table tr td').getByRole('checkbox').all();

    for (let e of checkBoxes) {
        await e.click();
        await page.waitForTimeout(500);
    }

    await page.pause();

});