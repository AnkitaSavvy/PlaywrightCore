import { test, Page, chromium, Browser, Locator, expect } from '@playwright/test';
import { create } from 'domain';

//pw uses node js assertion lib: chai Assertion
//testcase assert: mocha 
//hard asssertion and soft assertion
/* hard assertion: failed=> test failed=> end
next lines execute nahi hongi
status: failed */

/* Assertion Failed👉 Test Stops Immediately 👉 Remaining code skipped
----------------------------------
Without hard assertion: login failed👉still clicking dashboard buttons 👉many useless errors❌ messy debugging
---------------------------------- */
/* ✅ Best Practice :Use hard assertion for:
critical checkpoints,navigation validation,login success,important UI presence */


//soft assertion: failed=> test continue=> not end
/* expect.soft -p
expect.soft -f
expect.soft -p

status: failed  4 pass and 1 fail */


/* 🎯 AAA = Arrange → Act → Assert like given-> when ->then

👉 test case design pattern
👉 Used to write clean and readable automation tests

| Step    | Meaning                         |
| ------- | ------------------------------- |
| Arrange | Setup the test data/environment |
| Act     | Perform the action              |
| Assert  | Verify expected result          |

test('login test', async ({ page }) => {

   // ✅ Arrange
   await page.goto('https://example.com');

   // ✅ Act
   await page.fill('#username', 'admin');
   await page.fill('#password', 'admin123');
   await page.click('#loginBtn');

   // ✅ Assert
   await expect(page.locator('h1')).toHaveText('Dashboard');
}); */

test('expect assertion test', async ({ page }) => { 

await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
//expect(100).toBe(200);//no wait
expect(page.url()).toContain('account/register'); //no wait bcz no promise
let header = page.getByRole('heading',{name:'Register Account'});
await expect(header).toBeVisible();
await expect(header).toHaveText('Register Account');//when error coming then we can check have text is visible or not

//naveen value is available or not in input field
await page.locator('#input-firstname').fill('Naveen Automation');
await expect(page.locator('#input-firstname')).toHaveValue('Naveen Automation');

console.log('hello automation......');
//verify total no. links available on links section
await expect.soft(page.locator('aside#column-right a')).toHaveCount(13);

//how will we verify 6 values in dropdown
await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');
await expect(page.getByTestId('country-select').locator('option')).toHaveCount(6);
await page.getByTestId('country-select').selectOption('India');
expect(page.getByTestId('country-select')).toHaveValue('in');//check the value attribute in dom
await page.pause();

});

test('expect assertions for element state test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/elementstate.html');
    //expect(10).toBe(20);
    await expect(page.locator('#register-btn')).toBeDisabled({ timeout: 10000 });
    //only for text field is empty or not
    await expect(page.locator('#firstname')).toBeEmpty();
    //only for text field is editable or not
    await expect(page.locator('#firstname')).toBeEditable();
    await expect(page.locator('#email')).toBeEmpty();
    await expect(page.locator('#email')).toBeEditable();
    await expect(page.locator('#email')).toBeEditable();
    //verify read only field is not editable
    await expect(page.locator('#username')).not.toBeEditable();
    //checkbox checked or not
    await page.locator('#agree').check()
    await expect(page.locator('#agree')).toBeChecked();
    //verify button is enabled 
    await expect(page.locator('#register-btn')).toBeEnabled();
    //verify button is disabled 
    await page.locator('#agree').uncheck();
    await expect(page.locator('#register-btn')).toBeDisabled();
    
});


test('expect assertions for element attributes test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/elementstate.html');

    await expect(page.locator('#firstname')).toHaveAttribute('type', 'text');
    await expect(page.locator('#firstname')).toHaveAttribute('placeholder','Enter first name');

    await expect(page.locator('#username')).toHaveAttribute('readonly', '');
    await expect(page.locator('[data-test="firstname"]')).toHaveId('firstname');

    await expect(page.locator('#agree')).toHaveAttribute('data-test','agree-checkbox');//key value pair
    
});



/* ✅ Real Use Cases of Hard Assert
| Scenario                 | Why Hard Assert?                   |
| ------------------------ | ---------------------------------- |
| Login success            | Login fail → आगे kuch nahi chalega |
| Dashboard open           | Wrong page → invalid test          |
| Payment success          | Critical flow                      |
| API status code          | Main validation                    |
| Important button visible | Action impossible                  |

✅ Real Use Cases of Soft Assert
| Scenario                | Why Soft Assert?         |
| ----------------------- | ------------------------ |
| Profile page validation | All fields check karna   |
| Form validation         | Multiple errors collect  |
| UI testing              | All labels/images verify |
| Table validation        | Multiple rows verify     |
| Cosmetic checks         | Non-critical             |
 product info checks
*/

/* e2e test{
create blog
get blog
update blog
delete blog
} it should be end to end testing in single test bcz it get create issues in parallel execution
*/