import { test, Page, chromium, Browser, Locator } from '@playwright/test';

test('Total links Text on the page', async({page}) =>{
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  //let allLinksText : string[]=  await page.locator('a[href]').allInnerTexts(); //only visible (we prefer always)
  let allLinksText: string[] = await page.locator('//a[@href]').allTextContents();//hidden also

  for(let e of allLinksText){
    console.log(e);
  }

});
/* allInnerTexts() returns visible text from multiple elements, 
   allTextContents() returns all text including hidden content. */