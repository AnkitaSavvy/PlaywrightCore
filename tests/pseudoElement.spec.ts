import { Page,test,Browser,chromium, FrameLocator, Frame, Locator } from "@playwright/test";
//HTML change kiye bina extra UI add karna = pseudo-element
//pseudo-elements DOM me nahi hote
//locator se directly access nahi hota
//JS evaluate se read kar sakte ho
/* Pseudo-elements like ::before and ::after are not part of the DOM, 
so Playwright cannot locate them directly; they can be accessed using computed styles.
-- "Pseudo-elements DOM ka part nahi hote, so directly locate nahi kar sakte.
But agar validate karna ho to getComputedStyle use kar sakte hain."
*/

//check on console of page : window.getComputedStyle(document.querySelector('label[for= "input-firstname"]'),'::before').getPropertyValue('color')

test('Flipkart SVG Search Icon element test', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

//find content in dom
let content = await page.evaluate(()=>{
    return window.getComputedStyle(
    document.querySelector('label[for= "input-firstname"]')!,'::before')
    .getPropertyValue('content');
});
console.log(content); //"*"

//find color in dom
let color = await page.evaluate(()=>{
    return window.getComputedStyle(
    document.querySelector('label[for= "input-firstname"]')!,'::before').getPropertyValue('color');
});
console.log(color);//rgb(255, 0, 0)


let title = await page.evaluate(()=>{ //evaluate() browser ke andar JS run karta hai aur result wapas lata hai
  alert('hi this is my js alert');
  return(document.title);
  //console.log(document.URL);
})

console.log(title);//Register Account







await page.pause();
})