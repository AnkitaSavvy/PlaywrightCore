import { test } from "@playwright/test";

//after open any page we want to take screenshot of that 
test('Screenshot', async({page},testInfo)=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
await page.screenshot({path: 'RegisterPageScreenshot.png' , fullPage:true});
await page.screenshot({path: 'RegisterPageVisibleAreaScreenshot.png'});//only visible area
await page.getByAltText('naveenopencart').screenshot({ path: 'logo.png' }); //Element screenshot

//screenshot with options:
    await page.screenshot({
        path: 'customer.png',
        fullPage: true,
        type: 'png',
        //quality: 80,
        omitBackground: true,
        clip: { x: 0, y: 0, width: 500, height: 300 }
    });

//attach screenshot to html report:
    let screenshot = await page.screenshot({ fullPage: true });
    await test.info().attach('register page', {
        body: screenshot,
        contentType: 'image/png'
    });

//attach custom logs:
    await testInfo.attach('register-log', {
        body: 'User: Naveen, Cart: 3 Items, Total Price: $1000',
        contentType: 'text/plain'
    });

    //await page.pause();
await page.pause();

})

