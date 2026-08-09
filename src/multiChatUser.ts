//IIFE function: config file is not applicable

import { Browser, BrowserContext, chromium, Page } from "playwright";

(async () => {
  let browser: Browser = await chromium.launch({ channel: 'chrome', headless: false, slowMo: 2000 });//👉 har action ke beech 2000 milliseconds (2 seconds) ka delay
   
    let ctx1: BrowserContext = await browser.newContext();
    let ctx2: BrowserContext = await browser.newContext();
    let ctx3: BrowserContext = await browser.newContext();
    let ctx4: BrowserContext = await browser.newContext();

    let page1: Page = await ctx1.newPage();
    let page2: Page = await ctx2.newPage();
    let page3: Page = await ctx3.newPage();
    let page4: Page = await ctx4.newPage();

    await page1.goto('http://localhost:3000');//naveen
    await page2.goto('http://localhost:3000');//ankita
    await page3.goto('http://localhost:3000');//anvi
    await page4.goto('http://localhost:3000');//sar



    await page1.locator('[data-testid="username-input"]').fill('Naveen');
    await page1.locator('[data-testid="join-btn"]').click();

    await page2.locator('[data-testid="username-input"]').fill('Ankita');
    await page2.locator('[data-testid="join-btn"]').click();

    await page3.locator('[data-testid="username-input"]').fill('Anvi');
    await page3.locator('[data-testid="join-btn"]').click();

    await page4.locator('[data-testid="username-input"]').fill('sar');
    await page4.locator('[data-testid="join-btn"]').click();

    await page1.locator('[data-testid="message-input"]').fill('Hi Ankita how are u??')
    await page1.locator('[data-testid="send-btn"]').click();

    await page2.locator('[data-testid="message-input"]').fill('Hi Naveen, im good... how are u??')
    await page2.locator('[data-testid="send-btn"]').click();

    await page3.locator('[data-testid="message-input"]').fill('Hi Sarthak are u there??')
    await page3.locator('[data-testid="send-btn"]').click();

    await page4.locator('[data-testid="message-input"]').fill('Hello guys, yes i am here...')
    await page4.locator('[data-testid="send-btn"]').click();



    //browser.close();
})();

//goto() = website open karna
/* Sequential execution sirf workers = 1 se hi hota hai
workers = 2 ya workers = 4 me parallel execution hota hai */

//worker:
//let we have 8 tests and 4 workers, then With 4 workers, Playwright runs 4 tests in parallel, and as soon as a worker finishes, it picks the next test from the queue.
/* 
Time 0:
W1 → T1   W2 → T2   W3 → T3   W4 → T4
Time 1:
W1 → T5   W2 → T2   W3 → T3   W4 → T4
Time 2:
W1 → T5   W2 → T6   W3 → T7   W4 → T8 */
//apna browser/context use karta hai, independent hota hai,dusre worker se data share nahi karta