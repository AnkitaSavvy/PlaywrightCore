import { test, Page, chromium, Browser } from '@playwright/test';
test('jquery drop down value test', async ({ page }) => {
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/'); //enter the url
    await page.locator('#justAnInputBox').click();

    //out of 45 --> 3 (choice 5) --> first()
    await page.locator('span.comboTreeItemTitle ')
    .filter({hasText:'choice 5'})
    .first()
    .click();

    selectChoices(page, ['choice 2 2','choice 6 1','choice 7']);
    
    //selectAllChoices(page);

    await page.pause();
});

//when we want to select multiple choices
async function selectChoices(page:Page, choices:string[]):Promise<void>{
    for(let choice of choices){
    //await page.locator('span.comboTreeItemTitle ').filter({hasText:`${ch}`}).first().click();
    await page.locator('span.comboTreeItemTitle ').filter({hasText: choice }).first().click();
    //await page.getByText(choice , { exact: true }).first().click(); or we can use getByText
    }

}

//selectAllChoices
/* 
async function selectAllChoices(page: Page): Promise<void> {

  const choices = page.locator('span.comboTreeItemTitle');

  const count = await choices.count();
  console.log(count);//45

  for (let i = 0; i < count; i++) {
    await choices.nth(i).click();
  }
} */

