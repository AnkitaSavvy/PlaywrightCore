import {test} from '@playwright/test';

//   playwright.config.ts -> use-> add viewport:{height:1200, width:1300} //global
//view port must be null if we want to open in maxmize mode

//test.use({viewport: { height: 1600, width: 800 }})// for all test in page


test('right context click test', async({page})=>{
//page.setViewportSize({width:500, height:600}); //for this specific test
await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html'); //web page
await page.getByText('right click me', { exact: true }).click({ button: 'right' });

await page.pause();

})