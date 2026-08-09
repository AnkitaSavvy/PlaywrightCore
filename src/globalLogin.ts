import {Browser,Page,chromium}from "playwright";
//IIFE function: config file is not applicable
//prerequiste file not a test file
//vip ques storage stage? and how to configure?
//not work in this case otp, captcha,QR code, verification link  MS authenticator
(async()=> {
 
   let browser:Browser = await chromium.launch({headless:false, channel:'chromium'});
   let page:Page= await browser.newPage();
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
   await page.getByRole('textbox',{name: 'E-Mail Address'}).fill('jane.moore442@nal.com');
   await page.getByRole('textbox',{name: 'Password'}).fill('VJ{jnLG*h#nI');
   await page.getByRole('button',{name: 'login'}).click();
   await page.waitForSelector("img[title='naveenopencart' ]");
   await page.context().storageState({ path:'loginStorageState.json' }); //it will store all the login details 
   await browser.close();
}) ();

