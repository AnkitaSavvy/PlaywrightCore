import {test,Page} from "@playwright/test";

test('textbox fill with delay Test', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  await page.getByRole('textbox', {name:'First Name'}).pressSequentially('ankita shrivastava', {delay:500});
  //debugging time or check any msg is displaying correct or not.
  await page.pause();
});
