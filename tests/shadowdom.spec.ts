import { Page,test,Browser,chromium, FrameLocator, Frame } from "@playwright/test";

//xpath doesnot do auto piercing shadow roots
//Auto-piercing ka matlab hai Playwright automatically Shadow DOM ke andar elements access kar leta hai
//in selenium we use javascript executor for shadow dom
//shadow root should be open

test('shadow Dom element test', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');

//1 · Single Shadow DOM
await page.locator('#shadow-btn').click();
//page.locator('single-shadow-element').locator('button')

//2 · Shadow DOM Form
await page.locator('#username').fill('Naveen Automation Labs');
await page.getByRole('button', { name: 'Submit' }).click();
//page.locator('shadow-form-element').locator('#email')

//3 · Two-Level Nested Shadow DOM 
//await page.getByPlaceholder('Type inside nested shadow...').fill('I love PW');
await page.locator('outer-shadow-element').locator('inner-shadow-element').getByPlaceholder('Type inside nested shadow...').fill('I love PW');

//4 · Three-Level Deep Shadow DOM
await page.locator('level-one-element').locator('level-two-element').locator('level-three-element').locator('button').click();
//await page.getByRole('button',{name:'Deep Click'}).click();

//5 · Shadow DOM with Slots
await page.locator('slot-container-element').getByRole('button', { name: 'Slotted Button' }).highlight();
await page.locator('slot-container-element').getByRole('button', { name: 'Slotted Button' }).click();

//6 closed btn
//close Shadow DOM : we cant handle it by any automation tool not supported by pw
//await page.getByPlaceholder('#closed-input').fill('closed shadow dom');//gives error

//7 · Shadow DOM Todo List
//await page.locator('shadow-todo-element').getByRole('checkbox', { name: 'Assert element visibility' }).check();
let todo = ['Write Playwright tests','Run tests in CI','Handle Shadow DOM locators'];
for(let e of todo){
  await page.getByLabel(`${e}`).check();  
}

//8 · Nested Shadow Dropdown
await page.locator('shadow-dropdown-wrapper').locator('shadow-dropdown-menu').locator('select').selectOption({value:'playwright'});
await page.pause();

})
//freeze the page then check the dom it will not disappear the element
/* setTimeout(()=> {debugger;},5000);
or  from locatorlabs */