import { test, Page, chromium, Browser, Locator } from '@playwright/test';

test('Total links on the page', async({page}) =>{
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  //await page.goto('https://www.flipkart.com/');
  //links: <a>
  //imags: <img>
  //no / and @ means css selector
  let allLinks : Locator[]=  await page.locator('a[href]').all(); //  //a[@href]
  let totallinks= allLinks.length; //total length 81
  console.log('Total links on the page: ', totallinks);

  for(let e of allLinks){
    let text= await e.innerText(); //all 81 text 
    let hrefValue= await e.getAttribute('href');//all 81 links
    console.log(text," : ", hrefValue );
  }

});

test('Total images on the page', async({page}) =>{
  await page.goto('https://www.flipkart.com/');
  let allimages : Locator[]=  await page.locator('img').all(); //  //a[@href]
  let totalimages= allimages.length; //total length 81
  console.log('Total links on the page: ', totalimages);

  for(let e of allimages){
    let altValue= await e.getAttribute('alt'); //all 81 text 
    let srcValue= await e.getAttribute('src');//all 81 links
    console.log(altValue," : ", srcValue );
  }

});

test('Total links', async({page}) =>{
  await page.goto('https://www.flipkart.com/');
  let allLinksCount : number =  await page.locator('a').count(); // 419 
  console.log(allLinksCount);

});

test('iterate links and click with break ', async({page}) =>{
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  let allLinks : Locator[]=  await page.locator('a.list-group-item').all(); //13  links //if we use allinnertext then it will string so cant click on it
  

for(let e of allLinks){ //e is locator so that we can click on it
    await e.highlight(); //highlight every link one by one till transactions
    let linkText= (await e.innerText()).trim();//
    console.log(linkText);
    await page.waitForTimeout(1000);

  if(linkText === 'My Account'){
     await e.click();
     break;
  }
}
});