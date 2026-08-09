/* wait in pw:

script-----sync(wait)-----browser(app)

PW: auto wait in-built.. is 30 secs
auto checks: element is visible, stable, enabled, events -->then perform action on it

explict wait: own wait 

1. methods: 

1. waitForSelector(): legacy wait: very old :not recommended
--page object / xpath/css , we can not use  getByRole with it
waitForSelector() only applicable on css/xpath

let msg= await page.waitForSelector('.success-message');
let text= msg.textContent();
console.log('text');

 (await page.waitForSelector('#input-firstname11')).fill('naveen');//deliberately wrong locator then wait for 5000 from pwconfig
 states: attached, visible
 return type: ElementHandle<SVGElement | HTMLElement>

2. waitForLoadState(): 
--only uses for pages/navigation/goto not for locator/elements

3. waitForURL():
--click on link then
--navigating to the login page then
--page.waitForURL('')

4. waitFor():better thn wait for selector
--applied on locator: xpath/css and getBy also
 states: attached(loaded in the dom), detached, visible, hidden(not available on the page)
 --return type: void

5. waitForEvent:
-dialog, page, download
await Promise([
	waitForEvent('page');  //page //file chooser //download
	//click()
])

6. assertions : expect(): act vs exp
--hard/soft
--auto wait : in-built with expect()
--default timeout: 5 secs */

/* auto wait: 30 secs
config level
test level
 */

import { test, Page, chromium, Browser, Locator, expect, ElementHandle } from '@playwright/test';
import { secureHeapUsed } from 'node:crypto';
import { config } from 'node:process';


test('wait test', async ({ page }) => {

    test.setTimeout(120000); //test level for specific test
    await page.goBack({timeout:3000});//navigation
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', { timeout: 6000 });
    //await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', {waitUntil:'load'});//"load" | "domcontentloaded" | "networkidle" | "commit" | 

    //waitForSelector
    (await page.waitForSelector('#input-firstname')).fill('naveen');//also directly we can write and only applied on css/xpath
    let firstNameElement: ElementHandle<SVGElement | HTMLElement> = await page.waitForSelector('#input-firstname', { timeout: 5000, state: 'visible' }); //return type of wait for selector =ElementHandle (SVGElement | HTMLElement)
    await firstNameElement.fill('Naveen')

    //waitForURL
    //await page.waitForURL(/.*register.*/)//we have to supply whole url or regexp
    await page.waitForURL(/.*register.*/, {timeout:3000});//added custom wait time and global wait will not work
    
    //waitFor 
    await page.getByRole('heading',{name: 'Register Account', level:1}).waitFor({state:'visible', timeout:3000});//getby
    await page.locator('#input-lastname').waitFor({ timeout: 5000, state: 'visible' });//css/xpath

    //wait time
    let lastName: Locator = page.locator('#input-lastname121212');
    await lastName.fill('naveen'); //it will wait upto 1000 config level(actiontimeout)
    //await lastName.fill('naveen', { timeout: 5000 }); //it will wait upto 5000 test level

    //20secs timeout from config (global time)timeout:20000 //p3
    //10 actiontimeout (action like click,fill,highlight etc) from config actionTimeout:10000,//p2
    //5 test level  { timeout: 5000 } //p1
    
    //expect:{ timeout:5000 } from config
    expect(page.getByRole('heading', { name: 'Register Account', level: 1 })).toHaveText('Register Account11');//5000
    
    let lastName1: Locator = page.locator('#input-lastname121212');//we dont have to wait for any promise on the page thats why no await
    console.log(lastName); //no action but pw not showing error (loc is wrong)
    //sel://driver.findElement(By.id('21212121'));//if not found then give no such element found
    await lastName.fill('naveen', { timeout: 10000 });//performing action 





});


//default wait: 60 secs

//login page -- check the logo
//test.setTimeout(5000);
//trasactions end to end test CRUD: 120 ms
//test.setTimeout(120000);

//t3 -- 60 secs
//t4 - 60 secs

//global wait time > test level timeout