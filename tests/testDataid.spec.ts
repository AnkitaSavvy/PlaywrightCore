import{test,Page,Browser} from '@playwright/test';

test('element with image test', async({page})=>{
/* await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');
// //data-testid --mandatory to have
await page.getByTestId('username-input').fill('ankitalabs'); */

await page.goto('https://app.hubspot.com/signup-hubspot/crm');
await page.getByTestId('FormControl1').fill('naveen@open.com');

await page.pause();
});
//bydefault is data-testid 
//hubspot:https://app.hubspot.com/signup-hubspot/  'data-test-id' in the DOM not working
//for custom id : use it in pw config file testIdAttribute:'data-test-id' or 'data-selenium'or 'id' or any attribute 

