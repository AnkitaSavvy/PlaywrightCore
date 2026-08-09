import { Page,test,Browser,chromium, FrameLocator, Frame, Locator } from "@playwright/test";
//SVG:
//css selector: normal way
//xpath: regular xpath will not be supported
//local-name() or name()

test('Flipkart SVG Search Icon element test', async({page})=>{
await page.goto('https://www.flipkart.com/');
await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('Macbook Pro');
//await page.getByRole('button',{name:'Search for Products, Brands and More'}).locator('svg[fill="none"]').click();
await page.getByRole('button', { name: 'Search for Products, Brands and More' }).locator('//*[local-name()="svg"]').click();


await page.pause();

})
////button[@title='Search for Products, Brands and More']//*[local-name()='svg']
////*[name()='svg']

test('SVG Graph element test', async ({ page }) => {
    await page.goto('https://petdiseasealerts.org/forecast-map');

    await page.waitForTimeout(5000);
    //css = svg#map-svg g#regions g.region or g.region

    //xpath = //*[local-name()='svg' and @id='map-svg']//*[local-name()='g' and @id='regions']//*[local-name()='g' and @class='region']
    //or *[local-name()='g' and @class='region']

    //map-instance-4564
    //await page.locator('//iframe[contains(@id, "map-instance")]')
    //iframe[id*="map-instance"] id contains 
    //iframe[id$="map-instance"] id starts with
    //iframe[id^="map-instance"] id ends with

    let frame = page.frameLocator('iframe[id*="map-instance"]');
    let allregion: Locator[] = await frame.locator('g.region').all();
     console.log('total number of regions: ', allregion.length);//51

    for(let reg of allregion){
    //await e.hover(); //hovering on all region 1 by 1 //giving error after delaware bcz of heigth and wid
    let box = await reg.boundingBox();
        let centerX= box!.x+ box!.height /2;
        let centerY= box!.y+ box!.width/2;
        await page.mouse.move(centerX,centerY)
       
    let statename= await reg.getAttribute('id');
    console.log(statename); //51 statename 
}
    await page.pause();
});
