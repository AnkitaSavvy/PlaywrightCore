import { test, Page, chromium, Browser } from '@playwright/test';

test('right context click test', async ({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html'); //enter the url
    await page.locator(`span:has-text("right click me")`).click({button:'right'});
    await page.pause();
    await page.getByText('Copy', {exact:true}).click();
    await page.pause();
});

test('level 2 menu submenu handing', async ({ page }) => {

    await page.goto('https://www.spicejet.com/');
    
    await page.getByText("Travel Policies",{exact:true}).hover();
    await page.getByText("Passenger Rights",{exact:true}).waitFor({state:'visible'});
    await page.getByText("Passenger Rights",{exact:true}).click();
    await page.pause();

});

test('level 4 menu submenu handing', async ({ page }) => {

    await page.goto('https://www.bigbasket.com/');
    await page.getByRole('button',{name:'Shop by Category'}).nth(1).click();//l1
    await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link', { name: 'Beverages' }).hover();//l2
    await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link', { name: 'Tea' }).hover();//l3
    await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link', { name: 'Green Tea' }).click();//l4
    await page.pause();

});


test('drag and drop handing', async ({ page }) => {
    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');

    let source = page.locator('#draggable');
    let target=  page.locator('#droppable');
    await source.dragTo(target);
    
    await page.pause();
});

test('keyboard Enter handing', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let searchBox = page.getByRole('textbox', { name: 'Search' });
    await searchBox.fill('macbook');
    //press enter:
    searchBox.press('Enter');
    await page.pause();
});

//try double click on any app or toggle
//try shift tab
test('keyboard Tab Sequence Accessibility form test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let firstName = page.getByRole('textbox', { name: 'First Name' });
    await firstName.fill('anki');

    await firstName.press('Tab');//or await page.keyboard.press('Tab');
    await page.keyboard.type('shri');

    await page.keyboard.press('Tab');
    await page.keyboard.type('Devani1234@gmail.com');//email

    await page.keyboard.press('Tab');
    await page.keyboard.type('8765432343');//tel

    await page.keyboard.press('Tab');
    await page.keyboard.type('Devani@123');//pwd

    await page.keyboard.press('Tab');
    await page.keyboard.type('Devani@123');//con pwd

    await page.keyboard.press('Tab'); //no radio by default goto
    //await page.keyboard.press('ArrowRight');//moving to yes
    //await page.keyboard.press('ArrowRight');//again select no
    

    await page.keyboard.press('Tab');//privacy policy link
    await page.keyboard.press('Tab');//checkbox

    await page.keyboard.press('Space');//click on checkbox
    await page.keyboard.press('Enter');//press enter - submit the form

    await page.pause();
});

test('keyboard copy paste test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let firstName = page.getByRole('textbox', { name: 'First Name' });
    await firstName.fill('Shruti');

    //Control+A -windows
    //Meta+A-  mac
    //ControlOrMeta+A - window or mac
    await firstName.press('ControlOrMeta+A');//select
    await firstName.press('ControlOrMeta+c');//copy

    let lastName = page.getByRole('textbox', { name: 'Last Name' });
    await lastName.press('ControlOrMeta+V');//paste
    
    await page.waitForTimeout(3000);
    await firstName.press('ControlOrMeta+A');//select
    await firstName.press('Backspace');//delete
    
    
    //hard refresh : control+shift+R
    await page.keyboard.press('Control+Shift+R');//hard refresh
    
    //open in a new tab/window://control+click
    await page.getByRole('link', { name: 'Forgotten Password', exact: true }).click({modifiers:['ControlOrMeta']});

    await page.pause();
});