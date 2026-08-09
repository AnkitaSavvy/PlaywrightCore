import { test, Page, chromium, Browser } from '@playwright/test';

test('fetch text value test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('textbox', { name: 'First Name' }).fill('Naveen Automation Labs');
    let firstNamevalue = await page.getByRole('textbox', { name: 'First Name' }).inputValue();
    console.log(firstNamevalue);
    });

    /* innerText() returns visible text, textContent() returns all DOM text including hidden,
     and inputValue() returns the value of input fields.
     innerText = visible
     textContent = full DOM
     inputValue = input ka data */