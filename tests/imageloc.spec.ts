import{test,Page,Browser} from '@playwright/test';

test('element with image test', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
await page.getByAltText('naveenopencart').highlight();
await page.waitForTimeout(3000);
await page.getByAltText('naveenopencart').click();
await page.waitForTimeout(3000);
await page.pause();
});

//DOM: accessibility (browser): image
//PW: getByRole....role = img
