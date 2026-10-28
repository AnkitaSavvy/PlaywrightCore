import { Locator, test , Page } from '@playwright/test';

//browser destructuring bcz we have to handle multiple window (browser context)
test('two window handle test', async ({ browser }) => {   
let context=  await browser.newContext(); // Create a new incognito browser context.
let page = await context.newPage();// Create a new page in a pristine context.
await page.goto('https://orangehrm.com/contact-sales');

let [newPage] = await Promise.all([ //Promise.all() always returns an array.
context.waitForEvent('page'), //start listening the page event before performing the click that triggers the new tab.
page.getByRole('link',{name:'About Us'}).click() ]); //this will click on the AboutUs link

await newPage.waitForLoadState();//wait for loading the new page

console.log(await newPage.title());// Perform action on new tab
await newPage.close();// Close only the new tab
await page.bringToFront(); //focus to Main page.
await page.pause();
});

test('multiple window handle test', async ({ page,context }) => { 
await page.goto('https://orangehrm.com/contact-sales');
//array of links locator
let links:Locator[] = [
page.getByRole('link',{name:'About us'}),
page.getByRole('link',{name:'Contact Us'}),
page.getByRole('link',{name:'Press Releases'}),
page.getByRole('link',{name:'Become a Partner'})]

let childWindowPages:Page[] = []; //blank first bcz we want to store all the new page 1 by 1.

//open all 4 new page(child page)
for (let link of links){
let [newPage] = await Promise.all([
    context.waitForEvent('page'),
    link.click()
])
await newPage.waitForLoadState();
childWindowPages.push(newPage);// push newpage child(1,2,3,4) 1 by 1 to childWindowPages[] 
}

console.log('Total Pages:', context.pages().length);//5

//goto each and every child window and get title , close it.
for(let i=0 ; i<childWindowPages.length; i++){ 
    let child = childWindowPages[i];
    await child.bringToFront();
    console.log(await child.title());
    await child.close();
}
await page.bringToFront();//focus on parent page
console.log('Parent window Title:',await page.title());
console.log('remaining pages:', context.pages().length);//1
await page.pause();
});





//short & crisp
test('2 window handle test ', async({page,context})=>{
await page.goto('https://orangehrm.com/contact-sales');
const[newPage] = await Promise.all([
context.waitForEvent('page'),
page.getByRole('link',{name:'About us'}).click()
])
await newPage.waitForLoadState();
console.log('Newpage title: ', await newPage.title());
await newPage.close();
await page.bringToFront();
await page.pause();
})