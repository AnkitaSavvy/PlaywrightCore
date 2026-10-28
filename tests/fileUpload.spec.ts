import{test} from '@playwright/test';

//it should have <input type="file"> attribute //Never click on upload button it will block
test('single file upload test', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
await page.locator('#single-file').setInputFiles("/Users/ankita/Downloads/OfferLetterMastekKumariAnkita.pdf");
await page.pause();

await page.locator('#single-file').setInputFiles([]);//pass blank array , it will remove the selected file

await page.pause();

})

//it should have <input type="file"> attribute with multi tag
test('Multiple files upload test', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
await page.locator('#multi-file').setInputFiles([
    "/Users/ankita/Downloads/OfferLetterMastekKumariAnkita.pdf",
    '/Users/ankita/Downloads/JD_Test_Automation_Engineer.pdf'
]);
await page.pause();
})




//Upload Without <input type="file">

test('FileChooser file upload test', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

let [fileUpload]= await Promise.all([
page.waitForEvent('filechooser'),
await page.locator('#custom-upload-btn').click()
])
fileUpload.setFiles([
    "/Users/ankita/Downloads/OfferLetterMastekKumariAnkita.pdf",
    '/Users/ankita/Downloads/JD_Test_Automation_Engineer.pdf'
])
await page.pause();
/* fileUpload.setFiles([]); //remove all the selected file

   fileUpload.setFiles([
    "/Users/ankita/Downloads/OfferLetterMastekKumariAnkita.pdf",//it will remove 1
]) 
*/
await page.pause();

})
