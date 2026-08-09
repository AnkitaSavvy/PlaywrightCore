import { Page,test,Browser,chromium, FrameLocator, Frame, Locator } from "@playwright/test";

//write on page console :alert("hi this popup")
//3 types of popup : alert, confirmation , prompt
//Only one JavaScript dialog can appear at a time in ui because it blocks execution, whereas multiple UI popups can exist simultaneously.
//❗ First alert close hone ke baad hi second aayega ui pe✔ Ek time pe sirf 1
//Need of listner: alert message verify karna ho ✔confirm me cancel click karna ho ✔prompt me text pass karna ho


/* Playwright → alert ko automatically handle kar deta hai
👉 Test hang nahi hota ✔
👉 Alert auto accept ho jata hai
but
❌ Tum alert ka message read nahi kar paoge
❌ Tum control nahi kar paoge (accept/dismiss/custom text) */

test('js alert pop up handle  test', async({page})=>{
//before entering the url we have to create the custom listners

//1.Alert-- just accept it
page.on('dialog',async(popup)=>{ //we can write anything place of popup 
  if(popup.type()=== 'alert'){
    console.log(popup.message()); //print alert msg from alert for validation 
  await popup.accept();
}
});

//2.confirm--  accept it or dismiss
page.once('dialog',async(popup)=>{
  if(popup.type()=== 'confirm'){
  console.log(popup.message());
  await popup.accept();
  //await popup.dismiss();
}
});

//3 - Prompt -- pass text and accept it...
page.on('dialog', async (popup) => {
        if (popup.type() === 'prompt') {
            console.log(popup.message()); //I am a JS prompt
            await popup.accept('Naveen Automation Labs...'); //click ok
             //await popup.dismiss();
        }
});

//click on alert
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
await page.getByRole('button',{name:'Click for JS Alert'}).click();//once -- done
await page.waitForTimeout(3000);

await page.getByRole('button', { name: 'Click for JS Confirm' }).click(); //alwys handled
await page.waitForTimeout(3000);

await page.getByRole('button', { name: 'Click for JS Prompt' }).click();///alwys handled
await page.waitForTimeout(3000);

await page.getByRole('button', { name: 'Click for JS Alert' }).click(); //PW will accept it or it wont be handled bcz of page.once

await page.getByRole('button', { name: 'Click for JS Confirm' }).click(); //alwys handled

await page.getByRole('button', { name: 'Click for JS Alert' }).click(); //PW will accept it or it wont be handled


await page.getByRole('button', { name: 'Click for JS Alert' }).click(); //PW will accept it or it wont be handled

await page.getByRole('button', { name: 'Click for JS Confirm' }).click(); //alwys handled

await page.pause();

})

test('js alert popup rediff  test', async({page})=>{

//1.Alert-- just accept it
page.on('dialog',async(popupDialog)=>{
    if(popupDialog.type() === 'alert'){
       console.log(popupDialog.message());
       await popupDialog.accept();
    }
})

//click on alert
await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
await page.getByRole('button',{name:'Log In'}).highlight();
await page.waitForTimeout(3000);
await page.getByRole('button',{name:'Log In'}).click();
await page.waitForTimeout(3000);
await page.pause();

})
