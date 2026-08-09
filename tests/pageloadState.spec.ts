import {Page,test} from '@playwright/test';

test('page loading state test',async({page})=> {
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home',{waitUntil:'load'});//optional

});

    //page laoding states: interview
    //load: all resources(images, elements, css, scripts) loaded -- default option we use 
    //domcontentloaded: HTML DOM is paresed, DOM is ready
    //networkidle: no network activity for 500 ms -- good?
    //commit: first response byte received from server