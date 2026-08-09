
import {test,Page} from "@playwright/test";

test('textbox highlight Test', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  await page.getByRole('textbox', {name:'First Name'}).highlight();
  //debugging time or check any msg 
  await page.pause();
});
