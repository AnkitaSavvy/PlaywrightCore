import { test, expect, Page, chromium, Browser } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

//google test is method name , page is from destructuring ,page goto promise thats y use await &async
//browser ko destructure kiya and page variable me store kiya , page ko direct destructure v kar sakte hai

/* test('google test', async({browser})=>{
let page:Page =  await browser.newPage();//Page is a type of page
await page.goto('https://google.com');
let title:string = await page.title();
console.log(title);
let pageurl:string = page.url();
})


 */
//blank destructuring we use when we want to customize my own browser or multiple user scenario
//if we comment totally projects section of playwright.config.ts then test will run and launch cft browser bydefault and when we explicit add browser in test then it will go to the specific browser

test('google test', async({})=>{
let browser:Browser = await chromium.launch({channel:'chrome',headless:false});//open browser //we write here when we want other custom browser otherwise browser will open throgh page and it handled from pw config.js
//let browser: Browser = await webkit.launch({ headless: false });
let page:Page =  await browser.newPage();//Page is a type of page //create a new page/tab
await page.goto('https://google.com');//enter the url
let title:string = await page.title();//get title
console.log(title);
let pageurl:string = page.url();//get the url
console.log(pageurl);

//await page.pause();  //when we not sure about waiting time and for debugging
//we dont need to close the browser here
//in report video isnt showing bcz we didnt destrucing anything (blank) like page or browser and add custom browser
})








//playwright is faster than selenium bcz of architecture
//websocket connection is faster than http connection
//when connection is established we can send many request and server will give the response
//but in http we sent the request then create new connection every time.
//websocket use in chat server , discord, peer to peer connection need, chat on linkedin 