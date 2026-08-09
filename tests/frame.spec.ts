import { Page,test,Browser,chromium, FrameLocator, Frame } from "@playwright/test";

test('Iframe element test', async({page})=>{
await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');
//await page.getByRole('img',{name:'Vehicle-Registration-Forms-and-Examples'}).click();
await page.getByTitle('Vehicle-Registration-Forms-and-Examples').highlight();
await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();//clicking image 

//iframe DOM
let frameLocator:FrameLocator = page.frameLocator('#frame-one748593425');

await frameLocator.getByRole('textbox', { name: 'Location' }).fill('Bangalore');
await frameLocator.locator('#RESULT_TextField-1').fill('My Title');

//outside the frame no switching concept in pw like selenium, its autoswitch 
let header = await page.locator('.details__form-preview-title').innerText();
console.log(header);//Vehicle Registration Form
await page.pause();

})

test('frame test', async ({ page }) => {
   await page.goto('https://www.londonfreelance.org/courses/frames/index.html'); //web page
    
   let header = await page.frameLocator('[name="main"]').getByRole('heading', { level: 2 }).innerText();
    console.log(header);
   let footer = await page.frameLocator('[name="bot"]').getByRole('heading', { level: 2 }).innerText();
    console.log(footer);
    await page.pause();
});


//all frame =frames() and giving Frame[]
test('total number of frames test', async ({ page }) => {
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html'); //web page

    let allFrame: Frame[] =  page.frames();
    let frameCount= allFrame.length;
    console.log(frameCount);//9

    for(let e of allFrame){
        let frameUrl= e.url();
        let frameName= e.name();
        console.log(frameName , " : ",frameUrl);
    }
    await page.pause();
});


test('nested frames test', async ({ page }) => {
    await page.goto('https://www.dezlearn.com/nested-iframes-example/'); //web page

   let parentFrame = page.frameLocator('#parent_iframe');
   let childFrame =  parentFrame.frameLocator('#iframe1');
   await childFrame.getByRole('button',{name:'Click Here'}).click();
   //childFrame.locator('#processing').highlight();
   let mesg = await childFrame.locator('#processing').innerText();
   console.log(mesg);

   console.log('----------');

   await parentFrame.getByRole('button',{name:'Click Here'}).click();
   //parentFrame.locator('#processing').highlight();
   let parentmesg = await parentFrame.locator('#processing').innerText();
   console.log(parentmesg);


   //print header msg
   let headermsg= await page.getByRole('heading' , { level: 2 }).innerText();
   console.log(headermsg);

   await page.pause();

    // await page.frameLocator('#parent_iframe')
    //     .frameLocator('#iframe1')
    //     .getByRole('button', { name: 'Click Here' }).click();
});